 import bloggerJuly from './data/blog-text-july';
import bloggerDetail from './data/blog-textDetails-july';
 
 
cat = postImport.cat;
detailer = postDetail.catDetail; 
 vars = {
id:{ 
  type: String,
  required: true
},
title:{ 
  type: String,
  required: true
},
date:{ 
  type: String,
  required: true
},
did:{ 
  type: String,
  required: true
},
cat3:{
  type: String,
  required: true
},
description:{
  type: String
},
author:{
  type: String,
  required: true
},
blogpost:{
  type: String,
  required: true
},
blogcite:{
  type: String,
  required: true
},
words:{
  type: String
},
image_url:{
  type: String
} }

for (i=0;i<cat.length;i++){ 
  var url =   
   {
    id:i+1, 
  did:detailer.did[i],
  date:detailer.date,
    author:detailer.author,
    cat3:detailer.cat3,
    title:detailer.title, 
    blogpost:texter.blogpost[1+i],
   blogcite:texter.blogcite[1+i]
 }    ;
console.log(url);

   for (i=0;i<url.length;i++){ 
    var cat = ` 
    <div id="${url[i].did}" class="blogDiv"> 
    <hr />  
    <a href="#top"><button>Top</button></a>  
    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
    <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5> 
    <p id="author" class="  author">${url[i].author}</p>   
    <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
    <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
    <br />
    <div id="post">${url[i].blogpost}
    </div>
    <div id="blogcite">${url[i].blogcite}
    </div>` ; 
document.getElementById("paragraph-july").innerHTML += cat; 
} 
  
console.log(cat)
}; 