'use strict';

const AWS = require('aws-xray-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10'});
const uuid = require('uuid/v4');

const postsTable = process.env.POSTS_TABLE;

module.exports.createPost = (event, context, callback) => {  // async event => {
  const reqBody = JSON.parse(event.body);

  const post = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    userid: 1,
    title: reqBody.title,
    body: reqBody.body
  };

  return db.put({
    TableName: postsTable,
    Item: post
  }).promise().then(() => {
    callback(null, response(201, post))
  })
    .catch(err => response(null, response(err.statusCode, err)));
} 




  // return {  
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'function executed successfully',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // }; 
       // Use if not using the http event with the LAMBDA-PROXY integration
        // return { message: 'function executed successfully', event };
// };
