'use strict';
// dev-lambda-dailytech urls:
// URL GET-ALL: https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/posts
// URL GET-ONE:  https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/post/0113ce28-6087-4eeb-8bf8-acaf2acb0928 


 // URL DELETE: https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/post/{id} /METHOD/DELETE
// with body:
 // URL POST:  https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/post
 // URL UPDATE: https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/PROD/post/{id}
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
  DynamoDBDocumentClient, ScanCommand, GetCommand,
  PutCommand, UpdateCommand, DeleteCommand
} = require('@aws-sdk/lib-dynamodb');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { randomUUID: uuid } = require('node:crypto');

const region = process.env.AWS_REGION || 'us-east-1';
const db = DynamoDBDocumentClient.from(new DynamoDBClient({ region }), {
  marshallOptions: { removeUndefinedValues: true }
});
const s3 = new S3Client({ region, maxAttempts: 1 });

const postsTable = process.env.POSTS_TABLE || 'posts';

//  response
function response(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
}
function sortByDate(a, b) {
  if (a.did > b.did) {
    return -1;
  } else return 1;
}
 
module.exports.createPost = (event, context, callback) => {
  const reqBody = JSON.parse(event.body);

  // if (
  //   !reqBody.title ||
  //   reqBody.title.trim() === '' ||
  //   !reqBody.monthOrder ||
  //   reqBody.monthOrder.trim() === ''
  // ) {
  //   return callback(
  //     null,
  //     response(400, {
  //       error: 'title and date required fields'
  //     })
  //   );
  // }

  const post = {
    id:   uuid(), //id,
    // createdAt: new Date().toISOString(),
    did: reqBody.did, 
    monthOrder: reqBody.monthOrder,
    title: reqBody.title,
    date: reqBody.date,
    author: reqBody.author,
    cat3: reqBody.cat3, 
    post: reqBody.post,
    blogcite: reqBody.blogcite,
    categoryId: reqBody.categoryId,
    comments: reqBody.comments,
    state: reqBody.state,
    wordCount: reqBody.wordCount,
    durationGoal: reqBody.durationGoal,
  };

  return db.send(new PutCommand({
      TableName: postsTable,
      Item: post
    }))
    .then(() => {
      callback(null, response(201, post));
    })
    .catch((err) => response(null, response(err.statusCode, err)));
};
const categories = [
  'Web Dev Affairs', 'Musing Blockchain', 'A.I.Now.',
  'Sociology Tomorrow!', 'Quantum Data'
];

// The API's did is YY-MM-DD (also accept YYYY-MM-DD).
function postTime(post) {
  const match = /^(\d{2}|\d{4})-(\d{2})-(\d{2})$/.exec(post.did || '');
  if (!match) throw new Error('Invalid post date');
  const year = match[1].length === 2 ? 2000 + Number(match[1]) : Number(match[1]);
  const time = Date.UTC(year, Number(match[2]) - 1, Number(match[3]));
  const date = new Date(time);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== Number(match[2]) - 1 ||
      date.getUTCDate() !== Number(match[3])) throw new Error('Invalid post date');
  return time;
}

function snapshotPosts(posts) {
  const counts = new Map(categories.map(category => [category, 0]));
  const seen = new Set();
  return posts.filter(post => counts.has(post.cat3)).map(post => {
    if (!post.id || typeof post.title !== 'string' || typeof post.post !== 'string') {
      throw new Error('Invalid public post');
    }
    return { post, time: postTime(post) };
  }).sort((a, b) => b.time - a.time || String(a.post.id).localeCompare(String(b.post.id)))
    .filter(({ post }) => {
      const id = String(post.id);
      if (seen.has(id) || counts.get(post.cat3) >= 10) return false;
      seen.add(id);
      counts.set(post.cat3, counts.get(post.cat3) + 1);
      return true;
    }).map(({ post }) => {
      // Publish only fields needed by the public cards/detail view.
      const { id, did, date, title, post: content, cat3, blogcite, author } = post;
      return { id, did, date, title, post: content, cat3, blogcite, author };
    });
}

