const PORT = 3001
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
app.listen(PORT, () => {
    console.log("server starting on 3001")
})