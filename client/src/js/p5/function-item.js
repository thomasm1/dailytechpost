 

//require('../css/style.css'); 
let blogs = require('./blogs.js');
let $ = require('jquery'); 

export   function functionItem() {
$.each(blogs, function(key, value){
    $('#tmm-list').append('<li style="list-style-type:none">' + blogs[key].post + '</li>');   
    return blogs; 
});
};    