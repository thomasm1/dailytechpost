const PORT = 3001
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

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

        
    })
})

app.get('/', (req,res) => {
    res.json('Our Daily Tech: Ecologically Sound Technology News')
})

app.get('/tech', (req, res) => {
    
    // axios.get('https://www.theguardian.com/us/technology/')
    // .then((response) => {
    //     const html = response.data;
    //     const $ = cheerio.load(html);

    //     $('a:contains("blockchain")', html).each(function () {
    //         const title = $(this).text()
    //         const url = $(this).attr('href')
    //         articles.push({ 
    //             title,
    //         url
    //     })
    //     })
        res.json(articles)
    // }).catch((err) => console.log(err))
})

app.listen(PORT, () => {
    console.log(`server starting on ${PORT}`)
})