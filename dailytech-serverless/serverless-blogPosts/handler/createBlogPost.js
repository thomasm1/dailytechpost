const AWS = require("aws-sdk");

const BLOGPOST_TABLE = process.env.BLOGPOST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require("uuid");
module.exports.createNftCoin = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.blogPost !== "string") {
    console.error("Validation Failed");
    return;
  }

  const params = {
    TableName: BLOGPOST_TABLE,
    Item: {
      id: uuid.v1(),
      blogPost: data.blogPost,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  dynamoDb.put(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item),
    };
    callback(null, response);
  });
};
