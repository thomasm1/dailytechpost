const AWS = require("aws-sdk");
const POST_TABLE = process.env.POST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getPost = (event, context, callback) => {
  const params = {
    TableName: POST_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.get(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }

    const response = data.Item
      ? {
          statusCode: 200,
          body: JSON.stringify(data.Item),
        }
      : {
          statusCode: 404,
          body: JSON.stringify({ message: "Post not found" }),
        };
    callback(null, response);
  });
};
