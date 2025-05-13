const AWS = require("aws-sdk");
const BLOGPOST_TABLE = process.env.BLOGPOST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.deleteNftCoin = (event, context, callback) => {
  const params = {
    TableName: BLOGPOST_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  dynamoDb.delete(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({ data: "Deletion Successful!" }),
    };
    callback(null, response);
  });
};
