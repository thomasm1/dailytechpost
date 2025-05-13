const AWS = require("aws-sdk");

const POST_TABLE = process.env.POST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.listPosts = (event, context, callback) => {
  const params = {
    TableName: POST_TABLE,
  };

  dynamoDb.scan(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
    callback(null, response);
  });
};
