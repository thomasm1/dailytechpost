const AWS = require("aws-sdk");
const BLOGPOST_TABLE = process.env.BLOGPOST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getNftCoin = (event, context, callback) => {
  const params = {
    TableName: BLOGPOST_TABLE,
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
          body: JSON.stringify({ message: "NftCoin not found" }),
        };
    callback(null, response);
  });
};
