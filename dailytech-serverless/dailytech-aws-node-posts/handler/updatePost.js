const AWS = require("aws-sdk");
const POST_TABLE = process.env.POST_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.updatePost = (event, context, callback) => {
  const datetime = new Date().toISOString();
  const data = JSON.parse(event.body);

  if (typeof data.post !== "string" || typeof data.checked !== "boolean") {
    console.error("Value of post or done is invalide");
    return;
  }

  const params = {
    TableName: POST_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      "#post_text": "post",
    },
    ExpressionAttributeValues: {
      ":post": data.post,
      ":checked": data.checked,
      ":updatedAt": datetime,
    },
    UpdateExpression:
      "SET #post_text = :post, checked = :checked, updatedAt = :updatedAt",
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
