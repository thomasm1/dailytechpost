// const PORT = 3001
const express = require('express');
const axios = require('axios')
const cheerio = require('cheerio')

var fs = require('fs');
// var datafile = 'server/data/tech.json';


var router = express.Router();

const app = express()

const newspapers = [
  {name:'New York Times',
      address: 'https://www.nytimes.com/section/technology'},
{
  name:'Washington Post',
  address:'https://www.washingtonpost.com/business/technology/?itid=hp_top_nav_tech'
},{
  name:'Economist',
  address:'https://www.economist.com/science-and-technology'
},
{
  name:'Economist Quarterly',
  address:'https://www.economist.com/technology-quarterly'
},
{
  name:'Reddit/Technology',
  address:'https://www.reddit.com/r/technology/'
}
]

const articles = []

newspapers.forEach(newspaper => {
  axios.get(newspaper.address)
  .then(response => {
      const html = response.data
      const $ = cheerio.load(html)

      $('a:contains("technology")', html).each(function() {
          const title = $(this).text()
          const url = $(this).attr('href')
          articles.push({ 
              title,
          url, 
          source: newspaper.name
      })            
      })  
      // console.log(articles)
  }).catch(err => console.log(err))
})

/* GET tech page. */
router.get('/api/tech', (req, res) => {
    // res.render('tech', { title: 'Express' });
    res.render('tech', articles);
    // res.json(articles)
  });
  
module.exports = router;
