const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const BLOGPOSTS_TABLE = process.env.BLOGPOSTS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());

app.get("/blogposts/:blogPostId", async function (req, res) {
  const params = {
    TableName: BLOGPOSTS_TABLE,
    Key: {
      blogPostId: req.params.blogPostId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();
    if (Item) {
      const { blogPostId, name } = Item;
      res.json({ blogPostId, name });
    } else {
      res
        .status(404)
        .json({ error: 'Could not find blogPost with provided "blogPostId"' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive blogPost" });
  }
});

app.post("/blogposts", async function (req, res) {
  const { blogPostId, name } = req.body;
  if (typeof blogPostId !== "string") {
    res.status(400).json({ error: '"blogPostId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: BLOGPOSTS_TABLE,
    Item: {
      blogPostId: blogPostId,
      name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ blogPostId, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create blogPost" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
