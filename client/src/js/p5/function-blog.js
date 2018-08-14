import {   functionItem  } from './function-item';
import blogs from './blogs.js';
import  march from './b-march';
import  february from './b-february';
functionItem();

/*
async function getPosts() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}
getPosts().then(posts => console.log(posts));

let maptitle = [
    {name: 'Mercator Projection Map'},
    {name: 'CK-Means Map'},
];
module.exports = getTitle();

*/


// 
console.log("function-blooog"); 
var item = "item string";

var newItemCounter = 0;
 var tmmList = document.getElementById("tmm-list");
// var tmmList = document.querySelector("#tmm-list");

var tmmButton = document.getElementById("tmm-button");
var tmmHeadline = document.getElementById("tmm-headline");

// var listItems = document.getElementById("tmm-list").getElementsByTagName("li");
var listItems = document.getElementById("tmm-list").querySelectorAll("tmm-list li");

tmmList.addEventListener("click", activateItem);

function activateItem(e) { 
    if (e.target.nodeName == "LI"){
        tmmHeadline.innerHTML = e.target.innerHTML;
        for (i = 0;i < e.target.parentNode.children.length; i++) {
    //      e.target.parentNode.children[i].classList.remove("active");
            e.target.parentNode.children[i].classList.remove("active");
        }
    e.target.classList.add("active");
    }
}
tmmButton.addEventListener("click", createNewItem);
/*
function createNewItem() {
    tmmList.innerHTML += '<li style="list-style-type:none">' + blogs[newItemCounter].post + ', 2018</li>'  ;
    newItemCounter++;
    var monthId = (newItemCounter+1);  
    return monthId;
}
*/
function createNewItem() {
    tmmList.innerHTML += '<li id="' + march[newItemCounter].day  + '" style="list-style-type:none">' + blogs[newItemCounter].post + ', 2018</li>'  ;
    newItemCounter++;
    var monthId = (newItemCounter+1);  
    return monthId;
}