// Get all posts and save the shared public snapshot.
module.exports.getAllPosts = async (event, context) => {
  const fetchedAt = new Date().toISOString();
  try {
    const posts = [];
    let cursor;
    do {
      const page = await db.send(new ScanCommand({
        TableName: postsTable,
        ...(cursor ? { ExclusiveStartKey: cursor } : {})
      }));
      if (!Array.isArray(page.Items)) throw new Error('Invalid DynamoDB response');
      posts.push(...page.Items);
      cursor = page.LastEvaluatedKey;
    } while (cursor && Object.keys(cursor).length);
    posts.sort(sortByDate);

    try {
      if (context && typeof context.getRemainingTimeInMillis === 'function' &&
          context.getRemainingTimeInMillis() < 3000) {
        throw new Error('Insufficient time to publish snapshot');
      }
      await s3.send(new PutObjectCommand({
        Bucket: 'tmm-nov',
        Key: 'dailytech/recent-posts.json',
        ContentType: 'application/json',
        CacheControl: 'public, max-age=60',
        ServerSideEncryption: 'AES256',
        Body: JSON.stringify({ version: 1, fetchedAt, posts: snapshotPosts(posts) })
      }), { abortSignal: AbortSignal.timeout(2500) });
    } catch (error) {
      console.warn('Recent-post snapshot was not updated', error.name);
    }
    return response(200, posts);
  } catch (error) {
    console.error('Post list could not be read', error.name);
    return response(500, { error: 'Unable to load posts' });
  }
};

// Get # of posts
module.exports.getPosts = (event, context, callback) => {
  const numberOfPosts = event.pathParameters.number;
  const params = {
    TableName: postsTable,
    Limit: numberOfPosts
  };
  return db.send(new ScanCommand(params))
    .then((res) => {
      callback(null, response(200, res.Items.sort(sortByDate)));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};

// Get one post
module.exports.getPost = (event, context, callback) => {
  const id = event.pathParameters.id;

  const params = {
    Key: {
      id: id
    },
    TableName: postsTable
  };

  return db.send(new GetCommand(params))
    .then((res) => {
      if (res.Item) callback(null, response(200, res.Item));
      else callback(null, response(404, { error: 'Post not found' }));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};

// Update post
module.exports.updatePost = (event, context, callback) => {
  const id = event.pathParameters.id;
  const reqBody = JSON.parse(event.body);
  const { monthOrder, title, date, author, cat3, post, blogcite,state  ,wordCount ,durationGoal  ,categoryId ,comments } = reqBody;

  const params = {
    Key: {
      id: id
    },
    TableName: postsTable,
    ConditionExpression: 'attribute_exists(id)',
    UpdateExpression: 'SET monthOrder = :monthOrder, title = :title, date = :date, author = :author, cat3 = :cat3, post = :post, blogcite = :blogcite, email = :email,state = :state,wordCount = :wordCount,durationGoal = :durationGoal,categoryId = :categoryId, comments = :comments',
    ExpressionAttributeValues: {  
    ':monthOrder':  monthOrder,
    ':title':  title,
    ':date':  date,
    ':author':  author,
    ':cat3':  cat3, 
    ':post':  post,
    ':blogcite':  blogcite,
    ':email': email,
    ':state': state,
    ':wordCount': wordCount,
    ':durationGoal': durationGoal,
    ':categoryId': categoryId,
    ':comments': comments,
    
    },
    ReturnValues: 'ALL_NEW'
  };
  console.log('post updated');

  return db.send(new UpdateCommand(params))
    .then((res) => {
      console.log(res);
      callback(null, response(200, res.Attributes));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};
// Delete a post
module.exports.deletePost = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id
    },
    TableName: postsTable
  };
  return db.send(new DeleteCommand(params))
    .then(() =>
      callback(null, response(200, { body: 'Post deleted successfully' }))
    )
    .catch((err) => callback(null, response(err.statusCode, err)));
};
 
// docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html 