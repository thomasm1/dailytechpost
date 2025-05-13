const AWS = require("aws-sdk");
const BLOGPOST_TABLE = process.env.BLOGPOST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.updateNftCoin = (event, context, callback) => {
  const datetime = new Date().toISOString();
  const data = JSON.parse(event.body);

  if (typeof data.blogPost !== "string" || typeof data.checked !== "boolean") {
    console.error("Value of blogPost or done is invalide");
    return;
  }

  const params = {
    TableName: BLOGPOST_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      "#nftcoin_text": "blogPost",
    },
    ExpressionAttributeValues: {
      ":blogPost": data.blogPost,
      ":checked": data.checked,
      ":updatedAt": datetime,
    },
    UpdateExpression:
      "SET #nftcoin_text = :blogPost, checked = :checked, updatedAt = :updatedAt",
    ReturnValues: "ALL_NEW",
  };

  dynamoDb.update(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Attributes),
    };
    callback(null, response);
  });
};
