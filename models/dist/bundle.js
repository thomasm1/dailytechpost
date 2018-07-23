/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_blog_text_july__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_blog_text_july___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_blog_text_july__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_blog_textDetails_july__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_blog_textDetails_july___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_blog_textDetails_july__);
 

 
 
cat = postImport.cat;
detailer = postDetail.catDetail; 
 

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {


blogPost = [
  blogpost1 =  
  `<p class="quote">A vast majority of the half-million bodies in the inner asteroid belt may in fact be shrapnel from as few as five parent bodies called "planetesimals," scientists say. But the tangled orbits of those lost worlds meant they were doomed to collide, producing fragments that also collided, producing still more fragments in a cataclysmic cascade that's been going on for more than 4 billion years.<sup>1</sup></p><p> 
</p>
`,
blogpost2 = 
`<p class="quote"><i>Power is “various forms of domination and subordination and the asymmetrical balance of forces which operate whenever and wherever social relations exist.”</i><br /><br />--Michele Foucault<sup>1</sup></p>
<p class="firstparagraph">Ties and balances of power, at their fundamental core are constantly changing variations of symmetry between two agents, whether unilateral or bilateral: Two nodes interlinked. Magnified by overlapping networks and layers of relations, it's easy to see why long-standing institutions are interlocked, for better or worse ... Clearly the trend of turbulence and power grabs reaches far and wide:
 </p>
<p class="quote">Poland was once a beacon for countries struggling to escape the yoke of the Soviet Union and embrace Western democracy. But it is now in league with neighboring nations, like Hungary, whose leaders have turned to authoritarian means to tighten their grip on power, presenting a grave challenge to a European Union already grappling with nationalist, populist and anti-immigrant movements.<br /><br />

The forced retirements of up to 27 of 72 Supreme Court justices, including the top judge, and the creation of a judicial disciplinary chamber were the latest in a series of steps by Poland’s right-wing Law and Justice Party to take over the justice system.
</p>
<p>As it always is in film, it is so now that dire situations have to call upon the true Super Man, Technology, to save the day: And what form this time? Blockchain technology, which presents a cryptographic solution to the problem of trust:<i> If two agents can agree on a third cryptographic intermediary, then a bridge of trust is built--the kind that in the past only institutions could broker!</i>. </p>
<p>And so, two humans devise a new means to exchange without disruption--an indestructable scaffolding firmly set in the foreground from today's creaking and swaying institutions. Sounds good, but where's the music? There seems to be a subtle interlude between the honeymoon stage of investing and inventing new currencies, and little in the way of micro-transactions and <i> the actual <strong>using</strong> it</i>. It takes a little trust to make trust, so the effort is on to make a bridge from the <i>early adopters</i> stage to <i>mainstream adoption</i>...<sup>3</sup>  
</p>`
];
   
 blogCite = [
blogcite1 = 
`<p class="footnotes">1. <a href="https://www.washingtonpost.com/news/speaking-of-science/wp/2018/07/03/many-asteroids-might-be-remnants-of-five-destroyed-worlds-scientists-say/?noredirect=on&utm_term=.4f1e000cc632"   target="_blank">https://www.washingtonpost.com/news/speaking-of-science/wp/2018/07/03/many-asteroids-might-be-remnants-of-five-destroyed-worlds-scientists-say/?noredirect=on&utm_term=.4f1e000cc632</a>
</p> 
` ,

blogcite2 = 
`
<p class="footnotes">2. <a href="https://books.google.com/books?id=6rfP0H5TSmYC&printsec=frontcover"   target="_blank">Foucault, Michel. Discipline and punish: The birth of the prison. Vintage, 2012.</a>
</p>   
<p class="footnotes">2. <a href="https://www.nytimes.com/2018/07/03/world/europe/poland-supreme-court-protest.html"   target="_blank">https://www.nytimes.com/2018/07/03/world/europe/poland-supreme-court-protest.html</a>
</p>   
<p class="footnotes">3. <a href="https://www.nytimes.com/2018/07/01/technology/cryptocurrency-ripple.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=stream&module=stream_unit&version=latest&contentPlacement=9&pgtype=sectionfront"_blank">https://www.nytimes.com/2018/07/01/technology/cryptocurrency-ripple.html</a>
</p> 

` ];

bloggerJuly = function  (blogPost, blogCite) {
 

  for (i=0;i<2;i++){ 
    blog = blogPost[i];
    cite = blogCite[i]; 
  } 
  return (blog, cite);
};
module.exports = bloggerJuly();
 

 

/***/ }),
/* 2 */
/***/ (function(module, exports) {

 
  var url =  
  [ 

    {
      id:'1', 
    did:'07-02-18',
    date:'July 2, 2018',
      author:'by Thomas Maestas',
      cat3:'Sociology Tomorrow!',
      title:'Always Out to Impress!',  
   }  
, 
    { 
    id:'2',
    did:'07-03-18',
    date:'July 3, 2018',
    author:'by Thomas Maestas',
    cat3:'Musing Blockchain',
    title:'What\'s Behind the Rebirth of the Nation-State?<br />There\'s a <i>Blockchain DAPP</i> for that!', 
   }
   ] ;

   bloggerDetail = function  (url) { 
   for (i=0;i<url.length;i++){  
  id = url[i].i+1;
  did = url[i].did;
  date = url[i].date;
  author = url[i].author;
  cat3 = url[i].cat3;
  title = url[i].title;

}


};
module.exports = bloggerDetail(); 
 

/***/ })
/******/ ]);