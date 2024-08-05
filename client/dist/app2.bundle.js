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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./js/force');  

// require('./js/daily-nav'); 
// require('./js/marsreader');     

// require('./js/blog-draft-2020mar');  
// require('./js/blog-draft-may19');
// require('./js/blog-draft-march19');
// require('./js/blog-draft-jan19');
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
// require('./js/blog-draft-aug');
// require('./js/blog-draft-jul');
// require('./js/blog-draft-june');
// require('./js/blog-draft-may');
// require('./js/blog-draft-apr');
// require('./js/blog-draft-mar');
// require('./js/blog-draft-feb'); 

//  // modal
// var modal = document.getElementById('msimpleModal');  
// var modalBtn = document.getElementById('mmodalBtn'); 
// var closeBtn = document.getElementsByClassName('mcloseBtn')[0];  

// modalBtn.addEventListener('click', openModal); 
// closeBtn.addEventListener('click', closeModal); 
// window.addEventListener('click', outsideClick); 

// function openModal(){
//   modal.style.display = 'block';
//   modalBtn.style.display = 'none';
// } 
// function closeModal(){
//   modal.style.display = 'none';
//   modalBtn.style.display = 'block';
// } 
// function outsideClick(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   modalBtn.style.display = 'block';
//   }
// };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 'use strict';  
// https://techcrunch.com/2019/01/28/huawei-us-meng-wanzhou-doj/
//june 
// http://nautil.us/issue/64/the-unseen/the-fourth-copernican-revolution
// https://www.theatlantic.com/science/archive/2018/09/your-dna-is-not-your-culture/571150/
var bloggerDec = function bloggerDec() {

  var blogpost160 = ' \n  <p class="firstparagraph">Taskrunners, bots, and any other automaton will find a way, if there\'s a faster way!\n  </p>\n  <p class="quote">One could easily take this as a step in the \u201Cthe machines are getting smarter\u201D narrative, but the truth is it\u2019s almost the opposite. The machine, not smart enough to do the actual difficult job of converting these sophisticated image types to each other, found a way to cheat that humans are bad at detecting. This could be avoided with more stringent evaluation of the agent\u2019s results, and no doubt the researchers went on to do that.\n  <br /><br />\n  As always, computers do exactly what they are asked, so you have to be very specific in what you ask them. In this case the computer\u2019s solution was an interesting one that shed light on a possible weakness of this type of neural network \u2014 that the computer, if not explicitly prevented from doing so, will essentially find a way to transmit details to itself in the interest of solving a given problem quickly and easily.\n  This is really just a lesson in the oldest adage in computing: PEBKAC. \u201CProblem exists between keyboard and computer.\u201D Or as HAL put it: \u201CIt can only be attributable to human error.\u201D\n  <br /><br />\n  The intention of the researchers was, as you might guess, to accelerate and improve the process of turning satellite imagery into Google\u2019s famously accurate maps. To that end the team was working with what\u2019s called a CycleGAN \u2014 a neural network that learns to transform images of type X and Y into one another, as efficiently yet accurately as possible, through a great deal of experimentation.\n  <br /><br />\n  In some early results, the agent was doing well \u2014 suspiciously well. What tipped the team off was that, when the agent reconstructed aerial photographs from its street maps, there were lots of details that didn\u2019t seem to be on the latter at all. For instance, skylights on a roof that were eliminated in the process of creating the street map would magically reappear when they asked the agent to do the reverse process\n \n<sup>1</sup>\n  </p>\n  <p>Unfathomably focused A.I. means that an "Off" switch ought to be multi-dimensionally redundant -- planned out for unforeseen environments, option range and resources available as a codebase grows!</p>   \n  ';

  var blogcite160 = '\n  <p class="cite">1 <a target="_blank" href="https://techcrunch.com/2018/12/31/this-clever-ai-hid-data-from-its-creators-to-cheat-at-its-appointed-task">https://techcrunch.com/2018/12/31/this-clever-ai-hid-data-from-its-creators-to-cheat-at-its-appointed-task</a></p>  \n  ';
  var blogpost159 = ' \n  <p class="firstparagraph">Interviewer Bots would certainly probe the depths of any job candidate\'s answers, digital record, etc. In fact, using predictive analytics, it is likely that bots would undoubtedly shed light about an unseen facet of reality: <i>Everyday and every-year patterns of behavior</i>, however unnoticed by oneself or anyone else. Big Data notices ...\n  </p>\n  <p class="quote">However, at places like EY, which plans to hire approximately 15,700 workers in the U.S. in the coming year, some 1,300 bots focused on recruiting efforts are likely going to be part of the candidates\u2019 interview experience.\n</p><p>So, are interview bots humane? How much can we as a society <i>off-load</i> our own perceptions, vibes and even that familiar or professional hunch in decision-making?<br /><br />\n\nEyal Grayevsky, CEO and cofounder of Mya Systems says that in 2019 the divide between intelligent, conversational recruiting bots and basic chatbots that follow simple decision trees will become a chasm. \u201CJob search candidates will gravitate toward conversational bots,\u201D he explains, \u201Cbecause of their ability to respond more knowledgeably and naturally, to anticipate candidate needs, and to learn and adapt to candidate preferences over time.\u201D\n<sup>1</sup>\n  </p>\n  <p>Unfathomably complex A.I. algorithms to decode the job candidate\'s algorith ...that\'s a new one,  but can you trust in a computer\'s over-analytic mind when all you need is a bit of human touch?\n  ';

  var blogcite159 = '\n  <p class="cite">1 <a target="_blank" href="https://www.fastcompany.com/90280594/this-is-how-youll-look-for-a-job-in-2019">https://www.fastcompany.com/90280594/this-is-how-youll-look-for-a-job-in-2019</a></p>  \n  ';

  var blogpost158 = ' \n  <p class="firstparagraph">What are the odds?\n  </p>\n  <p class="quote"> \n  Notwithstanding the example of Prime Minister Justin Trudeau and his brother, Alexandre \u2014 each born Dec. 25, two years apart \u2014 Christmas Day is actually the least common modern birthday across the United States and likely Canada as well.  <sup>1</sup>\n  </p>\n ';

  var blogcite158 = '\n  <p class="cite">1. <a target="_blank" href="https://ottawacitizen.com/news/local-news/christmas-baby-drought-why-dec-25-is-the-least-common-birth-date">https://ottawacitizen.com/news/local-news/christmas-baby-drought-why-dec-25-is-the-least-common-birth-date</a></p>  \n  ';

  var blogpost157 = ' \n  <p class="firstparagraph">When it comes to linear tasks, human productivity surpasses all bounds, yet the exponential tasks, must be reformulated through logging. This transformed-reality used to be confined to the buttons of a calculator, but these days ...we have enough data to exponentially analyze and understand our shared reality:  The numbers underneath our perceptions. Now, about Officer McClane\'s adventures ...</p><p> \n  </p>\n  <p class="quote">\n The final result: Is Die Hard a Christmas movie?\nAfter taking this long journey with me, I\u2019m sure you can appreciate the complexity involved in answering a seemingly simple question. We\u2019ve had to consider what is a movie, who is asking the question (plus who is answering it) and how the perception of movies change over time. The neatest summary I can provide is to say that there are many Christmas elements in the movie. Although the studio did not intend it to be a Christmas movie, some of the film\u2019s key creators did. Either way, it\u2019s certainly fair to say that Die Hard is regarded as a Christmas movie in popular culture. Like it or not, the association between Die Hard and Christmas is fast increasing and in years to come its Christmassyness will be beyond question. Future generations will read in wonder that Die Hard was ever thought not to be a Christmas movie and articles such as the one you\u2019re reading now will be seen as nothing but a massive waste of everyone\u2019s time. Imagine that!\n<sup>1</sup>\n  </p>\n  <p> ... as seen through the holographic prism of Data Analytics. </p> ';

  var blogcite157 = '\n  <p class="cite">1. <a target="_blank" href="https://stephenfollows.com/using-data-to-determine-if-die-hard-is-a-christmas-movie/">https://stephenfollows.com/using-data-to-determine-if-die-hard-is-a-christmas-movie/</a></p>  \n  ';

  var blogpost156 = ' \n  <p class="firstparagraph"><i>Public Access to Quantum Computing ... makes a quaint Christmas-Hannukah-Festivus Present for all  </i>\n  </p>\n  <p class="quote"> The IBM Q Experience has already executed more than seven million quantum programs, and they aren\u2019t just random gobbledygook like mine. Legit researchers, many unaffiliated with IBM, have published more than 120 academic papers using it.\n\n  The app is part of a larger effort to boost literacy in quantum computing. Other companies have also been releasing open-source software packages to reach out to the masses\u2014or more probably, nerds with niche interests. They hope that a diverse pool of users can guide them toward more creative uses for the machines. \n<sup>1</sup>\n  </p>\n  <p> ';

  var blogcite156 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/quantum-computing-needs-you-to-help-solve-its-core-mystery/">https://www.wired.com/story/quantum-computing-needs-you-to-help-solve-its-core-mystery/</a></p>  \n  ';
  var blogpost155 = ' \n  <p class="firstparagraph">To say that the world\'s micro-transaction needs have changed in the past 100 years is ... exaggeration. Maslow\'s <i>Hierarchy of Needs</i> specifies more or less the reality of buying habits. From the bottom of the triangle, they are physiological needs, safety-security, love and belonging, and finally self-actualization. What is clear is that horizontal scaling of our needs often use fragmented sources of "currency"--whether it is financial capital being spent, or social capital (value accrued from trust networks), human capital(value accrued from specialties and specialized networks), intellectual capital, and so on. </p>\n  <p>The effect is clear: multiplying usages and forms of value exchange are certain--this, without accounting for the myriad new options that tech offers. So, if one considers the linear progression from bartering to the coins of Egypt and Athens, history certainly amplifies itself with Venmo, PayPal options are here to stay...  \n  </p>\n  <p class="quote">Facebook Inc. is working on making a cryptocurrency that will let users transfer money on its WhatsApp messaging app, focusing first on the remittances market in India, according to people familiar with the matter.\n  <br /><br />\n\n  The company is developing a stablecoin -- a type of digital currency pegged to the U.S. dollar -- to minimize volatility, said the people, who asked not to be identified discussing internal plans. Facebook is far from releasing the coin, because it\u2019s still working on the strategy, including a plan for custody assets, or regular currencies that would be held to protect the value of the stablecoin, the people said.\n  <br /><br />\n   \n  Facebook, which has 2.5 billion global users, more than $40 billion in annual revenue and greater experience navigating regulatory issues, may have a better chance of making a stablecoin that sticks. It would be the first large technology company to launch such a project. \n<sup>1</sup>\n  </p> ';

  var blogcite155 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-12-21/facebook-is-said-to-develop-stablecoin-for-whatsapp-transfers">https://www.bloomberg.com/news/articles/2018-12-21/facebook-is-said-to-develop-stablecoin-for-whatsapp-transfers</a></p>  \n  ';
  /*
  var blogpost154 =   ` 
  <p class="firstparagraph">
  </p>
  <p class="quote">
  <sup>1</sup>
  </p>
  <p> `; 
    var blogcite154 = `
  <p class="cite">1. <a target="_blank" href=" "> </a></p>  
  `;
  */
  var blogpost153 = ' \n  <p class="firstparagraph">Law and Justice in the tech world reveals <i>a new world without judicial precedent</i> making for new curiosities in Case Law with increasing frequency. Different facets of personal data, whether shopping, movie-watching, chatting, selfie-posting, all new nuances and new social-legal dilemmas fall to the best discretions of Facebook, Google, Amazon and other Tech Greats...  \n  </p>\n  <p class="quote">\n  When you buy something on Amazon, the odds are, you aren\u2019t buying it from Amazon at all. Plansky is one of 6 million sellers on Amazon Marketplace, the company\u2019s third-party platform. They are largely hidden from customers, but behind any item for sale, there could be dozens of sellers, all competing for your click. This year, Marketplace sales were almost double those of Amazon retail itself, according to Marketplace Pulse, making the seller platform alone the largest e-commerce business in the US. \n\n  Amazon is far from the only tech company that, having annexed a vast sphere of human activity, finds itself in the position of having to govern it. But Amazon is the only platform that has a $175 billion prize pool tempting people to game it, and the company must constantly implement new rules and penalties, which in turn, become tools for new abuses, which require yet more rules to police. The evolution of its moderation system has been hyper-charged. While Mark Zuckerberg mused recently that Facebook might need an analog to the Supreme Court to adjudicate disputes and hear appeals, Amazon already has something like a judicial system \u2014 one that is secretive, volatile, and often terrifying. \n<sup>1</sup>\n  </p>\n  <p>So, when commercial and social transactions drift away from  traditional political-judicial-legal jurisdictions, where--rather what--is binding authority? \n  </p> ';

  var blogcite153 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theverge.com/2018/12/19/18140799/amazon-marketplace-scams-seller-court-appeal-reinstatement">https://www.theverge.com/2018/12/19/18140799/amazon-marketplace-scams-seller-court-appeal-reinstatement</a></p>  \n  ';
  var blogpost152 = ' \n  <p class="firstparagraph">\n  </p>\n  <p class="quote">\n  But engineers haven\'t written off the internal combustion engine just yet. The team at Aston Martin has released details on the V12 engine that will breathe life into its upcoming, $3 million Valkyrie hypercar, and the gleaming maze of metal is a beautiful beast.\n  <br /><br />\n\n  <img src="dist/img/astonmartinwired.jpg" width="350" class="zoom" /><br /><br />\n  The 6.5-liter V12 will produce 1,000 horsepower (because excess) and revs to 11,100 rpm. Putting this overall insanity aside, what\'s remarkable about such figures is that Aston\'s engineers hit them without resorting to turbochargers. The automaker says it recognizes that turbos offer a ton of benefits, but wanted \u201Can internal combustion engine that sits at the absolute pinnacle for performance, excitement, and emotion,\u201D which it could only get through natural aspiration. \n<sup>1</sup>\n  </p>  ';

  var blogcite152 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/aston-martin-valkyrie-engine-v12-f1-cosworth/">https://www.wired.com/story/aston-martin-valkyrie-engine-v12-f1-cosworth/</a></p>  \n  ';

  var blogpost151 = ' \n  <p class="firstparagraph">What better reason for international cooperation than a rendez-vous at 200 miles up? After all, it\'s a niche sweetspot for satellite placement offering communication with less-bad latency problems...This kind of spatial coordination \n  </p>\n  <p class="quote">\n  Ships, planes and remote businesses rely for internet connections on signals sent from geostationary orbit, but this method is too pricey for widespread adoption. Beaming the internet via satellites orbiting closer to the planet has been tried before. The idea was popular at the height of the tech boom of the late 1990s. Three companies\u2014Teledesic, Iridium and Globalstar\u2014poured tens of billions of dollars into the low-Earth orbit (LEO) satellite internet. It culminated in the collapse of Teledesic. Although the technology of the time worked, it was very costly and so the services on offer had to be hugely expensive, too. Iridium survived, but as a niche provider of satellite telephony, not a purveyor of cheap and fast internet access.\n  <br /><br />\n\n  OneWeb is among several firms that are trying LEO satellites again. SpaceX, a rocket company founded by Elon Musk, a tech entrepreneur, is guarded about its proposed system, Starlink, but on November 15th American regulators approved an application for 7,518 satellites at an altitude of 340km [200miles] (bringing the total for which the firm has approval to nearly 12,000). Telesat, a Canadian firm, has plans for a 512-satellite constellation. \n<sup>1</sup>\n  </p>\n  <p> ';

  var blogcite151 = '\n  <p class="cite">1. <a target="_blank" href="https://www.economist.com/briefing/2018/12/08/satellites-may-connect-the-entire-world-to-the-internet">https://www.economist.com/briefing/2018/12/08/satellites-may-connect-the-entire-world-to-the-internet</a></p>  \n  ';

  var blogpost150 = ' \n  <p class="firstparagraph">\n  </p>\n  <p class="quote">\n  Amid the wreckage of the burst bitcoin bubble  it is fair to assess the outlook for blockchains, the technology underlying the cryptocurrency. There\u2019s a difference. Blockchains, it is said, stand to revolutionize enterprise technology by addressing the problems with authentication and identity at the heart of the internet itself, eliminating middle layers in transactions and making it faster and easier to establish provenance.\n  <br /><br />\n  \n  The adoption of blockchains in the enterprise has been slow. The question now is the extent to which the overblown investment thesis behind bitcoin and related financial mania can be separated from the utility of blockchain as a tool in enterprise technology.\n<sup>1</sup>\n  </p>\n  <p> ';

  var blogcite150 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wsj.com/articles/bitcoin-wasnt-a-bubble-until-it-was-11544783400?mod=djemCIO_h">https://www.wsj.com/articles/bitcoin-wasnt-a-bubble-until-it-was-11544783400?mod=djemCIO_h</a></p>  \n  ';

  var blogpost149 = ' \n\n  <p class="quote">\n  Formally, an asset bubble is just a rapid rise and abrupt crash in prices. Defenders of the efficient-market theory argue that these price movements are based on changes in investor\u2019s beliefs about an asset\u2019s true value. But it\u2019s hard to identify a reason why any rational investor would have so abruptly revised her assessment of the long-term earnings power of companies in 1929, or the long-term viability of dot-com startups in 2000, or the long-term value of housing in 2007.\n<br /><br />\n  Similarly, there was no obvious reason why it made sense for the world to believe that Bitcoin was the currency of the future late December 2017, but to think this was less than one fifth as likely today. Bitcoin wasn\u2019t eclipsed by a competitor \u2014 the main alternative cryptocurrencies had even bigger price declines. Nor have regulators cracked down on Bitcoin \u2014 in fact, the regulatory structure has generally been quite accommodating to the technology. Nor have critical technological flaws emerged \u2014 yes, the Bitcoin network has become congested, but this problem was anticipated well before the crash. \n  \n<br /><br />\n  Instead, it seems overwhelmingly likely that Bitcoin\u2019s spectacular rise and fall was due not to rational optimism followed by sensible pessimism, but to some kind of aggregate market irrationality \u2014 a combination of herd behavior, cynical speculation and the entry into the market of a large number of new, poorly informed investors.\n<sup>1</sup>\n  </p>\n  ';

  var blogcite149 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/opinion/articles/2018-12-11/yep-bitcoin-was-a-bubble-and-it-popped">https://www.bloomberg.com/opinion/articles/2018-12-11/yep-bitcoin-was-a-bubble-and-it-popped</a></p>  \n  ';
  var blogpost148 = ' \n  <p class="firstparagraph">Crypto-Currency theorists provide endless explanations over the disproportionately-sized fall of Bitcoin from December 2017 yet offer an incomplete picture. The more fascinating questions surround Bitcoin\'s 2017 growth rather than the interruption that either cascaded to new factors or simply magnified existing factors--such as security doubts and the dearth micro-economic public use.\n  </p>\n  <p class="quote"> His explanation for the divergence include last year\u2019s meteoric rally, a \u201Cmeltdown\u201D in the macroeconomic climate and treasury sales during initial coin offerings. \n  \u201CFair value is significantly higher than the current price of Bitcoin,\u201D he wrote. \u201CIn fact, working backwards, to solve for the current price of Bitcoin, this implies crypto wallets should fall to 17 million from 50 million currently.\u201D\n<sup>1</sup>\n  </p> ';

  var blogcite148 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-12-13/unabashed-bitcoin-bull-thomas-lee-says-the-market-is-wrong?srnd=cryptocurrencies">https://www.bloomberg.com/news/articles/2018-12-13/unabashed-bitcoin-bull-thomas-lee-says-the-market-is-wrong?srnd=cryptocurrencies</a></p>  \n  ';
  var blogpost145 = ' \n  <p class="firstparagraph">Leaving the age of personal pc computing power, the growing trends are to borrow someone else\'s computing power in the cloud. Platform-as-a-Service, Infrastructure-as-a-Service, and other shared computing and storage services are merely aligning with the growing convention to spurn buying--say a car--in favor of renting for when and what needs specifically arise--like Uber, Turo and other peer-to-peer trends.  It only makes sense that Cloud services would incorporate more hardware customization and flexibility.   \n  </p>\n  <p class="quote">Amazon, the world\u2019s largest online retailer and largest cloud-computing company, is pushing into a new line of work: computer chips.\n\n  Late last month, the company, based in Seattle, revealed that it had spent the last few years building a new chip for use inside the millions of servers in its data centers around the world.\n  \n  Amazon does not plan to sell this chip directly to customers, but the decision by one of the world\u2019s biggest buyers of computer processors to go the do-it-yourself route is likely to have a major impact on Intel, the iconic Silicon Valley chip maker.\n<sup>1</sup>\n</p><p>Time-traveling to the dawn of the PC era, it must have felt the world ending with the monopolistic overtones of IBM and Microsoft. Yet, time--and technology--passes all things. Now, it is the age of Google Cloud and Amazon Web Services--including the chip!\n  </p>';

  var blogcite145 = '\n  <p class="cite">1. <a target="_blank" href="https://www.nytimes.com/2018/12/10/technology/amazon-server-chip-intel.html">  https://www.nytimes.com/2018/12/10/technology/amazon-server-chip-intel.html</a></p>  \n  ';

  var blogpost144 = '\n \n  <p class="firstparagraph">Materials science, artificial intelligence   and IoT technology has a new assignment: Save the Glaciers!  \n  </p>\n  <p class="quote">By the end of the mission in 2009, Anandakrishnan and his colleagues had collected data from about 150 boreholes. The new information didn\u2019t precisely explain what was hastening Thwaites\u2019 acceleration, but it was a start. Meanwhile, the satellite maps kept getting redder and redder. In 2014, Eric Rignot, a glaciologist at NASA, concluded that Thwaites was entering a state of \u201Cunstoppable\u201D collapse. Even worse, scientists were starting to think that its demise could trigger a larger catastrophe in West Antarctica, the way a rotting support beam might lead to the toppling not only of a wall but of an entire house. Already, Thwaites\u2019 losses were responsible for about 4 percent of global sea-level rise every year. When the entire glacier went, the seas would likely rise by a few feet; when the glaciers around it did, too, the seas might rise by more than a dozen feet. \n<sup>1</sup>\n  </p>';

  var blogcite144 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/antarctica-thwaites-glacier-breaking-point/">https://www.wired.com/story/antarctica-thwaites-glacier-breaking-point/</a></p>  \n  ';
  var blogpost143 = '\n \n  <p class="firstparagraph">\n  Workplace satisfaction sits squarely on finding purpose, usually to the aim of helping others. 20th century jobs plainly reflected this value in plain sight, however new jobs do the same and more, but less evidently. Code writing is worthy for its contributions to humanity--as much as bridge-building, nursing,  social work and any  industry.  Yet, software engineering is seen through the filter of coding, math,   logic and automation, instead of the true portraiture of the careful reflection, humanity and patience of coding authorship. Sadly, there is no PR to tout the new paradigm and lofty meaning tied into programming work! </p> \n\n  <p class="quote">Lack of career growth or trajectory was the biggest reason, with 28.1% of respondents saying it caused them to quit. Many of the women also believe that men have an advantage in the field; just 53% said women have the same opportunities to enter senior leadership roles as their male counterparts.<br />\n\n  \u201CLack of career growth is a problem that women face across industries,\u201D says Kim Williams, Indeed\u2019s senior director of design platform, technology, and operations. \n<sup>1</sup>\n  </p>';

  var blogcite143 = '\n  <p class="cite">1. <a target="_blank" href="https://www.fastcompany.com/90274067/this-is-why-women-leave-jobs-in-tech">https://www.fastcompany.com/90274067/this-is-why-women-leave-jobs-in-tech</a></p>  \n  ';

  var blogpost142 = '\n \n  <p class="firstparagraph">  \n  </p>\n  <p class="quote"> The bright blue light of flat, rectangular touch screens, fans, and displays may be appealing from an aesthetic perspective (more on that below), but from a health standpoint, it is fraught with problems. Blue light inhibits the production of melatonin, the hormone that regulates our sleep cycles. Blue light before bedtime can wreak havoc on our ability to fall asleep. \n  <br /><br />Harvard researchers and their colleagues conducted an experiment comparing the effects of 6.5 hours of exposure to blue light, versus exposure to green light of comparable brightness. They found that blue light suppressed melatonin for about twice as long as the green light and shifted circadian rhythms by twice as much (3 hours compared with 1.5 hours). And worse, it\u2019s been linked in recent studies to an increased risk of obesity and some cancers.\n<sup>1</sup>\n  </p>';

  var blogcite142 = '\n <p class="cite">1. <a target="_blank" href="https://www.fastcompany.com/90177573/how-blue-became-techs-favorite-color-and-why-it-shouldnt-be">https://www.fastcompany.com/90177573/how-blue-became-techs-favorite-color-and-why-it-shouldnt-be</a></p>  \n  ';

  var blogpost141 = '\n \n  <p class="firstparagraph">\n  Computers don\'t know lines of text to understand the words. Just the conditions and behavior of a certain combination of letters - and the computer does not <i>know</i>0, 1, and 2.  ..It knows the difference between 0 and 1 with respect to 2 ... <br /><br />\n   The subject of trust is not the Tech Sector\'s best light -- as it can be fairly said to flaunt irresponsibility--<i>to move fast and break things</i>. This has been benign so far except for a few credit card and Scarlett Johannsen\'s leaked selfies ... nothing Earth-shattering.  A.I. on the other hand, can\'t be leashed in an Open Source era, so here we are - \'the best offense is a good defense\' theory. </p><p>\n   Moral, social, and most of all technical forms of deterrance and plethora. As Elon Musk once said, "We don\'t want autonomous weapons. The moment that one is walking down the street, <i> it\'s too late</i>.   \n  </p>\n  <p class="quote"> The prime mover behind the film is Stuart Russell, a professor of computer science at the University of California, Berkeley. Here, Russell checks in with the Bulletin to explain how the film was made, how little stands between us and the drone apocalypse, and what the prospects are for banning autonomous weapons before they get truly out of hand.\n<sup>1</sup>\n  </p>\n  <p>This, not to mention the principle that whoever winds up harnessing A.I. will control the globe--whether socially, nationally, and finance. The solution to resolve this? With all of society involved in the sway of tech decision-making, then a society of people rules the globe, not the technology of one group ...the way it should be ...</p>\n  <p>Programmers need to take care of not only the problem-at-hand but the larger outcome. For example, the stock \'Flash-Crash of 2010\' produced a sudden drop--initiated unintentionally by a computer program... Let\'s start complementing faster engines with better brakes! ';

  var blogcite141 = '\n  <p class="cite">1. <a target="_blank" href="https://thebulletin.org/2017/12/as-much-death-as-you-want-uc-berkeleys-stuart-russell-on-slaughterbots/">https://thebulletin.org/2017/12/as-much-death-as-you-want-uc-berkeleys-stuart-russell-on-slaughterbots/</a></p>  \n  ';
  var blogpost140 = '\n \n  <p class="firstparagraph">   The <i>exponential growth<i> of data, as petabytes of streaming, disposable IoT sensor data knows no bounds. AWS has really stepped up to the great job of tackling this challenge:\n  </p>\n  <p class="quote">Satellite operators need to get data down from the satellite, process it and then make it available for developers to use in applications. In that regard, it\u2019s not that much different from any IoT device. It just so happens that these are flying around in space.<br />\n \n<sup>1</sup>\n  </p>';

  var blogcite140 = '\n  <p class="cite">1. <a target="_blank" href="https://techcrunch.com/2018/11/27/aws-launches-a-base-station-for-satellites-as-a-service/">https://techcrunch.com/2018/11/27/aws-launches-a-base-station-for-satellites-as-a-service/</a></p>  \n  ';
  var blogpost139 = '\n \n  <p class="firstparagraph">Competition versus cooperation with China presents an unanswerable question while nationalism brushes aside a common humanity--as far as technological advancement is concerned. Perhaps the best hope for a common thread of peace lies in the age-old, border-breaking legacy of 1990s\' pre-tech wave multinationalist corporations--an impossible dream in the age of retributive tariff and trade threats ...\n  </p>\n  <p class="quote">Yet the trade conflict that matters most between America and China is a 21st-century fight over technology. It covers everything from artificial intelligence (ai) to network equipment. The fundamental battleground is in semiconductors. The chip industry is where America\u2019s industrial leadership and China\u2019s superpower ambitions clash most directly. And whatever Messrs Trump and Xi say at the g20, this conflict will outlast them both.\n  \n<sup>1</sup>\n  </p>';

  var blogcite139 = '\n  <p class="cite">1. <a target="_blank" href="https://www.economist.com/leaders/2018/12/01/chip-wars-china-america-and-silicon-supremacy">https://www.economist.com/leaders/2018/12/01/chip-wars-china-america-and-silicon-supremacy</a></p>  \n  ';

  var blogpost138 = ' \n  <p class="firstparagraph">At the end of the day, why not include tactile messaging? I enjoyed my Samsung Note V, but the material touch is the hardest to replicate.\n  </p>\n  <p class="quote"> Invented four decades ago by 3M in what has become a famous example of mistakes leading to success, sticky notes have become a classic because of some unique properties. They can convey a message\u2014that is, content\u2014but their placement provides context. They can be put in the line of sight of someone to grab attention or be affixed to a document or other object to provide instruction or commentary. Their ability to be attached again and again has made them popular for arranging ideas on surfaces such as whiteboards for analog mind-mapping. <sup>1</sup>\n  </p>\n  <p>Senseless criticism aside, Google\'s Materialize software is the true winner for replicating paper, at least visually ...';

  var blogcite138 = '\n  <p class="cite">1. <a target="_blank" href="https://www.fastcompany.com/90268250/even-in-our-digital-world-the-humble-sticky-note-abides">https://www.fastcompany.com/90268250/even-in-our-digital-world-the-humble-sticky-note-abides</a></p>  \n  ';

  var url = [{
    id: '160',
    did: '12-31-18',
    date: 'December 31, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Sneaky Bots',
    post: blogpost160,
    blogcite: blogcite160
  }, {
    id: '159',
    did: '12-26-18',
    date: 'December 26, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Rise of the Interviewer Bots',
    post: blogpost159,
    blogcite: blogcite159
  }, {
    id: '158',
    did: '12-25-18',
    date: 'December 25, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Christmas Stats',
    post: blogpost158,
    blogcite: blogcite158
  }, {
    id: '157',
    did: '12-24-18',
    date: 'December 24, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Big Data\'s New Reinterpretation of Reality',
    post: blogpost157,
    blogcite: blogcite157
  }, {
    id: '156',
    did: '12-22-18',
    date: 'December 22-23, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Quantum Computing Presents',
    post: blogpost156,
    blogcite: blogcite156
  }, {
    id: '155',
    did: '12-21-18',
    date: 'December 21, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'A Virtual Balkanization of International Currency',
    post: blogpost155,
    blogcite: blogcite155
  },
  /*
        {
          id: '154',
          did: '12-20-18',
          date: 'December 20, 2018 ',
          author: 'by Thomas Maestas',
          cat3: 'Musing Blockchain',
          title: ' ',
          post: blogpost154,
          blogcite: blogcite154
        },  
        */
  {
    id: '153',
    did: '12-19-18',
    date: 'December 19, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'A New <i>Stare Decisis</i>',
    post: blogpost153,
    blogcite: blogcite153
  }, {
    id: '152',
    did: '12-18-18',
    date: 'December 18, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Aston Martin at 1,000 Horsepower',
    post: blogpost152,
    blogcite: blogcite152
  }, {
    id: '151',
    did: '12-17-18',
    date: 'December 17, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Of Space and Satellites',
    post: blogpost151,
    blogcite: blogcite151
  }, {
    id: '150',
    did: '12-15-18',
    date: 'December 15-16, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'A Currency Introspective',
    post: blogpost150,
    blogcite: blogcite150
  }, {
    id: '149',
    did: '12-14-18',
    date: 'December 14, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'A Currency in Retrospective',
    post: blogpost149,
    blogcite: blogcite149
  }, {
    id: '148',
    did: '12-13-18',
    date: 'December 13, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'A Currency Starting Afresh',
    post: blogpost148,
    blogcite: blogcite148
  }, {
    id: '145',
    did: '12-10-18',
    date: 'December 10, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Quantum Chips, GPU &amp; Parallel Chips  and Cloud Chips, Ahoy!',
    post: blogpost145,
    blogcite: blogcite145
  }, {
    id: '144',
    did: '12-08-18',
    date: 'December 8-9, 2018 <br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Tech Industry\'s True Value, Part II:<br />Saving Earth',
    post: blogpost144,
    blogcite: blogcite144
  }, {
    id: '143',
    did: '12-07-18',
    date: 'December 7, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Tech Industry\'s True Value, Part I:<br />Saving Humanity',
    post: blogpost143,
    blogcite: blogcite143
  }, {
    id: '142',
    did: '12-06-18',
    date: 'December 6, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Screen Time Blues',
    post: blogpost142,
    blogcite: blogcite142
  }, {
    id: '141',
    did: '12-05-18',
    date: 'December 5, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'The Reason for More Social Awareness on A.I. Policy',
    post: blogpost141,
    blogcite: blogcite141
  }, {
    id: '140',
    did: '12-04-18',
    date: 'December 4, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'Spin Me Up a Satellite for the Year',
    post: blogpost140,
    blogcite: blogcite140
  }, {
    id: '139',
    did: '12-03-18',
    date: 'December 3, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'The China Question',
    post: blogpost139,
    blogcite: blogcite139
  }, {
    id: '138',
    did: '12-01-18',
    date: 'December 1-2, 2018 <br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'Textbook Technology',
    post: blogpost138,
    blogcite: blogcite138
  }];
  var i;
  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a target="_blank" href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="author">' + url[i].author + '</p>   \n    <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-dec").innerHTML += cat;
  }

  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a target="_blank" href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="author">' + url[i].author + '</p>   \n  <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-dec-mod").innerHTML += catMod;
  }

  console.log('blogger-dec');
  // console.log(angular.toJson(url));
};
bloggerDec();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 'use strict';

var bloggerNov = function bloggerNov() {

  var blogpost137 = '\n \n  <p class="firstparagraph">Quantum Nay-Sayers\' opinions appear more rooted in <i>a binary form of thinking, while quantum computing itself represents non-binary reasoning! </i>That Quantum allows for a third state, rather than Classical 2 states. This means with two transistors can in one instance yield 2 possibilities, while two Quantum \'qubits\' yield exactly four possibilities in an instance: the two qubits can be on, off, <i>and both</i>. Likewise 4 transistors yield four possible states in one instance, 4 qubit transistors <i>yield 16 possible states</i> since all four can carry both states in one instance.</p>\n  <p>So, merely discussing the paradigm-breaking 3 states already implicates one\'s life into quantum computing\'s sphere of reality!\n  </p>\n  <p class="quote"> When will useful quantum computers be constructed? The most optimistic experts estimate it will take 5 to 10 years. More cautious ones predict 20 to 30 years. (Similar predictions have been voiced, by the way, for the last 20 years.) I belong to a tiny minority that answers, \u201CNot in the foreseeable future.\u201D Having spent decades conducting research in quantum and condensed-matter physics, I\u2019ve developed my very pessimistic view. It\u2019s based on an understanding of the gargantuan technical challenges that would have to be overcome to ever make quantum computing work.\n<sup>1</sup>\n  </p>';

  var blogcite137 = '\n  <p class="cite">1. <a target="_blank" href="https://spectrum.ieee.org/computing/hardware/the-case-against-quantum-computing">https://spectrum.ieee.org/computing/hardware/the-case-against-quantum-computing</a></p>  \n  ';
  var blogpost136 = '\n \n  <p class="firstparagraph">Co-bots. Algorithm and Human input toward final calculations of real, experienced conditions can be a real puzzle. Whether Doctors with access to patients\' A.I.-analyzed patient metrics or Drivers sharing responsibilities with \'semi-automated\', self-driving vehicles, the challenge. \n  </p>\n  <p class="quote">Drawing on four years of ethnographic research among Uber drivers, Rosenblat has produced a thoroughly dystopian report that details how millions of drivers are now managed by a computerized system that combines the hard authoritarianism of Frederick Winslow Taylor with the cynical cheerleading of Michael Scott.\n<sup>1</sup>\n  </p>\n  <p>The cultural management of leader-less automation makes for a less useful tool for humans: The more autonomous the tool  does not necessarily translate to optimal relations:   For example, in-group thinking where ideas are recycled and magnified due to technological effect rather than conscious will. So, the healthier more useful technology can often be the most interactive and highly configurable tools, whether phone devices or application software. So, in sum, the Co-Bot is a go-bot -- a better bot.';

  var blogcite136 = '\n  <p class="cite">1. <a target="_blank" href="http://nymag.com/intelligencer/2018/11/alex-rosenblats-uberland-review.html">http://nymag.com/intelligencer/2018/11/alex-rosenblats-uberland-review.html</a></p>  \n  ';
  var blogpost135 = ' \n  <p class="firstparagraph">A.I.\'s segmented, expansive landscape ranges from free-wheeling start-ups to DIY hobbyists to University researchers. This diversity of A.I. designs, coupled with free access to open-source tools provides for an entirely unpredictable path.  \n  </p>\n  <p class="quote">This is an unsettled field. It\'s not like physics."<br />\n\n  AI may seem to be a smooth-running assembly line of startups, products and research projects. The reality, however, is a landscape clouded by uncertainty.\n  [Author] Ford\'s [A.I.-expert] interviewees could not agree on where their field stands, how to push it forward or when it will reach its ultimate goal: a machine with humanlike intelligence.\n  <br /><br />\n  Why it matters: The embryonic state in which Ford found AI \u2014 so early in its development more than a half-century after its birth that the basics are still up for grabs \u2014 suggests how far it has to go before reaching maturity. On his blog, Brooks has said that AI is only 1% of the way toward human intelligence.\n<sup>1</sup>\n  </p>';

  var blogcite135 = '\n  <p class="cite">1. <a target="_blank" href="https://www.axios.com/artificial-intelligence-disagreements-machine-learning-d26ef884-b415-43c6-aff2-d17a05483389.html">https://www.axios.com/artificial-intelligence-disagreements-machine-learning-d26ef884-b415-43c6-aff2-d17a05483389.html</a></p> \n \n  ';
  var blogpost134 = ' \n  <p class="firstparagraph">Compared with so many other options, including smart Currency that doubles as a programmable legal contract like Ethereum or energy-friendly \'Proof-of-Stake\' algorithm Currencies, one has to wonder why Bitcoin has managed to hang around as long as it has ... even if name-recognition and simplicity of the ten-year old technology are its two best attributes. \n  </p>\n  <p>So, with Bitcoin\'s stumbling, perhaps other options and new technologies can be considered: \n  </p>\n  <p class="quote">\u201CThe Proof of Stake algorithm is a generalization of the Proof of Work algorithm. In PoS, the nodes are known as the \u2018validators\u2019 and, rather than mining the blockchain, they validate the transactions to earn a transaction fee. There is no mining to be done, as all coins exist from day one. Simply put, nodes are randomly selected to validate blocks, and the probability of this random selection depends on the amount of stake held. <br />\n  <br />\n  So, if node X owns 2 coins and node Y owns 1 coin, node X is twice as likely to be called upon to validate a block of transactions. The specific implementation of PoS can vary, depending on the use case, or as a matter of software design. Instances include Proof of Deposit and Proof of Burn. The PoS algorithm saves expensive computational resources that are spent in mining under a PoW consensus regime.\u201D\n  </p>\n  <p>Beyond the practicality of programmable currency, security attributes are the unsung hero of Proof of Stake currencies:\n  </p>\n  <p class="quote">\n  Proof of stake (aka POS) cryptos has many technical benefits but apart from that some proof of stake cryptos also give different economic benefits/dividends to its HODLers by giving them the option of running a masternode or staking their coins in a stake-able wallet.\n<br /><br />This provides dual benefits of securing the blockchain network as well as creating an opportunity for users to get incentives or dividends on their holdings.\n<sup>1</sup>\n  </p>';

  var blogcite134 = '\n  <p class="cite">1. <a target="_blank" href="https://medium.com/coinmonks/blockchain-consensus-algorithm-the-proof-of-stake-slice-a4bda6658bbe">https://medium.com/coinmonks/blockchain-consensus-algorithm-the-proof-of-stake-slice-a4bda6658bbe</a></p> \n  <p class="cite">2<a target="_blank" href="https://coinsutra.com/proof-of-stake-cryptocurrencies/">https://coinsutra.com/proof-of-stake-cryptocurrencies/</a><br /><br />https://bitcoin.org/bitcoin.pdf</p> \n  ';
  var blogpost133 = '\n  <p class="firstparagraph">Proof-of-Work Blockchain Algorithms that underly <i>some</i> cryptocurrencies--Bitcoin for example--have certainly hard on Earth\'s climate dilemma. Therefore, it\'s with a silver-lining that the currency is bottoming ...  \n  </p>\n  <p class="quote">\n  Bitcoin is in crisis. \n  You can never really declare it dead \u2014 the idea of an electronic currency that is theoretically borderless and lawless will always live on somewhere \u2014 but its price has slumped 80 percent in less than a year, wiping about $700 billion off cryptocurrency markets.\n<br /><br />\nWhere does it go from here? True believers are betting on a simple repeat of past asset bubbles, like dot-com stocks or real estate: a system-wide cleansing of bad actors before the roller-coaster ride begins anew. On that argument there\u2019s a price for everything, even niche assets with no intrinsic value. Maybe Bitcoin should be above $3,700.\n\n<br /><br />\nBut the virtual currency\u2019s behavior since the start of the year doesn\u2019t just look like a bubble bursting; it looks more like a currency under attack. Most of the price collapse happened between December and February, falling from almost $19,000 to about $7,000. Until this month, the $6,000-to-$7,000 range seemed unbreakable. There was a floor in the price \u2014 until it caved.\n<sup>1</sup>\n  </p>';

  var blogcite133 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/opinion/articles/2018-11-27/bitcoin-crash-is-a-real-currency-crisis">https://www.bloomberg.com/opinion/articles/2018-11-27/bitcoin-crash-is-a-real-currency-crisis</a></p> \n  ';

  var blogpost132 = '\n  <p class="firstparagraph">CRISPR tech and the first generation of CRISPR babies heralds a new era ...\n  </p>\n  <p class="quote">According to Chinese medical documents posted online this month, a team at the Southern University of Science and Technology, in Shenzhen, has been recruiting couples in an effort to create the first gene-edited babies. They planned to eliminate a gene called CCR5 in hopes of rendering the offspring resistant to HIV, smallpox, and cholera.\n<br /><br />\nHe Jiankui leads a team using the gene-editing technology CRISPR in an effort to prevent disease in newborns [at] \nSOUTHERN UNIVERSITY OF SCIENCE AND TECHNOLOGY\nThe clinical trial documents describe a study in which CRISPR is employed to modify human embryos before they are transferred into women\u2019s uteruses.<sup>1</sup>\n  </p>';

  var blogcite132 = '\n  <p class="cite">1. <a target="_blank" href="https://www.technologyreview.com/s/612458/exclusive-chinese-scientists-are-creating-crispr-babies/">https://www.technologyreview.com/s/612458/exclusive-chinese-scientists-are-creating-crispr-babies/</a></p> \n  ';
  var blogpost131 = '\n  <p class="firstparagraph">Latency at near-zero terms makes 5G the missing and final ingredient for the imminent IoT revolution--so why not protect the hardware foundation?\n  </p>\n  <p class="quote">Huawei has fallen out of favor with the US government after a congressional report from 2012 called it a national security threat out of concerns that the Chinese government could compel the company to give it access to sensitive data. Just before this year\'s midterm elections, the country even banned government personnel from using Huawei and ZTE devices.\n  <br /><br /> \n  The Wall Street Journal says US officials briefed representatives from Germany, Japan and Italy in an effort to dissuade both government and commercially operated networks from using Huawei (and ZTE) components. In addition to discussing the possibility of Beijing forcing the company to comply with requests for data access, the authorities reportedly stressed 5G\'s susceptibility to cyberattacks and espionage, as well.<sup>1</sup>\n  </p>';

  var blogcite131 = '\n  <p class="cite">1. <a target="_blank" href="https://www.engadget.com/2018/11/24/us-huawei-warning-5g/">https://www.engadget.com/2018/11/24/us-huawei-warning-5g/</a></p> \n  ';
  /*
  
  https://coinsutra.com/proof-of-stake-cryptocurrencies/
  
    var blogpost130 =   `
    <p class="firstparagraph">
    </p>
    <p class="quote">Proof of stake (aka POS) cryptos has many technical benefits but apart from that some proof of stake cryptos also give different economic benefits/dividends to its HODLers by giving them the option of running a masternode or staking their coins in a stake-able wallet.
  <br /><br />This provides dual benefits of securing the blockchain network as well as creating an opportunity for users to get incentives or dividends on their holdings.
  <sup>1</sup>
    </p>`;
    
    var blogcite130 = `
    <p class="cite">1. <a target="_blank" href="https://coinsutra.com/proof-of-stake-cryptocurrencies/">https://coinsutra.com/proof-of-stake-cryptocurrencies/</a></p> 
    `; 
   
   */
  var blogpost129 = '\n<p class="firstparagraph">\n</p>\n<p class="quote">In an essay in the journal JAMA last month, Tamara Tchkonia and Dr. James L. Kirkland of the Mayo Clinic categorized these processes into four broad groups: chronic inflammation; cell dysfunction; changes in stem cells that make them fail to regenerate tissue; and cellular senescence, the accumulation in tissue of aging cells that accompanies disease. Old cells, researchers have found, secrete proteins, lipids and other substances that increase inflammation and tissue destruction. <sup>1</sup>\n</p>';

  var blogcite129 = '\n<p class="cite">1. <a target="_blank" href="https://www.nytimes.com/2018/11/19/health/human-life-span.html">https://www.nytimes.com/2018/11/19/health/human-life-span.html</a></p> \n\n<p class="cite">1. <a target="_blank" href="https://jamanetwork.com/journals/jama/article-abstract/2703113">https://www.thelancet.com/action/showPdf?pii=S0140-6736%2818%2931694-5</a>\n</p> \n';
  var blogpost128 = '\n  <p class="firstparagraph">E.U.\'s far-reaching data privacy law--now six months later--reveals how unmanageable and far-flung personal data has propogated. But even personal data has a shelf-life for relevence and value. \n  </p>\n  <p class="quote">The General Data Protection Regulation is a sweeping personal data privacy law that came into force in late May in the EU. For the rest of the world, it\'s viewed as a bellwether for whether Big Tech can be held in check when immense data leaks seem to happen with painful regularity.\n  <br /><br />\n  Major data brokers Acxiom and Oracle are among seven companies accused of violating GDPR laws on personal information privacy. Advocates hope the complaints will shed light on the opaque ways that personal data is traded through third parties online both in the EU and the US.\n  <sup>1</sup>\n  </p>';

  var blogcite128 = '\n  <p class="cite">1. <a target="_blank" href="https://www.engadget.com/2018/11/08/gdpr-data-brokers-complaints/">https://www.engadget.com/2018/11/08/gdpr-data-brokers-complaints/</a></p> \n  ';

  var blogpost127 = '\n  <p class="firstparagraph">Trade Wars make for expensive phones and tech luxuries ... Make Love Not War!\n  </p>\n  <p class="quote">It\u2019s important to note that all of these reduced-demand forecasts don\u2019t necessarily mean that nobody is buying the iPhone. Suppliers famously cut their production forecasts shortly before the release of the iPhone 6 \u2014 the best-selling iPhone in history \u2014 which saw Apple\u2019s supply chain quickly scrambling to meet demand.  <sup>1</sup>\n  </p>';

  var blogcite127 = '\n  <p class="cite">1. <a target="_blank" href="http://nymag.com/intelligencer/2018/11/poor-iphone-supplier-forecasts-make-everyone-very-nervous.html">http://nymag.com/intelligencer/2018/11/poor-iphone-supplier-forecasts-make-everyone-very-nervous.html</a></p> \n  ';
  var blogpost126 = '\n  <p class="firstparagraph">\n  </p>\n  <p class="quote">Mark Zuckerberg gathered roughly 50 of his top lieutenants earlier this year and told them that Facebook Inc. was at war and he planned to lead the company accordingly.<br />\n<br />\n  During times of peace, executives can move more slowly and ensure that everybody is on board with key decisions, he said during the June meeting, according to people familiar with the remarks. But with Facebook under siege from lawmakers, investors and angry users, he needed to act more decisively, the people said.<sup>1</sup>\n  </p>';

  var blogcite126 = '\n  <p class="cite">1. <a target="_blank" href="http://nymag.com/intelligencer/2018/11/mark-zuckerberg-declared-facebook-at-war.html">http://nymag.com/intelligencer/2018/11/mark-zuckerberg-declared-facebook-at-war.html</a></p> \n  ';
  var blogpost125 = '\n  <p class="firstparagraph">\n  </p>\n  <p class="quote"><i> At home in Northern California, San Francisco voters overwhelmingly passed a tax designed to extract money from tech companies to help ease homelessness in the city. Across the Bay, Oakland voters passed a progressive property-transfer tax, which was another way of taxing the enormous wealth that\u2019s poured into the Bay Area.\n  <br /><br /> \n  Locally and nationally, the tech industry has gone from bright young star to death star. Not only have Silicon Valley companies turned out to be roughly as dirty in their corporate maneuvering as any old oil company or military contractor, but because of the Valley\u2019s founder worship, they\u2019ve been almost uniquely controlled by a tiny number of people.\n  <br /><br /> \n  Read: Were we destined to live in Facebook\u2019s world?\n  \n  And as in most things, Facebook distills, or at least embodies, these industry-wide practices. After a brutal two years that started with the 2016 election, Mark Zuckerberg responded by placing loyalists in charge of all Facebook Inc. properties. The company\u2019s lobbyists pushed a line that its opponents were linked to George Soros, while reporting other enemies to the Anti-Defamation League.<sup>1</sup>\n</i>\n  </p>';

  var blogcite125 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theatlantic.com/technology/archive/2018/11/facebook-google-amazon-and-collapse-tech-mythology/575989/">https://www.theatlantic.com/technology/archive/2018/11/facebook-google-amazon-and-collapse-tech-mythology/575989/</a></p> \n  ';
  var blogpost124 = '\n  <p class="firstparagraph">\n  </p>\n  <p class="quote">While most efforts to secure digital infrastructure were fixated on blocking bad guys from getting in, few focused on the reverse: stopping them from leaking information out. Based on that idea, the group founded a new cybersecurity company called Darktrace.\n  <br /><br />\n  he firm partnered with mathematicians at the University of Cambridge to develop a tool that would use machine learning to catch internal breaches. Rather than train the algorithms on historical examples of attacks, however, they needed a way for the system to recognize new instances of anomalous behavior. They turned to unsupervised learning, a technique based on a rare type of machine-learning algorithm that doesn\u2019t require humans to specify what to look for.<sup>1</sup>\n  </p>';

  var blogcite124 = '\n  <p class="cite">1. <a target="_blank" href="https://www.technologyreview.com/s/612427/the-rare-form-of-machine-learning-that-can-spot-hackers-who-have-already-broken-in/">https://www.technologyreview.com/s/612427/the-rare-form-of-machine-learning-that-can-spot-hackers-who-have-already-broken-in/</a></p> \n  ';
  var blogpost123 = '\n  <p class="firstparagraph">\n  </p>\n  <p class="quote">  Although it may sound like a term to describe a poorly performing IT staff, zero-knowledge computing could represent an evolution in corporate data protection. The approach enables data to be processed while it remains encrypted, so that analytics can be run without exposing the information. JP Morgan Chase & Co. recently led a $10 million Series A funding round in data security and analytics startup Inpher Inc., which works in the area. In a conversation with CIO Journal\'s Sara Castellanos, Samik Chandarana, head of data analytics for the corporate and investment bank division, makes the case for the technology.\n  <br /><br />\n  Keeping client data safe. JPMorgan could use the \u2018secret computing\u2019 technology to analyze a customer\u2019s proprietary data on their behalf, using artificial intelligence without sacrificing privacy, Mr. Chandarana said. \u201CThis gives us a technological solution to be able to act on a client\u2019s private data \u2026 without them having to worry about the security constraints or giving up all their information to us,\u201D he said.<sup>1</sup>\n  </p>';

  var blogcite123 = '\n  <p class="cite">1. <a target="_blank" href="https://blogs.wsj.com/cio/2018/11/13/jpmorgan-invests-in-startup-tech-that-analyzes-encrypted-data/?mod=djemCIO_h">https://blogs.wsj.com/cio/2018/11/13/jpmorgan-invests-in-startup-tech-that-analyzes-encrypted-data/?mod=djemCIO_h</a></p> \n  ';

  var blogpost122 = '\n<p class="firstparagraph">Eco-friendly urban commuting options are a gift, and should always be hailed.  \n</p>\n<p class="quote">  Although it may sound like a term to describe a poorly performing IT staff, zero-knowledge computing could represent an evolution in corporate data protection. The approach enables data to be processed while it remains encrypted, so that analytics can be run without exposing the information. JP Morgan Chase & Co. recently led a $10 million Series A funding round in data security and analytics startup Inpher Inc., which works in the area. In a conversation with CIO Journal\'s Sara Castellanos, Samik Chandarana, head of data analytics for the corporate and investment bank division, makes the case for the technology.\n<br /><br />\nKeeping client data safe. JPMorgan could use the \u2018secret computing\u2019 technology to analyze a customer\u2019s proprietary data on their behalf, using artificial intelligence without sacrificing privacy, Mr. Chandarana said. \u201CThis gives us a technological solution to be able to act on a client\u2019s private data \u2026 without them having to worry about the security constraints or giving up all their information to us,\u201D he said.<sup>1</sup>\n</p>';

  var blogcite122 = '\n<p class="cite">1. <a target="_blank" href="https://techcrunch.com/2018/11/14/uber-q3-2018-continues-to-lose-money-as-it-works-to-scale-scooters-bikes-and-other-newer-businesses/">https://techcrunch.com/2018/11/14/uber-q3-2018-continues-to-lose-money-as-it-works-to-scale-scooters-bikes-and-other-newer-businesses/</a></p>\n<p class="cite">2<a target="_blank" href="https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/"> https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/</a></p>\n';
  var blogpost111 = '\n<p class="quote">\n<p class="quote">At the highest levels of government the plastic panic can resemble a scrambled response to a natural disaster, or a public health crisis. The United Nations has declared a \u201Cwar\u201D on single-use plastic. In Britain, Theresa May has called it a \u201Cscourge\u201D, and committed the government to a 25-year plan that would phase out disposable packaging by 2042. India claimed it would do the same, but by 2022.<sup>1</sup>\n</p>';

  var blogcite111 = '\n<p class="cite"><a target="_blank" href="https://www.androidpolice.com/2018/11/14/pixel-night-sight-also-works-daylight-reducing-noise-boosting-resolution/">https://www.androidpolice.com/2018/11/14/pixel-night-sight-also-works-daylight-reducing-noise-boosting-resolution/</a></p>\n';

  var blogpost122 = '\n  <p class="firstparagraph">Eco-friendly urban commuting options are a gift, and should always be hailed.  \n  </p>\n  <p class="quote">On an earnings before interest, taxes, depreciation and amortization basis (EBIDTA), Uber\u2019s losses were $527 million, up about 21 percent quarter over quarter. And as Uber prepares to go public, the company has started presenting the income statements with stock-based compensation.\n\n  Ten years from now, Uber CEO Dara Khosrowshahi envisions its core ride-hailing business accounting for less than 50 percent of Uber\u2019s overall business, Khosrowshahi told me at TechCrunch Disrupt SF 2018. That means Uber expects businesses like Eats, scooters, bikes and freight to contribute to be more of Uber\u2019s business, which requires Uber to invest heavily in those businesses.<sup>1</sup>\n  </p>';

  var blogcite122 = '\n  <p class="cite">1. <a target="_blank" href="https://techcrunch.com/2018/11/14/uber-q3-2018-continues-to-lose-money-as-it-works-to-scale-scooters-bikes-and-other-newer-businesses/">https://techcrunch.com/2018/11/14/uber-q3-2018-continues-to-lose-money-as-it-works-to-scale-scooters-bikes-and-other-newer-businesses/</a></p>\n  <p class="cite">2<a target="_blank" href="https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/"> https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/</a></p>\n  ';
  var blogpost111 = '\n <p class="quote">Turns out that Google\'s new Night Sight mode for Pixels, formally released just earlier today, has some non-night utility. In a bit of a twist, you can use it in the daytime as well for "denoising and resolution improvements" inherited from another Google Camera feature: Super Res Zoom.<sup>1</sup> \n </p>';

  var blogcite111 = '\n <p class="cite"><a target="_blank" href="https://www.androidpolice.com/2018/11/14/pixel-night-sight-also-works-daylight-reducing-noise-boosting-resolution/">https://www.androidpolice.com/2018/11/14/pixel-night-sight-also-works-daylight-reducing-noise-boosting-resolution/</a></p>\n ';
  var blogpost100 = ' \n  <p class="firstparagraph">Plastics and micro-plastic waste just awaits a tech-informed solution!\n   </p>\n  <p class="quote">At the highest levels of government the plastic panic can resemble a scrambled response to a natural disaster, or a public health crisis. The United Nations has declared a \u201Cwar\u201D on single-use plastic. In Britain, Theresa May has called it a \u201Cscourge\u201D, and committed the government to a 25-year plan that would phase out disposable packaging by 2042. India claimed it would do the same, but by 2022.<sup>1</sup></p>\n ';
  var blogcite100 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://www.theguardian.com/environment/2018/nov/13/the-plastic-backlash-whats-behind-our-sudden-rage-and-will-it-make-a-difference\n    "   target="_blank">https://www.theguardian.com/environment/2018/nov/13/the-plastic-backlash-whats-behind-our-sudden-rage-and-will-it-make-a-difference\n      </a> \n      </p> \n     ';

  var blogpost099 = '\n  <p class="firstparagraph">Thank you Cisco, and Thank you AWS.  Amazon Web Services have now come into their light with new computing power from above --and for us citizens, at fractions of a cent! \n\n  </p>\n  <p class="quote">\n  Amazon Web Services and Cisco announced on Thursday that they\'re teaming up on a product that will allow developers to build applications in the cloud or in traditional data centers while making it easier for them to move between the two.<br /><br />\n\n  It\'s Cisco\'s latest effort to create hybrid options for customers that want to push work to the cloud but still need to run some projects on their own hardware for privacy and regulatory reasons. Cisco previously announced partnerships with the other two major cloud providers, Google and Microsoft, but Amazon is by far the leader in the cloud infrastructure market.<sup>1</sup>\n  </p>';

  var blogcite099 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnbc.com/2018/11/07/aws-and-cisco-partner-on-container-technology-for-hybrid-cloud.html">https://www.cnbc.com/2018/11/07/aws-and-cisco-partner-on-container-technology-for-hybrid-cloud.html</a></p>\n  <p class="cite">2<a target="_blank" href="https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/"> https://www.zdnet.com/article/amazons-consumer-business-moves-from-oracle-to-aws-but-larry-ellisons-wont-stop-talking/</a></p>\n  ';
  var blogpost088 = '\n <p class="quote">In April 2018, a group at MIT, USA, showed that it is possible to generate a form of superconductivity in a system of two layers of graphene under very specific conditions: To do this, the two hexagonal nets must be twisted against each other by exactly the magic angle of 1.1\xB0. Under this condition a flat band forms in the electronic structure. The preparation of samples from two layers of graphene with such an exactly adjusted twist is complex, and not suitable for mass production. Nevertheless, the study has attracted a lot of attention among experts.<sup>1</sup>\n </p>';

  var blogcite088 = '\n <p class="cite"><a target="_blank" href="https://www.sciencedaily.com/releases/2018/11/181109150124.htm"> https://www.sciencedaily.com/releases/2018/11/181109150124.htm</a></p>\n ';
  var blogpost077 = ' \n  <p class="firstparagraph">Naming conventions make for a linguistic phenomenon in a world whose rapid change far outpaces accurate transfer of meaning into  language. And, because we don\'t allow our terminology to redefine itself, an increasingly inaccurate language may come to incongruently describe current-day logic, and basically reality...\n   </p>\n  <p class="quote"> But Musk may be right in general about the futility of job titles, which serve largely as a distraction for knowledge workers in today\u2019s economy.\n  We\u2019re all project managers now.<br /><br />\n  \n  According to Roger Martin, a prominent management and strategy expert, and former dean of the Rotman School of Management at the University of Toronto, we may be structuring jobs all wrong. By extension, our addiction to titles as signs of status could be just another example of how humans\u2014whether as individuals or in groups\u2014operate in patterns based on habit, without responding to the world as it really is.<sup>1</sup></p>\n ';
  var blogcite077 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://qz.com/work/1443954/tesla-ceo-elon-musk-is-raising-an-important-question-about-job-titles/\n    "   target="_blank">https://qz.com/work/1443954/tesla-ceo-elon-musk-is-raising-an-important-question-about-job-titles/ \n      </a> \n      </a> \n     ';

  var blogpost066 = '\n  <p class="quote">Tim Berners-Lee has launched a global campaign to save the web from the destructive effects of abuse and discrimination, political manipulation, and other threats that plague the online world.\n\n  In a talk at the opening of the Web Summit in Lisbon on Monday, the inventor of the web called on governments, companies and individuals to back a new \u201CContract for the Web\u201D that aims to protect people\u2019s rights and freedoms on the internet.<sup>1</sup>\n  </p>';

  var blogcite066 = '\n  <p class="cite"><a target="_blank" href="https://www.theguardian.com/technology/2018/nov/05/tim-berners-lee-launches-campaign-to-save-the-web-from-abuse"> https://www.theguardian.com/technology/2018/nov/05/tim-berners-lee-launches-campaign-to-save-the-web-from-abuse</a></p>\n  ';
  var blogpost055 = '\n <p class="quote">"What would guarantee a paradigm shift would be the ability to effortlessly bring disparate devices together," said Blake Kozak, principal analyst at IHS Markit. "A large proportion of consumer complaints stem from installation challenges to devices not being reliable, e.g. scenes not working, high latency even in local control and lack of control when scenes are performing but broken."\n\n 5G, with its ability to handle more connected devices, could be an answer down the line. \n \n But while 5G could provide some consistency across smart home networking standards, it\'s not a panacea due to a familiar problem: battery life. <sup>1</sup>\n </p>';

  var blogcite055 = '\n <p class="cite"><a target="_blank" href="https://www.cnet.com/news/5g-and-the-promise-of-a-smart-home-makeover/"> https://www.cnet.com/news/5g-and-the-promise-of-a-smart-home-makeover/</a></p>\n ';
  var blogpost044 = ' \n  <p class="firstparagraph">Energy Consciousness around traditional <i>Proof of Work</i> blockchain technologies casts a negative light on Bitcoin Mining. Energy consumption from proof-of-work, energy-intensive blockchain mining parallels annual KiloWatt consumption as small countries like Denmark and Singapore.\n   </p>\n  <p class="quote"> \n \n  Bitcoin is a power-hungry cryptocurrency that is increasingly used as an investment and payment system. Here we show that projected Bitcoin usage, should it follow the rate of adoption of other broadly adopted technologies, could alone produce enough CO2 emissions to push warming above 2 \xB0C within less than three decades.<sup>1</sup>\n   <p>\n  <p class="quote">an article by a team of researchers from Hawaii in the journal Nature Climate Change last week did much the same kind of calculations as de Vries and Krause and found that bitcoin usage resulted in the equivalent of 69 million metric tonnes of CO2 in 2017. If bitcoin grows like other technologies, the authors said, it\u2019d cough out enough greenhouse gas to warm the planet by 2 degrees celsius by the mid-2030s.<sup>2</sup>\n  </p>';
  var blogcite044 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://www.nature.com/articles/s41558-018-0321-8\n    "   target="_blank">https://www.nature.com/articles/s41558-018-0321-8\n      </a> \n    <p class="cite"> 2 <a target="_blank" href="https://www.wired.com/story/bitcoin-will-burn-planet-down-how-fast/\n    "   target="_blank">https://www.wired.com/story/bitcoin-will-burn-planet-down-how-fast/\n      </a> \n     ';
  var blogpost033 = ' \n     <p class="firstparagraph"> \n      </p>\n      <p class="quote">The invention provides for systems and devices for hardened remote storage of private cryptography keys used for authentication. The storage device is tamper-responsive, such that receipt of a signal that indicates physical or non-physical tampering with the storage device or its components results in deletion of the private cryptography key(s) from the memory. The storage device is configured to be separate and remote from a computing node that executes an authentication routine requiring the private cryptography key(s) and, as such, the private cryptography key(s) are accessible to, but not communicated to, the computing node only when the computing node is executing the authentication routine.</p><sup>1</sup> \n      <p >\n   \n      </p>';
  var blogcite033 = '  <p class="cite"> 1 <a target="_blank" href="https://u.today/bank-of-america-awarded-new-patent-for-storing-private-keys"   target="_blank">https://u.today/bank-of-america-awarded-new-patent-for-storing-private-keys</a> </p>\n       \n       <p class="cite">2 <a target="_blank" href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=10,116,633.PN.&OS=pn/10,116,633&RS=PN/10,116,633"   target="_blank">http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1=10,116,633.PN.&OS=pn/10,116,633&RS=PN/10,116,633</a> </p>\n        ';

  var blogpost022 = ' \n  <p class="firstparagraph"> \n   </p>\n  <p class="quote"> <p>\n  ';
  var blogcite022 = ' \n    <p class="cite"> <a target="_blank" href=""   target="_blank">\n      </a> </p>\n     ';
  var blogpost011 = ' \n     <p class="firstparagraph"> \n      </p>\n      <p> </p>';
  var blogcite011 = '  <p class="cite"> <a target="_blank" href=""   target="_blank"></a> </p>\n        \n        ';

  var url = [{
    id: '137',
    did: '11-30-18',
    date: 'November 30, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Paradigm Breaker',
    post: blogpost137,
    blogcite: blogcite137
  }, {
    id: '136',
    did: '11-30-18',
    date: 'November 30, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'A Co-Bot Revolution ',
    post: blogpost136,
    blogcite: blogcite136
  }, {
    id: '135',
    did: '11-29-18',
    date: 'November 29, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Diversity and Equality in the Machine Learning Landscape',
    post: blogpost135,
    blogcite: blogcite135
  }, {
    id: '134',
    did: '11-28-18',
    date: 'November 28, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'The Great Bitcoin Bust of \'18, Part II:<br />The Costs of Deprecated Technology',
    post: blogpost134,
    blogcite: blogcite134
  }, {
    id: '133',
    did: '11-27-18',
    date: 'November 27, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'The Great Bitcoin Bust of \'18, Part I:<br />The Earth-Killer Currency\'s Last Days',
    post: blogpost133,
    blogcite: blogcite133
  }, {
    id: '132',
    did: '11-26-18',
    date: 'November 26, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'Oops, They Did it Again',
    post: blogpost132,
    blogcite: blogcite132
  }, {
    id: '131',
    did: '11-24-18',
    date: 'November 24-25, 2018<br />Weekend ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: '5G Security Foundations for 21st Century Appliances',
    post: blogpost131,
    blogcite: blogcite131
  }, /*
     {
     id: '130',
     did: '11-23-18',
     date: 'November 23, 2018 ',
     author: 'by Thomas Maestas',
     cat3: 'Sociology Tomorrow',
     title: 'Oops, They Did it Again',
     post: blogpost130,
     blogcite: blogcite130
     },   */
  {
    id: '129',
    did: '11-22-18',
    date: 'November 22, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Healthy Livin\' Cells',
    post: blogpost129,
    blogcite: blogcite129
  }, {
    id: '128',
    did: '11-21-18',
    date: 'November 21, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Protecting Data',
    post: blogpost128,
    blogcite: blogcite128
  }, {
    id: '127',
    did: '11-20-18',
    date: 'November 20, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Tech\'s Mortal Dependence on Global Trade Calls for World Peace!',
    post: blogpost127,
    blogcite: blogcite127
  }, {
    id: '126',
    did: '11-19-18',
    date: 'November 19, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Facebook\'s Struggle with Regulation',
    post: blogpost126,
    blogcite: blogcite126
  }, {
    id: '125',
    did: '11-17-18',
    date: 'November 17-18, 2018<br />Weekend ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Tech Money\'s Deep Footprint',
    post: blogpost125,
    blogcite: blogcite125
  }, {
    id: '124',
    did: '11-16-18',
    date: 'November 16, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'A More Retrospective A.I.',
    post: blogpost124,
    blogcite: blogcite124
  }, {
    id: '123',
    did: '11-15-18',
    date: 'November 15, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Fast, Anonymized Money!',
    post: blogpost123,
    blogcite: blogcite123
  }, {
    id: '122',
    did: '11-14-18',
    date: 'November 14, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Green Options',
    post: blogpost122,
    blogcite: blogcite122
  }, {
    id: '111',
    did: '11-13-18',
    date: 'November 13, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Picture Power',
    post: blogpost111,
    blogcite: blogcite111
  }, {
    id: '100',
    did: '11-12-18',
    date: 'November 12, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'Plastic Hangover',
    post: blogpost100,
    blogcite: blogcite100
  }, {
    id: '099',
    did: '11-10-18',
    date: 'November 10-11, 2018<br />Weekend ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Thank You, AWS--for your Software Megatron',
    post: blogpost099,
    blogcite: blogcite099
  }, {
    id: '088',
    did: '11-09-18',
    date: 'November 9, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Graphene Dreams',
    post: blogpost088,
    blogcite: blogcite088
  }, {
    id: '077',
    did: '11-08-18',
    date: 'November 8, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow',
    title: 'What\'s in a Name',
    post: blogpost077,
    blogcite: blogcite077
  }, {
    id: '066',
    did: '11-07-18',
    date: 'November 7, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Uncharted Cloud Territory: A Magna Carta',
    post: blogpost066,
    blogcite: blogcite066
  }, {
    id: '055',
    did: '11-06-18',
    date: 'November 6, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The 5G IoT SuperHighway',
    post: blogpost055,
    blogcite: blogcite055
  }, {
    id: '044',
    did: '11-05-18',
    date: 'November 5, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Tesla at Work',
    post: blogpost044,
    blogcite: blogcite044
  }, {
    id: '033',
    did: '11-03-18',
    date: 'November 3-4, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Now that\'s a Safe Keep!',
    post: blogpost033,
    blogcite: blogcite033
  }, {
    id: '022',
    did: '11-02-18',
    date: 'November 2, 2018 ',
    author: 'by Thomas Maestas',
    cat3: ' ',
    title: ' ',
    post: blogpost022,
    blogcite: blogcite022
  }, {
    id: '01',
    did: '11-01-18',
    date: 'November 1, 2018 ',
    author: 'by Thomas Maestas',
    cat3: ' ',
    title: ' ',
    post: blogpost011,
    blogcite: blogcite011
  }];
  var i;
  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a target="_blank" href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-nov").innerHTML += cat;
  }

  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a target="_blank" href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-nov-mod").innerHTML += catMod;
  }
  console.log('blogger-nov');
  //console.log(angular.toJson(url)); 
}; // end bloggerNov()
bloggerNov();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 'use strict';

var bloggerOct = function bloggerOct() {

  var blogpost22 = ' \n        <p class="firstparagraph">Cloud data is at once fast, seamless and powered by limitless computer processing power and partitions!\n         </p>\n        <p class="quote">\n        Responding to a question around slowed capex growth, the Microsoft CEO explained the company\u2019s intelligent cloud and intelligent edge ethos was being spread across every business line; from Azure, of course, to Dynamics 365, to gaming. It is a unified, long-term message, Nadella added. \u201CFor the first time, what you see across Microsoft is really one platform which spans all of these businesses and all of the margin structures that are there represented in it,\u201D he said.<sup>1</sup><p>\n        ';
  var blogcite22 = ' \n          <p class="cite"> 1 <a target="_blank" href="https://www.cloudcomputing-news.net/news/2018/oct/25/microsoft-cites-azure-and-cloud-strength-more-strong-financials-its-all-about-long-term-ethos/\n          "   target="_blank">https://www.cloudcomputing-news.net/news/2018/oct/25/microsoft-cites-azure-and-cloud-strength-more-strong-financials-its-all-about-long-term-ethos/\n            </a> \n           ';
  var blogpost21 = ' \n           <p class="firstparagraph">Light matters alot more when its attributes power both quantum-based qubit calculations and the process itself making metamaterials they are based on!</p>\n            </p>\n            <p class="quote">Breakthroughs in the field of nanophotonics -- how light behaves on the nanometer scale -- have paved the way for the invention of "metamaterials," human-made materials that have enormous applications, from remote nanoscale sensing to energy harvesting and medical diagnostics. But their impact on daily life has been hindered by a complicated manufacturing process with large margins of error.\n            <br /><br />\n            "The process of designing metamaterials consists of carving nanoscale elements with a precise electromagnetic response," Dr. Mrejen says. "But because of the complexity of the physics involved, the design, fabrication and characterization processes of these elements require a huge amount of trial and error, dramatically limiting their applications."\n            <br /><br />\n            Deep Learning a key to precision manufacturing\n            <br /><br />\n            "Our new approach depends almost entirely on Deep Learning, a computer network inspired by the layered and hierarchical architecture of the human brain," Prof. Wolf explains. "It\'s one of the most advanced forms of machine learning, responsible for major advances in technology, including speech recognition, translation and image processing. We thought it would be the right approach for designing nanophotonic, metamaterial elements."<sup>1</sup></p>';
  var blogcite21 = '  <p class="cite"> 1 <a target="_blank" href="https://www.sciencedaily.com/releases/2018/10/181023130502.htm"   target="_blank">https://www.sciencedaily.com/releases/2018/10/181023130502.htm/a> </p>\n              \n              ';
  var blogpost20 = ' \n  <p class="firstparagraph">Material technologies too often remain the unsung hero for so much advancement in any field.\n   </p>\n  <p class="quote">The body material itself is what McLaren calls "titanium deposition carbon fiber," where a micron-thin layer of titanium is fused directly into the fiber\'s weave, becoming an integral part of the construction.<sup>1</sup></p>\n  <img src="dist/img/mclaren.jpg" class="zoom" /><p>\n  McLaren just reinvented the wing--erhum, by doing away with the spoiler wing? By algorithmically adjusting the centers of windflow pressure based on speed, other factors optimizes -- reinvents -- the wing:</p>\n  <p class="quote">The entire body is made from lightweight carbon fiber, parts of which are actually flexible. On each end of the tail, active ailerons can actually bend, reducing turbulence and drag at higher speeds. According to McLaren, these ailerons "adjust to move the center of pressure and provide the required level of downforce precisely when it is needed most." It\'s airspace tech in an automotive application, and it alleviates the need for a silly rear wing.<sup>1</sup></p>\n  <p>With a little more precision and reliability, what should stop them from inverting air-flow, and strap some wings and a turbine to that 1,000 horse-power engine!<p>\n  ';
  var blogcite20 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://www.cnet.com/roadshow/news/mclaren-speedtail-official-debut/\n    "   target="_blank">https://www.cnet.com/roadshow/news/mclaren-speedtail-official-debut/\n      </a> \n     ';
  var blogpost19 = ' \n     <p class="firstparagraph">Data privacy\'s new hero raises attention to one of the more pressing issue of technology in our lives:\n      </p>\n      <p class="quote">Apple\u2019s chief executive, Tim Cook, called on Wednesday for a federal privacy law in the US to protect against voracious internet companies hoarding so much digital data that the businesses know citizens \u201Cbetter than they know themselves\u201D \u2013 and then often sell the information on.\n<br /><br />\n      Cook warned in a keynote speech that personal data was being \u201Cweaponized\u201D against the public and endorsed tough privacy laws for both Europe and the US. The iPhone and Mac computer giant has stood out in its explicit declarations that Apple prefers to protect its customers\u2019 personal data.\n      </p>\n      <p>Importantly, Tim Cook addresses the most sensitive of data about ourselves, i.e. the nexus of volunteered and observed data: <i>inferred data</i>:\n     <p class="quote">Broadly [personal data] can be split into three categories: Volunteered data is information we willingly part with in online surveys and social media profiles. Observed data is captured through the observation of actions and interactions of individuals (GPS data and telecoms metadata, for example). Inferred data is used to complete the picture by mining those first two categories.<sup>1</sup></p>';
  var blogcite19 = '  <p class="cite"> 1 <a target="_blank" href="https://www.theguardian.com/technology/2018/oct/24/tim-cook-us-federal-privacy-law-weaponized-personal-data"   target="_blank">https://www.theguardian.com/technology/2018/oct/24/tim-cook-us-federal-privacy-law-weaponized-personal-data</a> </p>\n       \n       <p class="cite"> 2 <a target="_blank" href="https://medium.com/s/new-world-crime/how-much-are-you-worth-in-the-online-data-economy-5ae2dd236135"   target="_blank">\n       https://medium.com/s/new-world-crime/how-much-are-you-worth-in-the-online-data-economy-5ae2dd236135</a> </p>\n        ';
  var blogpost18 = '       \n  <p class="firstparagraph">Bigger, Faster Image Rendering--especially when data points are tied to the pixels of a page, but especially still pictures should be the browsers\' Task #1. Instead, load-times too often fall victim to the graphics ... but the browser world is now willing to work together for  action:\n   </p>\n  <p class="quote">Google revealed WebP eight years ago and since then has built it into its Chrome web browser, Android phone software and many of its online properties in an effort to put websites on a diet and cut network data usage. But Google had trouble encouraging rival browser makers to embrace it.\n  <br /><br />\n  "Mozilla is moving forward with implementing support for WebP," the nonprofit organization said. WebP will work in versions of Firefox based on its Gecko browser engine, Firefox for personal computers and Android but not for iOS. Mozilla plans to add support in the first half of 2019.\n\nCommitting to a new image format on the web is a big deal. In addition to technical challenges and new security risks, embracing a new image format means embracing it for years and years, because removing support at some point in the future will break websites that rely on it.\n<br /><br />\nIt\'s one of the central conundrums of the web. Browser makers and website developers want to advance the technology, but they can\'t remove older aspects of the foundation as readily as Google can with Android or Apple with its rival iOS software. Websites have a long shelf life.<sup>1</sup></p>';
  var blogcite18 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://www.cnet.com/news/firefox-to-support-googles-webp-image-format-for-a-faster-web/\n    "   target="_blank">https://www.cnet.com/news/firefox-to-support-googles-webp-image-format-for-a-faster-web/\n      </a> \n     ';
  var blogpost17 = ' \n     <p class="firstparagraph">Bootstrapping analytic models in any science requires a long, steady climb upon the <i>Shoulders of Giants</i>, years and decades\' past research gains--especially  Classification and Regression Trees . \n      </p>\n     <p class="quote">When approaching any type of Machine Learning (ML) problem there are many different algorithms to choose from. In machine learning, there\u2019s something called the \u201CNo Free Lunch\u201D theorem which basically states that no one ML algorithm is best for all problems. The performance of different ML algorithms strongly depends on the size and structure of your data.<sup>1</sup></p>';
  var blogcite17 = ' \n       <p class="cite"> 1 <a target="_blank" href="https://towardsdatascience.com/selecting-the-best-machine-learning-algorithm-for-your-regression-problem-20c330bad4ef\n       "   target="_blank">\n       https://towardsdatascience.com/selecting-the-best-machine-learning-algorithm-for-your-regression-problem-20c330bad4ef\n         </a> \n        ';
  var blogpost16 = ' \n  <p class="firstparagraph">Apple V. Bloomberg. Bloomberg hit first. Much controversy now surrounds the topic of my October 10th post--that Bloomberg claiming that Apple was aware of potential chip embeds from foreign manufacturers. Whose news can one believe anymore? \n   </p>\n  <p class="quote"> Apple Inc Chief Executive Tim Cook on Friday told an online news website that Bloomberg should retract a story that claimed Apple\u2019s internal computer systems had been infiltrated by malicious computer chips inserted by Chinese intelligence agents. <br /><br />\n  \u201CThere is no truth in their story about Apple,\u201D Cook told BuzzFeed News in an interview with the online publication. \u201CThey need to do that right thing and retract it.\u201D<sup>2</sup></p>';
  var blogcite16 = ' \n    <p class="cite"> 1 <a target="_blank" href=" https://www.reuters.com/article/us-apple-bloomberg/apple-ceo-urges-bloomberg-to-retract-spy-chip-story-idUSKCN1MT2Z8\n    "   target="_blank">\n    https://www.reuters.com/article/us-apple-bloomberg/apple-ceo-urges-bloomberg-to-retract-spy-chip-story-idUSKCN1MT2Z8\n    \n    \n      </a> \n     ';
  var blogpost15 = ' \n  <p>\n  Mathematically, reading time   necessarily divides itself up into small pieces now that everyone is a click away from anything readable, every novel written, at a moment\'s download, without or without easy phone and tablet reading. But given that choice, the trend toward fiction is not without good reason ... </p>\n  <p class="quote">\n  Modern day reading habits continue to evolve in a digital age. Statistics vary on exactly how many people are reading novels this decade compared to decades past. There is a definite trend for general readers to buy more fiction than nonfiction books\u2014and to get facts, news and crystallized knowledge from the internet. In 2012, only four of the top twenty books were nonfiction titles.<br /><br />\n\n"People are interested in escape," says Carol Fitzgerald of the Book Report Network. "In a number of pages, the story will open, evolve and close, and a lot of what\'s going on in the world today is not like that. You\'ve got this encapsulated escape that you can enjoy."<sup>2</sup></p>';
  var blogcite15 = ' \n    <p class="cite"> 1 <a target="_blank" href="https://www.smithsonianmag.com/smart-news/growing-surrounded-books-may-bolster-skills-later-life-180970523/\n    "   target="_blank">\n    https://www.smithsonianmag.com/smart-news/growing-surrounded-books-may-bolster-skills-later-life-180970523/\n    \n    \n      </a>\n      </p>  \n  <p class="cite"> 2 <a target="_blank" href="https://www.psychologytoday.com/us/blog/the-athletes-way/201401/reading-fiction-improves-brain-connectivity-and-function\n"   target="_blank">\nhttps://www.psychologytoday.com/us/blog/the-athletes-way/201401/reading-fiction-improves-brain-connectivity-and-function\n\nhttps://www.smithsonianmag.com/smart-news/growing-surrounded-books-may-bolster-skills-later-life-180970523/\n  </a>\n  </p>   \n\n     ';
  var blogpost14 = ' \n  <p class="firstparagraph">Technology provides the resources for a better life all around ... </p>\n    <p class="quote"> \n    The more sophisticated science becomes, the harder it is to communicate results. Papers today are longer than ever and full of jargon and symbols. They depend on chains of computer programs that generate data, and clean up data, and plot data, and run statistical models on data. These programs tend to be both so sloppily written and so central to the results that it\u2019s contributed to a replication crisis, or put another way, a failure of the paper to perform its most basic task: to report what you\u2019ve actually discovered, clearly enough that someone else can discover it for themselves.<br /><br />\n    Perhaps the paper itself is to blame. Scientific methods evolve now at the speed of software; the skill most in demand among physicists, biologists, chemists, geologists, even anthropologists and research psychologists, is facility with programming languages and \u201Cdata science\u201D packages. And yet the basic means of communicating scientific results hasn\u2019t changed for 400 years. Papers may be posted online, but they\u2019re still text and pictures on a page.<sup>1</sup></p>\n    <p>Anaconda, the programming package bundle features math software with Spyder applications, yet the Jupyter notebook is already revolutionizing academic publications...';
  var blogcite14 = ' \n  <p class="cite"> 1 <a target="_blank" href="\n  https://www.vox.com/2014/11/24/7272929/global-poverty-health-crime-literacy-good-news"   target="_blank">\n  https://www.vox.com/2014/11/24/7272929/global-poverty-health-crime-literacy-good-news\n  </a>\n  </p>   \n     ';
  var blogpost13 = ' \n  <p class="firstparagraph">The College Term-Paper, the perennial object of dread or elation, of tedium or excitement. Yet, more and more, the needs for communication require the inclusion of programming, analytic language. Paragraphs of eloquently written code with paragraphs of synopsis, from one logical statement to the next, laying out the proofs with each paragraph. Best yet, it is innately online and presentable, and employs the powerful languages like Python and R. But how to communicate these specialized papers to a wide audience?</p>\n    <p class="quote"> \n    The more sophisticated science becomes, the harder it is to communicate results. Papers today are longer than ever and full of jargon and symbols. They depend on chains of computer programs that generate data, and clean up data, and plot data, and run statistical models on data. These programs tend to be both so sloppily written and so central to the results that it\u2019s contributed to a replication crisis, or put another way, a failure of the paper to perform its most basic task: to report what you\u2019ve actually discovered, clearly enough that someone else can discover it for themselves.<br /><br />\n    Perhaps the paper itself is to blame. Scientific methods evolve now at the speed of software; the skill most in demand among physicists, biologists, chemists, geologists, even anthropologists and research psychologists, is facility with programming languages and \u201Cdata science\u201D packages. And yet the basic means of communicating scientific results hasn\u2019t changed for 400 years. Papers may be posted online, but they\u2019re still text and pictures on a page.<sup>1</sup></p>\n    <p>Anaconda, the programming package bundle features math software with Spyder applications, yet the Jupyter notebook is already revolutionizing academic publications...';
  var blogcite13 = ' \n  <p class="cite"> 1 <a target="_blank" href="\n  https://www.vox.com/2014/11/24/7272929/global-poverty-health-crime-literacy-good-news"   target="_blank">\n  https://www.vox.com/2014/11/24/7272929/global-poverty-health-crime-literacy-good-news\n  </a>\n  </p>  \n  <p class="cite"> 2 <a target="_blank" href="https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/"   target="_blank">https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\n  </a>\n  </p>  \n     ';
  var blogpost12 = '\n  <p class="firstparagraph">Modeling the molecular behavior of organic chemistry, biology has become the specialty of Quantum computing, with its superposed third-state that supports short bursts of ultra-fast algorithm computations. Quantum computing has revolutionized biology, so why not psychology?  ..at least at the molecular level: </p><p class="quote"> According to Zheng Joyce Wang and others who try to model our decision-making processes mathematically, the equations and axioms that most closely match human behavior may be ones that are rooted in quantum physics.\n\n  "We have accumulated so many paradoxical findings in the field of cognition, and especially in decision-making," said Wang, who is an associate professor of communication and director of the Communication and Psychophysiology Lab at The Ohio State University.<br /><br />\n  \n  "Whenever something comes up that isn\'t consistent with classical theories, we often label it as \'irrational.\' But from the perspective of quantum cognition, some findings aren\'t irrational anymore. They\'re consistent with quantum theory\u2014and with how people really behave."\n  \n  \n  <sup>1</sup></p>\n  <p>So much for the binary way of thinking--after all, isn\'t life more colorful than black-and-white reasoning?\n  </p>\n ';
  var blogcite12 = '  \n  <p class="cite">1 <a target="_blank" href="https://phys.org/news/2015-09-youre-irrational-quantum-probabilistic-human.html"   target="_blank">https://phys.org/news/2015-09-youre-irrational-quantum-probabilistic-human.html\n  </a>\n  </p>\n  <p class="cite">PDFs <br /> <a target="_blank" href="https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(15)00099-6"   target="_blank">https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(15)00099-6\n  </a> \n  </p>\n  <p class="cite">PDFs <br /> <a target="_blank" href="http://journals.sagepub.com/doi/abs/10.1177/0963721414568663"   target="_blank">http://journals.sagepub.com/doi/abs/10.1177/0963721414568663\n  </a> \n  </p>\n     ';

  var blogpost11 = '\n  <p class="firstparagraph">Quantum <i>\'Flat-Earther\'s</i> have one less argument ...</p><p class="quote">\n  \n\nStraightaway, they saw the droplets exhibit surprisingly quantum-like behaviors \u2014 only traversing certain \u201Cquantized\u201D orbits around the center of their liquid baths, for instance, and sometimes randomly jumping between orbits, as electrons do in atoms. There and in bouncing-droplet labs that soon sprang up at the Massachusetts Institute of Technology and elsewhere, droplets were seen to tunnel through barriers and perform other acts previously thought to be uniquely quantum. In reproducing quantum phenomena without any of the mystery, the bouncing-droplet experiments rekindled in some physicists de Broglie\u2019s old dream of a reality at the quantum scale that consists of pilot waves and particles instead of probability waves and conundrums.<br /><br />\n\nBut a series of bouncing-droplet findings since 2015 has crushed this dream. The results indicate that Couder\u2019s most striking demonstration of quantum-like phenomena, back in 2006 \u2014 \u201Cthe experiment that got me hooked on this problem,\u201D the fluid dynamicist Paul Milewski said \u2014 was in error. Repeat runs of the experiment, called the \u201Cdouble-slit experiment,\u201D have contradicted Couder\u2019s initial results and revealed the double-slit experiment to be the breaking point of both the bouncing-droplet analogy and de Broglie\u2019s pilot-wave vision of quantum mechanics.\n  <sup>1</sup></p>\n ';
  var blogcite11 = ' \n  <p class="cite"> <a target="_blank" href="https://www.quantamagazine.org/famous-experiment-dooms-pilot-wave-alternative-to-quantum-weirdness-20181011/"   target="_blank">https://www.quantamagazine.org/famous-experiment-dooms-pilot-wave-alternative-to-quantum-weirdness-20181011/\n  </a>\n  </p>\n     ';

  var blogpost10 = '\n<p class="firstparagraph">Climate-change scientist-activists earn their prestige with every research study and every letter written. With less fanfare, economists also earn their due prestige for working toward a sustainable prosperity.     </p>\n<p class="quote"> This year\u2019s [Nobel Prize] Laureates William Nordhaus and Paul Romer have significantly broadened the scope of economic analysis by constructing  models that explain how the market economy interacts with nature and knowledge. <br /><br />\n Romer demonstrates how knowledge can function as a driver of long-term economic \ngrowth. When annual economic growth of a few per cent accumulates over decades, it transforms people\u2019s lives. \nPrevious macroeconomic research had emphasised technological innovation as the primary driver of economic \ngrowth, but had not modelled how economic decisions and market conditions determine the creation of new \ntechnologies. Paul Romer solved this problem by demonstrating how economic forces govern the willingness of \nfirms to produce new ideas and innovations. \n<sup>1</sup></p>\n<p>The economist in turn practices what he preaches by using only open-source software--to the aim of democratizing research itself:</p>\n<p class="quote">Romer believes in making research transparent. He argues that openness and clarity about methodology is important for scientific research to gain trust. As Romer explained in an April 2018 blog post, in an effort to make his own work transparent, he tried to use Mathematica to share one of his studies in a way that anyone could explore every detail of his data and methods. It didn\u2019t work. He says that Mathematica\u2019s owner, Wolfram Research, made it too difficult to share his work in a way that didn\u2019t require other people to use the proprietary software, too. Readers also could not see all of the code he used for his equations.\n<br /><br />\nInstead of using Mathematica, Romer discovered that he could use a Jupyter notebook for sharing his research. Jupyter notebooks are web applications that allow programmers and researchers to share documents that include code, charts, equations, and data. Jupyter notebooks allow for code written in dozens of programming languages. For his research, Romer used Python\u2014the most popular language for data science and statistics.<sup>2</sup>\n</p>\n<p>The Bottom line is that yesterday\'s ink and paper is today\'s software and hardware--essential tools for success, the earlier the better. So, because historical suppression usually begins financially, equal access across social and economic lines.  So, the economic incentive to outfit every last citizen with free wifi and open-source technology. Already, the best in humanity--the Nobel winners--know the public incentive to harness the power of a widespread tech education. Because when the many and not the few create and advance technology, the economy blooms with real productivity.</p>\n  ';
  var blogcite10 = ' \n<p class="cite"> 1 <a target="_blank" href="https://www.nobelprize.org/uploads/2018/10/press-economicsciences2018.pdf"   target="_blank">https://www.nobelprize.org/uploads/2018/10/press-economicsciences2018.pdf \n</a>\n</p>  \n<p class="cite"> 2 <a target="_blank" href="https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/"   target="_blank">https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\n</a>\n</p>  \n   ';

  var blogpost9 = '\n  <p class="firstparagraph">Hackernoon featured Jack Dossman\'s take on the banality of blockchain technology outside of special-use cases. Dossman opines, "Unless your business needs all of the benefits that a blockchain provides, you will be no better off storing your data on one." </p>\n  <p class="quote">By definition, there is no central authority governing a public blockchain, so who makes decisions in this distributed company?\n\n  What about dispute resolution? Once data has been uploaded and verified, it\u2019s not going anywhere. Got charged for a ride you didn\u2019t take? Driver did something really bad that you need to report? Well too bad because nobody is listening. <sup>1</sup></p>\n <p>Now, this article grossly underestimates the range of designs from  private blockchains to consortium blockchains, but the point about hype is well-made!</p>\n    ';
  var blogcite9 = ' \n  <p class="cite"> 1 <a target="_blank" href="https://hackernoon.com/10-things-blockchain-isnt-dcb7966d22e5"   target="_blank">https://hackernoon.com/10-things-blockchain-isnt-dcb7966d22e5 \n  </a>\n  </p>  \n     ';
  var blogpost8 = '\n  <p class="firstparagraph">Intellectual espionage is about as newsworthy as any other misguided nationalist practice across the globe from nearly every nation--in some form. Maybe its the ubiquity of mimicry that events are quickly forgotten. An <i>other-world problem</i>. Yet, this is not merely a regionally-based nuisance. From time immemorial, headlines have raised the prospect of academic, university-based intellectual theft. Related events raised eyebrows and then quickly forgotten. <p>This year, Chinese-made servers discovered with a microscopic, embedded chip may have been known by Apple three years ago. Last week, Bloombergs reported, </p>\n  <p class="quote"> Beijing\'s military intelligence pressured or bribed a Chinese manufacturing subcontractor of US-based Super Micro to include a small secret spy chip in the server maker\'s motherboards. The supposedly grain-of-rice-sized chips were inserted to give China a backdoor into the computers, allowing data to be silently altered or stolen from afar by the Chinese government. <br />\n  <br />Of the 30 or so organizations that apparently received these bugged machines, ranging from a major bank to US government contractors, were Apple and Amazon, according to Bloomberg\'s sources. <sup>1</sup></p>\n  <p>Mischief in all forms pervades nearly every nations\' agenda  ... Again, apparently, who remembers a week afterward?</p> \n    ';
  var blogcite8 = ' \n  <p class="cite"> 1 <a target="_blank" href="https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/"   target="_blank">https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/ \n  </a>\n  </p> <p class="cite"> 2 <a target="_blank" href="https://www.cnbc.com/2018/10/04/us-warns-companies-about-security-risk-to-managed-service-providers.html"   target="_blank">https://www.cnbc.com/2018/10/04/us-warns-companies-about-security-risk-to-managed-service-providers.html\n  </a>\n  </p>  <p class="cite">3\n  <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race"   target="_blank">https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\n  </a>\n  </p>\n     ';
  var blogpost7 = '\n  <p class="firstparagraph"> The latest news of microscopic foreign chips embedded in Micro Systems chips for hard drives that find their way into Amazon, Pentagon, and other servers in between now raise a new awareness</p>\n  <p class="quote">\n The spy chip could have been placed electrically between the baseboard management controller (BMC) and its SPI flash or serial EEPROM storage containing the BMC\'s firmware. Thus, when the BMC fetched and executed its code from this memory, the spy chip would intercept the signals and modify the bitstream to inject malicious code into the BMC processor, allowing its masters to control the BMC.\n  <sup>1</sup></p> \n  <p> </p>\n  <p class="quote">The spy chip could have been placed electrically between the baseboard management controller (BMC) and its SPI flash or serial EEPROM storage containing the BMC\'s firmware. Thus, when the BMC fetched and executed its code from this memory, the spy chip would intercept the signals and modify the bitstream to inject malicious code into the BMC processor, allowing its masters to control the BMC.<sup>3</sup></p>\n  <p>In sum, the <i>the times, they are - a - changing</i> and that means, like any test-taker knows, cheatsheets do more damage if they fall irrelevent, even slightly deprecated.  </p> \n    ';
  var blogcite7 = '\n  <p class="cite"> 1 <a target="_blank" href="https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/"   target="_blank">https://www.theregister.co.uk/2018/10/08/super_micro_us_uk_intelligence/ \n  </a>\n  </p> \n  <p class="cite">2\n  <a target="_blank" href="https://www.forbes.com/sites/kalevleetaru/2018/10/04/the-chinese-spy-chip-story-is-a-reminder-of-how-insecure-our-digital-world-really-is/#1736f0f07e13"   target="_blank">https://www.forbes.com/sites/kalevleetaru/2018/10/04/the-chinese-spy-chip-story-is-a-reminder-of-how-insecure-our-digital-world-really-is/#1736f0f07e13\n  </a>\n  </p> \n  <p class="cite">3\n  <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race"   target="_blank">https://www.bloomberg.com/news/articles/2018-09-04/what-a-mooted-chinese-wireless-mega-merger-means-for-the-5g-race\n  </a>\n  </p>\n     ';
  var blogpost6 = '\n  <p class="firstparagraph">Last month\'s <i>Techcrunch Disrupt!</i> revealed if only a few imminent blockchain trends to pay attention to: The crypto-currency and investment is definitely tamped down, and now the field of play is no longer between competing platforms, but rather the DAPPS are now the players on the established platforms--starting with Ethereum crypto-contracts, browser-based platforms like Mist and other players. <i>The trust and direction is no longer in dispute--now, the question asks: Who can leverage ease-of-use and accessibility and  utility via the web browser ... After all, isn\'t the point of tech advancents, to bring about new possibilities, and  the time to explore them by also providing efficient living! </p>\n   \n    ';
  var blogcite6 = '  \n     ';
  var blogpost5 = '\n  <p class="firstparagraph">Trust, trust layers, and institutions of Trustworthiness: The quaint, <i>Leave-it-to-Beaver terms of a by-gone world</i> haven\'t weakened but are transformed: What was once a rigid hierarchy of trust proclamations from above are now flexible, continually-earned, community-based trust networks. Slowly but surely,<i>Community-centered networks made of social capital overtake institutional, bureaucratic capital and credentialism. </i></p><p class="quote">This is the whole issue. This is everything that we\'re talking about. And how do you trust something that can pull these signals off of you? <br /><br />If a system is asymmetric\u2014if you know more about me than I know about myself, we usually have a name for that in law. So, for example, when you deal with a lawyer, you hand over your very personal details to a lawyer so they can help you. But then they have this knowledge of the law and they know about your vulnerable information, so they could exploit you with that. Imagine a lawyer who took all of that personal information and sold it to somebody else. But they\'re governed by a different relationship, which is the fiduciary relationship. They can lose their license if they don\'t actually serve your interest. And similarly a doctor or a psychotherapist.\n  <sup>1</sup></p>\n  <p>Whether by coincidence or innate features of 21st century technology, trust-based platforms innately reward sharing, trust-based distribution of power. Consider the difference between the democratically operated blockchain, i.e. distributed ledgers without middle-persons, versus hierarchical, siloed centers of information. As usual, the problems that technology present in one form are symmetrically resolved by a technology of another form.';
  var blogcite5 = '\n  <p class="cite">1 <a target="_blank" href="https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/"   target="_blank">\n  https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/</a>\n  </p> \n  <p class="cite">2<a target="_blank" href="https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/"   target="_blank">https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/\n  </a>\n  </p>\n     ';
  var blogpost4 = '<p class="quote"><i>But everywhere you turn on the internet there\'s basically a supercomputer pointing at your brain, playing chess against your mind, and it\'s going to win a lot more often than not.</i><sup>1</sup></p>\n  <p class="firstparagraph">First off, what is Humane Technology? Besides a philosophy that dissipates, a practical philosophy only gains focus--far more valuable than depth or breadth. Much more than a real Des Cartes meets an iPhone, whose focus is on "realigning technology with a clear-eyed model of human nature".</p>\n  <p class="quote">Because we have built our society, certainly liberal democracy with elections and the free market and so forth, on philosophical ideas from the 18th century which are simply incompatible not just with the scientific findings of the 21st century but above all with the technology we now have at our disposal.<br /><br />\n   Our society is built on the ideas that the voter knows best, that the customer is always right, that ultimate authority is, as Tristan said, is with the feelings of human beings and this assumes that human feelings and human choices are these sacred arena which cannot be hacked, which cannot be manipulated. Ultimately, my choices, my desires reflect my free will and nobody can access that or touch that. And this was never true. But we didn\'t pay a very high cost for believing in this myth in the 19th and 20th century because nobody had a technology to actually do it. Now, people\u2014some people\u2014corporations, governments are gaming the technology to hack human beings. Maybe the most important fact about living in the 21st century is that we are now hackable animals.<sup>2</sup></p> \n   <p>But this isn\'t some new thing. By adapting to the new touchstone, on a societal level, the technology bears no more threat than the novel television ad campaigns of the 1950\'s--Some viewers became brain-washed, but not all! So like Bebe Rexha teaches us: <i>No broken hearts in the club tonight, no tears in the club ... We only got one life so let\'s go hard until the day we die!"</i></p>\n  ';
  var blogcite4 = '\n  <p class="cite">https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/ <a target="_blank" href="https://www.wired.com/story/artificial-intelligence-yuval-noah-harari-tristan-harris/ "   target="_blank">\n  </a>\n  </p> \n  <p class="cite">https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/<a target="_blank" href="https://www.wired.com/story/our-minds-have-been-hijacked-by-our-phones-tristan-harris-wants-to-rescue-them/"   target="_blank">\n  </a>\n  </p>\n  ';
  var blogpost3 = '<p class="firstparagraph">\n  There was a time for Seinfeldian Coffee in Cars, when the company makes for the ride.  Today, the ride makes for the company, albeit by real-time Skype and real-time info-tainment. So if you have an extra $60,000 laying around, here\'s the future--this one by BMW ...</p>\n  <p class="quote">There\'s also a new reconfigurable digital gauge cluster that BMW calls Live Cockpit, and an impressively huge and crisp optional head-up display to relay even more information ... Being faced with all of those screens and all of those choices at once probably sounds daunting, but in my brief experience with iDrive 7, it all felt quite intuitive. The system smartly allows for the driver to use their preferred interface method, be that via touchscreen, steering wheel switchgear, cloud-based speech recognition or even gesture control. (A word about the latter: It\'s still overwhelmingly gimmicky. Twirling your finger in the air to turn up the stereo remains a crowd-pleasing novelty, but little more). <sup>1</sup></p>\n  <p></p>';
  var blogcite3 = '  <p class="cite">1\n  <a target="_blank" href="https://www.cnet.com/roadshow/reviews/2019-bmw-x5-preview/"   target="_blank">https://www.cnet.com/roadshow/reviews/2019-bmw-x5-preview/\n  </a>\n  </p>\n  ';

  var blogpost2 = '<p class="quote"><i>The wireless standard known as 4G has untethered us from our living rooms and offices, allowing us to navigate unfamiliar roads and streets using voice directions from Google Maps, stream movies on Netflix while commuting to work, and interview a prospective hire on FaceTime during a flight layover. The next iteration promises to be even more transformative, because it will support communication among objects, as well as people.  \n  </i><sup>1 </sup></p>\n  <p class="firstparagraph"> </p>\n  <img src="dist/img/5g4g.jpg" class="zoom" />\n  <p class="quote">\n  First, providers need a final set of technology standards. The global body setting them, the 3rd Generation Partnership Project, released the first 5G specifications in June; the next set of standards is due in 2020. (The 3GPP, a collaboration between seven telecommunications organizations, also set standards for 3G and 4G LTE mobile systems.) 5G mobile tests also need special handsets, transmission hardware and software and a system design that doesn\u2019t interfere with 4G and 3G networks. And governments need to set aside mobile spectrum space for 5G.</p>\n    ';
  var blogcite2 = '\n  <p class="cite">  <a target="_blank" href="https://www.bloomberg.com/news/articles/2017-02-16/tomorrow-s-cellular-networks-will-generate-3-5-trillion-in-economic-output"   target="_blank">https://www.bloomberg.com/news/articles/2017-02-16/tomorrow-s-cellular-networks-will-generate-3-5-trillion-in-economic-output\n  </a>\n  </p>\n    <p class="cite">  <a target="_blank" href="https://www.bloomberg.com/news/articles/2018-09-17/when-will-ultrafast-internet-come-to-your-phone-quicktake"   target="_blank">https://www.bloomberg.com/news/articles/2018-09-17/when-will-ultrafast-internet-come-to-your-phone-quicktake\n  </a>\n  </p>\n    ';

  var blogpost1 = '<p class="quote"><i>It\'s the next (fifth) generation of cellular technology which promises to greatly enhance the speed, coverage and responsiveness of wireless networks. How fast are we talking about? Think 10 to 100 times speedier than your typical cellular connection, and even faster than anything you can get with a physical fiber-optic cable going into your house.  \n  </i><sup>1 </sup></p>\n  <p class="firstparagraph">5G builds anticipation for the imminent tech revolution, but who\'s paying attention? What\'s the point besides incomparable speed? It\'s not speed, which is a sequential, yesterday term; Zero latency means everything all at once, coming and going: <i>Latency is the primary element that really ushers in the new age, where online, internet connection escapes from home and office nodes into the very links in between!</i>S That seems inconvenient and fleeting but really, shouldn\'t the web follow us in action, rather than chain us down? Consider the world of instantanous request-responses ....</p>\n  <p class="quote">\n  Latency is the response time between when you click on a link or start streaming a video on your phone, sending the request up to the network, and when the network responds and gives you your website or starts playing your video. \nThat lag time can last around 20 milliseconds with current networks. It doesn\'t seem like much, but with 5G, that latency gets reduced to 1 millisecond, or about the time it takes for a flash in a normal camera to finish.  \nThat responsiveness is critical for things like playing an intense video game in virtual reality or for a surgeon in New York to control a pair of robotic arms performing a procedure in San Francisco.</p><p>\nComcast yesterday and T-Mobile Tomorrow or not, the implications of a truly mobile internet couldn\'t be underestimated. What used to be a sensor is tomorrow\'s controller, and today\'s controllers become sensors, because source and target become irrelevant concepts when latency folds uni-directional wait-time into bi-directional concurrent communication. </p><p>Perhaps the central player in this revolution is the fast-developing internet-of-things infrastructure in full development--with a moving target ...</p>    ';
  var blogcite1 = '\n  <p class="cite">  <a target="_blank" href="https://www.cnet.com/how-to/the-5g-revolution-is-coming-heres-everything-you-need-to-know/"   target="_blank">https://www.cnet.com/how-to/the-5g-revolution-is-coming-heres-everything-you-need-to-know/\n  </a>\n  </p>\n    ';

  var url = [{
    id: '22',
    did: '10-25-18',
    date: 'October 25, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Data that goes up must Stay Up',
    post: blogpost22,
    blogcite: blogcite22
  }, {
    id: '21',
    did: '10-24-18',
    date: 'October 24, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Meta-Materials, Part II <br />One, Two, Three, Four--Nanophotonic Metamaterials and More',
    post: blogpost21,
    blogcite: blogcite21
  }, {
    id: '20',
    did: '10-23-18',
    date: 'October 23, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Meta-Materials, Part I <br />Material Science',
    post: blogpost20,
    blogcite: blogcite20
  }, {
    id: '19',
    did: '10-22-18',
    date: 'October 22, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Reverent Tim Cook:<br />A Modern American Data Privacy Hero',
    post: blogpost19,
    blogcite: blogcite19
  }, {
    id: '18',
    did: '10-20-18',
    date: 'October 20-21, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Image Data on a Diet',
    post: blogpost18,
    blogcite: blogcite18
  }, {
    id: '17',
    did: '10-19-18',
    date: 'October 19, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Machine Learning, By Trial and Error',
    post: blogpost17,
    blogcite: blogcite17
  }, {
    id: '16',
    did: '10-18-18',
    date: 'October 18, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Apple  Gossip, and Digital Hearsay About Snooping',
    post: blogpost16,
    blogcite: blogcite16
  }, {
    id: '15',
    did: '10-17-18',
    date: 'October 17, 2018 ',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Where\'s the Fiction Aisle?',
    post: blogpost15,
    blogcite: blogcite15
  }, {
    id: '14',
    did: '10-16-18',
    date: 'October 16, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The Better World that Tech Brings',
    post: blogpost14,
    blogcite: blogcite14
  }, {
    id: '13',
    did: '10-15-18',
    date: 'October 15, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Economic Prosperity, Democracy, and the Technology that Binds The Two',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',
    did: '10-13-18',
    date: 'October 13-14, 2018<br /><small>Weekend</small>',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Probabilistic Reality (and Information), Part II<br />Quantum Molecular Psychology',
    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',
    did: '10-12-18',
    date: 'October 12, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Probabilistic Reality (and Information), Part I<br /> Verifiably Determinated Once and For All',
    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: '10-11-18',
    date: 'October 11, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Economic Prosperity, Democracy, and the Technology that Binds The Two',
    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: '10-10-18',
    date: 'October 10, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Blockchain\'s Quiet Success',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: '10-09-18',
    date: 'October 9, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Intellectual Espionage: <br />Part II: When Does Fair Play for All Warrant a Foul to One?',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: '10-08-18',
    date: 'October 8, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Intellectual Espionage, Part I:<br />Small Chips',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: '10-06-18',
    date: 'October 6-7<br />Weekend, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Humane Technology: Is there a Goal Post?<br />Part III: Resisting Compartmentalization',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: '10-05-18',
    date: 'October 5, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Humane Technology: Is there a Goal Post?<br />Part II: Tech-based Social Capital',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: '10-04-18',
    date: 'October 4, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Humane Technology: Is there a Goal Post?<br />Part I: Churches, Education, and Technologies',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: '10-03-18',
    date: 'October 3, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Fast Cars and Faster Info',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: '10-02-18',
    date: 'October 2, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Fast 5G: Part II<br />The How and When',
    post: blogpost2,
    blogcite: blogcite2
  }, {
    id: '1',
    did: '10-01-18',
    date: 'October 1, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Fast 5G: Part I<br />The Why and What',
    post: blogpost1,
    blogcite: blogcite1
  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a target="_blank" href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-oct").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a target="_blank" href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-oct-mod").innerHTML += catMod;
  }
  console.log('blogger-oct');
  //console.log(angular.toJson(url)); 
};
bloggerOct();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerSep = function bloggerSep() {

  var blogpost25 = '<p class="paragraph">Web\'s foray into Internet of Things and the upcoming 5G revolution necessitates real-time processing.  Luckily, the dynamic yet slow language of the web, JavaScript now gets a super-speed boost from Web Assembly, a  much lower-level, binary language. Since Web Assembly only recognizes two floating point number types and two integer types, Rust handles string values, etc.</p> <p class="quote"><i>Both Rust and JavaScript have vibrant package ecosystems. Rust has cargo and crates.io. JavaScript has several CLI tools, including the npm CLI, that interface with the npm registry. In order for WebAssembly to be successful, we need these two systems to work well together, specifically:<br/><br/>\n\n  Rust developers should be able to produce WebAssembly packages for use in JavaScript without requiring a Node.js development environment\n  JavaScript developers should be able to use WebAssembly without requiring a Rust development environment\n  <br/><br/>\nEnter: wasm-pack. \nwasm-pack is a tool for assembling and packaging Rust crates that target WebAssembly. These packages can be published to the npm Registry and used alongside other packages. This means you can use them side-by-side with JS and other packages, and in many kind of applications, be it a Node.js server side app, a client-side application bundled by Webpack, or any other sort of application that uses npm dependencies. You can find wasm-pack on crates.io and GitHub.<sup>1 </sup></p>\n<p>Step-by-step, software advances in step-lock with hardware.';

  var blogcite25 = '\n  <p class="cite"> 1 <a href="https://hacks.mozilla.org/2018/04/hello-wasm-pack/"   target="_blank">https://hacks.mozilla.org/2018/04/hello-wasm-pack/\n  </a>\n  </p>  \n  ';

  var blogpost24 = ' \n  <p class="firstparagraph">Democracy, i.e., power of the people, is often expressed in the tools and resources available to everyone. Data visualization software is prohibitively expensive, and complicated, limiting access to universities and commerce. So, many important data stories are relegated to Excel bar charts. These days, the preeminent medium for graphical representation of data is free to all: <i><strong>Pandas</strong>, short for the  Econometrics term \'Panel Data\', that features paragraphs of statistical, programming language with spoken language, coupled with powerful data visualization:  </i> </p>\n    <p class="quote">\n    Millions of people around the world use Pandas. In October 2017 alone, Stack Overflow, a website for programmers, recorded 5 million visits to questions about Pandas from more than 1 million unique visitors. Data scientists at Google, Facebook, JP Morgan, and virtually every other major company that analyze data uses Pandas. Most people haven\u2019t heard of it, but for many people who do heavy data analysis\u2014a rapidly growing group these days\u2014life wouldn\u2019t be the same without it. (Pandas is open source, so it\u2019s free to use.)  <br /><br />Basically, Pandas makes it so that data analysis tasks that would have taken 50 complex lines of code in the past now only take 5 simple lines, because  [Pandas creator] McKinney already did the heavy lifting.  \n    <sup>1</sup></p>\n<p>      Data expression, at the end of the day, and across the land, is now an expression for all!</p>\n    \n    ';
  var blogcite24 = '\n  <p class="cite"> 1 <a href="https://qz.com/1126615/the-story-of-the-most-important-tool-in-data-science/"   target="_blank">https://qz.com/1126615/the-story-of-the-most-important-tool-in-data-science/\n  </a>\n  </p>\n  ';
  var blogpost23 = ' \n  <p class="firstparagraph">The College Term-Paper, the perennial object of dread or elation, of tedium or excitement. Yet, more and more, the needs for communication require the inclusion of programming, analytic language. Paragraphs of eloquently written code with paragraphs of synopsis, from one logical statement to the next, laying out the proofs with each paragraph. Best yet, it is innately online and presentable, and employs the powerful languages like Python and R. But how to communicate these specialized papers to a wide audience?</p>\n    <p class="quote"> \n    The more sophisticated science becomes, the harder it is to communicate results. Papers today are longer than ever and full of jargon and symbols. They depend on chains of computer programs that generate data, and clean up data, and plot data, and run statistical models on data. These programs tend to be both so sloppily written and so central to the results that it\u2019s contributed to a replication crisis, or put another way, a failure of the paper to perform its most basic task: to report what you\u2019ve actually discovered, clearly enough that someone else can discover it for themselves.<br /><br />\n    Perhaps the paper itself is to blame. Scientific methods evolve now at the speed of software; the skill most in demand among physicists, biologists, chemists, geologists, even anthropologists and research psychologists, is facility with programming languages and \u201Cdata science\u201D packages. And yet the basic means of communicating scientific results hasn\u2019t changed for 400 years. Papers may be posted online, but they\u2019re still text and pictures on a page.<sup>1</sup></p>\n    <p>Anaconda, the programming package bundle features math software with Spyder applications, yet the Jupyter notebook is already revolutionizing academic publications...';
  var blogcite23 = ' \n  <p class="cite"> 1 <a href="\n  https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/"   target="_blank">\n  https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/ \n  </a>\n  </p>  \n  <p class="cite"> 2 <a href="https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/"   target="_blank">https://qz.com/1416867/the-2018-nobel-prize-in-economics-goes-to-william-nordhaus-and-paul-romer/\n  </a>\n  </p>  \n     ';
  var blogpost20 = ' <p class="quote"> <br /><br />\n  </p>\n  ';
  var blogcite20 = '\n   \n  ';

  var blogpost19 = '<p class="firstparagraph">For every article and blog on the sci-fi imaginations of tech writers, real A.I. presents itself every so often as what it is essentially: a tool.<i> A multi-purpose toolset, tracing its algorithmic root to &Eacute;mile Durkheim\'s 1870s era classification science</i> of human epidiology using national population data from Paris. </p><p>\n  Earlier  Statisticians and Scientists, i.e. modern Developers and Engineers also took their generation\'s Information Technology, applying it toward human-driven purposes. </p>\n  <p>I\'m an optimist at heart, so this blog post stands out: </p><p class="quote">I\u2019d like to point out that the recipe isn\u2019t all that different from code that a programmer might have written by eyeballing the problem and manually making up some rules. Quit anthropomorphizing machine learning already. A model is conceptually the same kind of thing as regular code. You know, the kind of recipe that\u2019s handcrafted by some human armed with an opinion and a caffeine source.<br /><br />And don\u2019t go around saying that retraining\u200A\u2014\u200Ajargon for rerunning the algorithm to adjust the boundary as new examples are gathered\u200A\u2014\u200Amakes it creature-like or inherently different from your programmer\u2019s standard work product. Humans can sit there tweaking the code in response to new info too. <sup>1</sup>\n  </p>\n  <p> Now, A.I. that is attached to robototics? That is an entirely different story, and more akin to another technology, gun weapon proliferation and advancement. Apples and Oranges: Two completely different timelines and analogies that only imaginatively relate according to Hollywood-esque journalists that can assume malevalent intent from a tool, whether a utensil, a car, or an algorithm. \n    </p>\n  ';
  var blogcite19 = '\n  <p class="cite">1. <a href="https://hackernoon.com/machine-learning-is-the-emperor-wearing-clothes-59933d12a3cc">https://hackernoon.com/machine-learning-is-the-emperor-wearing-clothes-59933d12a3cc</a></p>\n  ';
  var blogpost18 = '<p>The 2000\'s Silicon Valley-led boom and bust resulted from overspeculation. The crypto-phenomenon moreso resembles the derivatives packages from the 2007-8 recession bust because value was placed on real estate\'s miscalculated worth based on the assumption the homeowners didn\'t borrow over their income. Likewise crypto-ICO\'s values wasn\'t based on a currency comprised of real cash, but <i> rather, ICO\'s and crypto-platforms were investments of crypto-currency!</i>So, if the one does well, the other continues to do well, multiplied. But exponential gain also means logarithmic loss ...\n   <p class="quote"> There has been a collapse in the number of ICOs that have tried to raise financing.\n\n  This has been driven by a number of factors including uncertainty around regulation, falling crypto market prices and of course, disillusionment in the previous ICOs that raised funding.    Given that the Ethereum blockchain was the premier platform for ICOs to raise their funding, it is feeling the brunt of this slowdown.<br /><br />\n  \n  Not only is this lack of \u201CICO demand\u201D for ETH having an adverse effect on the price but the previous ICOs are also driving the price lower as they try to convert their ETH into Fiat currency to meet expenses.<sup>1</sup>  </p>\n  <p>Notwithstanding, <i> We can also are miscalculating about crypto-platforms\'   center of value  ... it\'s   about the upcoming actual and inevitable practicality for everyday uses.</i> So, three cheers to a long, slow ramp--to another  great  and lasting crypto-currency resurgence!</p>.0\n\n  ';
  var blogcite18 = '\n  <p class="cite">1. <a href="https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains">https://usethebitcoin.com/the-fall-of-the-ico-impacting-eth-price/</a></p>\n  ';

  var blogpost17 = ' \n<p class="firstparagraph">Regulation of crypto-currencies remains the bane of wider acceptance--while it <i>also shores up trust among fintech instiutions, toward a more certain future. </p>\n  <p class="quote"> The move upwards, which occurred over several hours, came as news broke that U.S. regulators had again postponed their decision on the VanEck/SolidX Bitcoin exchange-traded fund (ETF), but had not rejected it outright.\n<br /><br />\n  At press time, BTC/USD was trading around $6,707 an increase of about 5 percent on the day, taking prices back to the range they hovered in during mid-August. In altcoin markets, Ethereum\u2019s (ETH) reversal of fortunes continued after weeks of beating Bitcoin on losses. Prices at press time for ETH/USD hit $225, also a first since September 7, having fallen as low as $171 in the meantime.<sup>1</sup>\n  </p><p>\n  Imagine if a bank had staked pension portfolio\'s the value of Ether last fall. <i>That</i> would have been a Winter of Discontent value precipitously plummeted by April.</p>\n  ';
  var blogcite17 = '\n  <p class="cite">1. <a href="https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains">https://cointelegraph.com/news/cryptocurrency-markets-continue-resurgence-as-ripple-claims-68-percent-weekly-gains</a></p>\n  ';
  var blogpost16 = ' <p class="firstparagraph">Altering Market States and technology-advancement forces introspection among crypto-currency hubs.</p>\n  <p class="quote"> According to a local report, as a result of a security breach on September 14, hackers managed to steal 4.5 billion yen from users\' hot wallets, as well as 2.2 billion yen from the assets of the company, with total losses amounting to 6.7 billion yen or around $59.7 million.\n<br />\n  Tech Bureau Inc, which operated Zaif, stated in press release that the exchange detected a server error on September 17, after which Zaif suspended deposits and withdrawals. On September 18, the exchange realized that the error was a hack, and reported the incident to the Japanese financial regulator, the Financial Services Agency (FSA). Hackers stole 5,966 bitcoins (BTC) in addition to some Bitcoin Cash (BCH) and MonaCoin (MONA).<sup>1</sup> \n  </p><p>Fintech regulations have been long in coming, but a thorough SEC-pushed security overhaul could at least dispell fears about what amounts to bank robberies.</p>\n  </p>\n  ';
  var blogcite16 = '\n  <p class="cite">1. <a href="https://cointelegraph.com/news/japanese-cryptocurrency-exchange-hacked-59-million-in-losses-reported">https://cointelegraph.com/news/japanese-cryptocurrency-exchange-hacked-59-million-in-losses-reported</a></p>\n  ';
  var blogpost15 = '<p class="firstparagraph">Crypto-currency dealers, developers and owners should welcome more regulation, scrupulous examination from financial authorities...the value of trust far outweighs the value of speed to market.</p>\n  <p class="quote"> The recent report examines the practices of ten crypto trading platforms based in the U.S. and abroad, as well data collected by the Attorney General\u2019s office about the state of digital currency markets as a whole.<br /><br />\n\n  The study found that the absence of accepted methods for auditing virtual assets results in the lack of a consistent and transparent approach to independently auditing digital currency traded on exchanges. This puts customers\u2019 funds held on their exchange accounts at risk of attacks from hackers or theft. The report subsequently questions the issue of public protection and the sufficiency of the commercial insurance to cover possible losses.<br /><br />\n  \n  The report further outlines abusive trading practices, emphasizing that the majority of crypto trading platforms deploy automated traders, offering them special conditions, which leaves retail customers at a disadvantage. It also states that digital currency exchanges involve numerous, overlapping lines of business that represent serious conflicts of interest. The report explains:\n  <br /><br />\n  \u201CAutomated trading activities could also allow a single trader or group of traders to command multiple accounts simultaneously to obscure coordinated trading, in order to manipulate prices.\u201D<sup>1</sup>\n  </p><p>So, whether before or after breeches of trust, that are inevitable on digital platforms, wouldn\'t you prefer SEC scrutiny along with its guarantees?\n  ';
  var blogcite15 = '\n  <p class="cite">1. <a href="https://cointelegraph.com/news/new-york-attorney-general-report-says-crypto-exchanges-are-at-risk-of-manipulation"> https://cointelegraph.com/news/new-york-attorney-general-report-says-crypto-exchanges-are-at-risk-of-manipulation</a></p>\n  ';
  var blogpost14 = '<p class="firstparagraph">Security of a network can be measured by the degree of carefulness from any node on a network. Likewise, bridging, central hubs can work to bottle-neck the spread of network dangers...  </p>\n  <p class="quote"> As an international data hub and digital entry point to Europe, the Netherlands plays an important role when it comes to tackling these threats and optimally guaranteeing the cybersecurity of our critical infrastructure.\n\n  Saskia Bruines, Deputy Mayor for Education, Knowledge Economy and International Affairs in the Municipality of The Hague:<br /><br />\n  \n  "Technological developments are continuing apace and the current shortage of talent will increase if we fail to take action as a society. For that reason, public authorities, educational institutions and businesses need to join forces to train, attract and retain more talent. That is why it is important to teach children digital skills from an early age. From primary school to university, educating cybertalent has to be high on the agenda. We want everyone to participate so we can all work together to create a safe society."<sup>1</sup>\n  </p>\n  <p>Whether or not the security hole is breeched is immaterial--what counts is loss mitigation and insurance!</p>\n  ';
  var blogcite14 = '\n  <p class="cite">1. <a href="https://www.benzinga.com/pressreleases/18/09/r12366605/cyber-security-week-together-we-secure-the-future-2-5-october-2018-the">https://www.benzinga.com/pressreleases/18/09/r12366605/cyber-security-week-together-we-secure-the-future-2-5-october-2018-the</a></p>\n  ';
  var blogpost13 = '\n \n  <p class="firstparagraph">Paris, as a City foremost, has led global discussion and awareness on climate-change related action. Paris\' smog-dispelling culture presents itself as <i>The City at the center of action</i> with respect to global, macro-level problems. Why the city? It only makes sense that collective action and mobilization requires the correct ratio of community leaders and actors to engage enough social momentum to overcome apathy. </p>\n  <p class="quote">This year, the ban on motorized traffic will apply to the whole of Paris, except for the Bois (woods) and the p\xE9riph\xE9rique (inner ring road). \n  The Parisians themselves will not be able to drive their own vehicle, including electric vehicles, \'clean\' energy vehicles, and Autolib vehicles.<br /><br />\n  \n  The following vehicles will be allowed to circulate, at a maximum of 30 km/h: non-motorized vehicles, emergency vehicles, vehicles for disabled people, taxis, public transport, BigBus and Open Tour, and VTC (the latter (private hire taxis) were not allowed to circulate last year). There are also numerous alternative modes of transport - bicycle, horse & carriage, cyclopolitain (pedicabs) \u2026 <sup>1</sup>\n  </p>\n    <p>On a national-level, action is highly effective but practically impossible, while the community-level can hardly muster the type of leverage to influence other communities. <i> The city, often composed of multiple millions and spanning larger geographies, resembles the powerful cities that governed nation-states from the middle ages forward.</i> Examples include 16th century Florence, 17th century Istanbul, 18th century Paris, and 19th century London--not to mention the first global city-state power, Rome. In terms of collection action, this historical nuance of the city takes a new role:    \n  </p>\n  <p class="quote">Last week at the Global Climate Action Summit, many of the best minds the human species can muster gathered to right the course.\n\n  These people included but were not limited to: environmentalists, mayors from around the world, human rights activists, technologists, academics, business leaders, labor leaders, and former secretaries of state. The kinds of folks with noble pursuits. This was climate change activism without borders. If the Paris Agreement, drafted in 2015, was about governments coming together to fight, last week\u2019s event showed that the most ambitious climate action isn\u2019t happening on the national scale\u2014it\u2019s cities and states that are leading the way.<sup>2</sup></p>\n  <p>Granted, the city is the center of climate-change peril and so it is only natural they are the first to act, and are the defacto center of action ... and hope.</p>\n';
  var blogcite13 = '\n\n  <p class="cite">1. <a href="https://en.convention.parisinfo.com/travel-trade/car-free-day-paris">\n  https://en.convention.parisinfo.com/travel-trade/car-free-day-paris</a></p>\n    <p class="cite">2<a href="https://www.wired.com/story/at-the-edge-of-the-world-facing-the-end-of-the-world/">\n    https://www.wired.com/story/at-the-edge-of-the-world-facing-the-end-of-the-world/</a></p>\n  ';
  var blogpost12 = '<p class="firstparagraph">Los Angeles\' technological centality has always been overshadowed by Silicon Valley and Seattle; however, Santa Monica\'s trendy tech hub has begun to make a name for itself with respect to one <strong>hugely important sector: climate-change related technology</strong>.     <p class="quote"> This week, Los Angeles mayor Eric Garcetti joined other leaders, along with activists and business leaders, at the Global Climate Action Summit in San Francisco. The mission? Stop climate change before it destroys the planet, and our species along with it.\n  <br /><br />\n    But the city is in the midst of a metamorphosis. With fewer, yet stronger storms on the horizon, it\u2019s begun an ambitious plan to cut its reliance on imported water in half by 2025. And it\u2019s emerging as a leader in the frantic international quest to curb emissions\u2014in 2016 alone, it slashed emissions by 11 percent, the equivalent of taking more than 700,000 cars off the road.\n    <br /><br />\n    We generated 30,000 new green jobs since I\'ve been mayor, so in five years. To put that in perspective, there\'s 50,000 coal jobs left in America. So this town that\u2019s just 1 percent, roughly, of the US population has created the equivalent of 60 percent of the remaining coal jobs left in America. Appalachia should be doing that, areas that have been hard hit by a recession and not recovered. These are generally good middle class jobs too, not just minimum wage.<sup>1</sup>\n    </p>\n    <p>The expanse of L.A.\'s reach, now touching San Diego, makes climate-friendly commuting a top issue: The two are agglomerating into one city after all, neatly and merely divided by Camp Pendleton. Now, about that ever-elusive high-speed rail system connecting the two ... ';
  var blogcite12 = '\n  <p class="cite">1. <a href="https://www.wired.com/story/how-los-angeles-is-helping-lead-the-fight-against-climate-change/">https://www.wired.com/story/how-los-angeles-is-helping-lead-the-fight-against-climate-change/</a></p>\n   ';
  var blogpost11 = ' <p class="firstparagraph">World Economic Forum, most notable for its annual convocation of world leaders, works around the clock, with no shortage of resources for socio-economic research:\n  </p> <p class="quote"> As technological breakthroughs rapidly shift the frontier between the work tasks performed by humans and those performed by machines and algorithms, global labour markets are likely to undergo major transformations. These transformations, if managed wisely, could lead to a new age of good work, good jobs and improved quality of life for all, but if managed poorly, pose the risk of widening skills gaps, greater inequality and broader polarization. In many ways, the time to shape the future of work is now. The Future of Jobs report provides tools which can support responses to the critical questions confronting businesses, governments and workers in the horizon up to 2022.<sup>1</sup>\n  </p>\n  <p>One clear take-away from the report features the urgent short-term need to responsibily fill vast holes in the labor market:</p>\n  <p class="quote">Machines Will Do More Tasks Than Humans by 2025 but Robot Revolution Will Still Create 58 Million Net New Jobs in Next Five Years:<br /><br />\n  <ul><li>\n  Latest research from the World Economic Forum forecasts that by 2025, machines will perform more current work tasks than humans, compared to 71% being performed by humans today.</li>\n  <li>\n  The rapid evolution of machines and algorithms in the workplace could create 133 million new roles in place of 75 million that will be displaced between now and 2022</li><li>\n  Urgent challenges include providing reskilling opportunities, enabling remote work and building safety nets to protect at-risk workers and communities\n  </li>\n  </ul>\n  </p>\n  <p><strong>... to which I say, <i>H.R. Managers of the World: Unite!</i></strong></p>\n  ';
  var blogcite11 = ' \n  <p class="cite">1. <a href="http://reports.weforum.org/future-of-jobs-2018/">http://reports.weforum.org/future-of-jobs-2018/</a></p>\n  \n  <p class="cite">PDF Download<br /><a href="http://www3.weforum.org/docs/WEF_Future_of_Jobs_2018.pdf">http://www3.weforum.org/docs/WEF_Future_of_Jobs_2018.pdf</a></p>\n  ';
  var blogpost10 = '<p class="firstparagraph">\n  Invisible upgrades are the true talking points of new mobile device  releases as they hint big things under the hood... Last year\'s iPhone X may have been alot of hardware show (with the X/8/8plus providing the first A.I.-dedicated chip), but 2018 augurs big things ahead and bigger muscle:\n  <p class="quote">\n  On Wednesday Apple announced that the neural engine is now significantly more powerful. Last year\u2019s debut model could crank through 600 billion operations per second. The new version can work almost 10 times faster, reaching 5 trillion operations per second. Some of that speedup may come from using smaller transistors inside the A12, with features as small as 7 nanometers.<sup>1</sup>\n  </p>\n  <p>So, just as Apple tends to future-proof its technology, this year\'s release does not disappoint the constellation of iOS developers that can take advantage of the tech, with  better battery efficiency ...</p>\n  <p class="quote">App developers can play with the power of Apple\u2019s new neural engine through Core ML, a framework the company offers to help programmers deploy machine learning on Apple devices. The company says that this allows developers to run machine learning code nine times faster than on the iPhone X, while using a tenth of the energy.<sup>1</sup>\n  </p>\n  <p>Thanks to Apple\'s commitment to A.I., the iPhone Xs,   Xs Max, and   Xr offer all the joys of smart video/camera, processing, augmented reality, --<i>and with battery <strong>savings?</strong>   Ooh L&aacute; L&aacute;!</i>\n\n  ';
  var blogcite10 = '\n  <p class="cite">1. <a href="https://www.wired.com/story/apples-latest-iphones-packed-with-ai-smarts"> https://www.wired.com/story/apples-latest-iphones-packed-with-ai-smarts</a></p>\n  ';
  var blogpost9 = '<p class="firstparagraph">International hubs of technical specializations--from haptic touchscreens to battery tech--implicates global cooperation--beyond merely rare metals and resources. \n  </p>\n  <p class="quote"> Last week, dozens of manufacturing companies testified before US Trade Representatives about how Trump\'s next round of duties against China could affect them. Some showed concerns of layoffs for American people and harm to US economic interests.<sup>1</sup>\n  </p>\n  <p>Global Tech presuppposes global trading cooperation primarily because of rare metals. But more importantly, fabrication specialties growing up in foreign <i>Research Parks</i>.  And, entreched technological specializations are a function of the depth of itemized specializations that sprout around universities and public/privately funded research parks, coupled with the technical workforce to put glass to screen.</p>\n  <p class="quote">Even if every part was made in the US, an iPhone would cost about $100 more, Kakaes concluded, assuming raw materials were still purchased on global markets.<br /><br />\n\n  The issue is not so much cost of putting an iPhone together, or even the cost per part on paper. The issue is skill, scale, expertise, and infrastructure \u2014 all of which require money, time and long-term investment. Unlike other manufacturing jobs that have migrated from the United States, Apple wouldn\u2019t be bringing them \u201Cback\u201D so much as starting from scratch. The cost would come in attempting to build a system that\u2019s never been in the US, but has been built over decades abroad.<sup>2</sup>\n  </p><p>So, at the end of the day, we can only hope that foreign tech resources along with associated human/social capital would just be left alone from economic tiffs ... Periodic table of rare metals and precious elements aside, the true gems are the diverse people!    \n  ';
  var blogcite9 = '\n  <p class="cite">1._<a href="https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247">https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247</a></p>\n  <p class="cite">2._<a href="https://www.vox.com/technology/2018/9/13/17851052/apple-iphone-price-china-trump-us-trade"> https://www.vox.com/technology/2018/9/13/17851052/apple-iphone-price-china-trump-us-trade</a></p>\n  ';
  var blogpost8 = '\n  <p class="firstparagraph">Vitalik Buterin, architect of Ethereum crypto-contract/currency, presented at the recent TechCrunch Disrupt! conference with no shortage of opinions on the direction of blockchain and crypto-currency/contract investments... This, after the Ethereum (WEI) declines nearly ten-fold along with Bitcoin\'s 70% drop<sup>1</sup>, along with other major crypto-currencies. </p>\n  <p>The story is less dramatic and mysterious than it is simply the natural course of market novelties\' <i>transition from Early Adapters to General Acceptance</i>: The underlying value transitions from increasing public awareness to mainstream acceptance, which requires new, ensuing <i>expectations that differ from the previous period</i>. The substance of perceived value dictates actual value. Buterin opines to Bloomberg News...\n    <p class="quote"> \n     The blockchain space is getting to the point where there\u2019s a ceiling in sight. If you talk to the average educated person at this point, they probably have heard of blockchain at least once. There isn\u2019t an opportunity for yet another 1,000-times growth in anything in the space anymore ... Growth in Bitcoin and other cryptocurrencies in the blockchain community through its first six or seven years was dependent on marketing and trying to get wider adoption. <br /><br /> \nThat strategy is getting close to hitting a dead end.  The next step will be getting people who are already interested in cryptocurrencies to be involved in a more in-depth way. "Go from just people being interested to real applications of real economic activity" [Buterin] said.  <sup>2</sup></p> \n    <img src="dist/img/diffusion.jpg" class="zoom" />\n    <p>So, the old expectations generated a very low bar to prove actual utility, whereas present-day collective knowledge demands clearer practical proof; inherently the bar is raised. And now, by technical sweat of the brow, crypto-based fintech now faces the realities of what will be needed for wide-spread use: technical solutions to scalability problems, security issues, and of course speed, availability and consistency of data transfer. Yet, now more importantly, ease-of-mainstream-use. </p>\n    <p>For example, Ethereum contract writers must learn a new language, Solidity; and Ethereum currency holders must grapple with browser-to-ledger interfaces like MetaMask, which are far from intuitive for even the most enthusiastic of early adopters!  </p>\n    <p> This concept is laid bare in sociological terms, citing Rogers and Shumacher\'s 1971 article from my Feb. 15 post: the general sociological Early Adopter theory--based on Everett M. Rogers\' Diffusion of Innovations theory, describing the timeline of the Innovation Adoption Lifecycle as fairly ordinary, or better stated, fairly historical--again repeating itself.<sup>3</sup> </p>\n    ';
  var blogcite8 = ' \n    \n    <p class="cite">1. <a href="https://markets.businessinsider.com/currencies/btc-usd"   target="_blank">https://markets.businessinsider.com/currencies/btc-usd\n    </a>\n    </p> \n    <p class="cite">2. <a href="https://www.bloomberg.com/news/articles/2018-09-08/crypto-growth-nears-ceiling-ethereum-co-founder-buterin-says?utm_campaign=socialflow-organic&utm_medium=social&cmpid=socialflow-twitter-business&utm_content=business&utm_source=twitter"   target="_blank">https://www.bloomberg.com/news/articles/2018-09-08/crypto-growth-nears-ceiling-ethereum-co-founder-buterin-says\n    </a>\n    </p>  <p class="cite">3. <a href="https://eric.ed.gov/?id=ED065999"   target="_blank">Rogers, E. M., & Shoemaker, F. F. (1971). Communication of Innovations; A Cross-Cultural Approach.\n    </a>\n    </p> \n     ';

  var blogpost7 = '<p class="firstparagraph">Crypto-Millionaires one day, Crypto-Middle-class the next.  Crypto-currencies in all forms have sustained a 9-month decline, which most could not have anticipated.  Take for instance, December 2017\'s $1500 Ether value to recent values of $185<sup>1</sup>, and Bitcoin\'s November 2017 valuation of just under $20,000 on the CoinDesk Bitcoin Price Index (BPI) down to this week\'s $6,400.  </p>\n     \n     <img src="dist/img/cryptocurrency.jpg" class="zoom" />\n     <p>The theories are multi-fold:</p>\n     <p class="quote">Some have posited that blockchain and cryptocurrency projects might be converting their ether reserves into fiat currencies to meet financial obligations. At face value, this appears plausible, as startups incur many expenses during their growth phase. If a collection of companies liquidated the cryptocurrencies\u2014mostly ether\u2014that they raised in ICOs at the same time, they could exert downward pressure on prices.<sup>2</sup></p>\n       <p>Others blame investment psychology ... </p> \n       <p class="quote">It\u2019s possible that the price decline reflects a negative feedback loop, a combination of economics and psychology. As crypto investors sell their holdings, they see that prices are falling. This could spook them into selling even more. This is somewhat like a bank run, except investors lose faith in the value of cryptocurrencies rather than the viability of a financial institution.<sup>2</sup>\n       </p>\n       <p>Others still, they blame ease-of-use and accesibility ... </p>\n       <p class="quote">Cryptocurrency investors (and especially ethereum backers) may be disappointed (paywall) by the low usage of decentralized applications (dapps) like IDEX, Bancor, and CryptoKitties. These apps run on crypto tokens, and thus generate demand for the assets.\n<br /><br />\n       But when investors visit a cryptocurrency exchange, they aren\u2019t presented with information about the daily active users on various dapps. They\u2019re generally only presented with the price of an asset and a chart of its history.<sup>2</sup>\n       </p>\n       <p>However one distributes the blame, psychological and economic explanations only fail where sociological explanations offer coherent explanations ... Look no further than my September 10th post ...\n       </p>\n       ';
  var blogcite7 = '\n    \n     <p class="cite">1. <a href="https://markets.businessinsider.com/currencies/btc-usd"   target="_blank">https://markets.businessinsider.com/currencies/btc-usd\n     </a>\n     </p> \n     <p class="cite">2. <a href="https://qz.com/1355945/why-have-cryptocurrencies-like-bitcoin-and-ethereum-fallen-so-much/"   target="_blank">https://qz.com/1355945/why-have-cryptocurrencies-like-bitcoin-and-ethereum-fallen-so-much/\n     </a>\n     </p>   <p class="cite">2. <a href="https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/"   target="_blank">https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/\n     </a>\n     </p> https://qz.com/1349207/wall-streets-interest-in-bitcoin-like-ices-bakkt-isnt-boosting-crypto-prices/\n        ';

  var blogpost6 = '\n     <p class="firstparagraph">Quantum solutions to computing needs become clearer, and specific uses for research come to light. First and foremost, quantum mechanics offer a realm of solutions that has ever eluded modern science: problem-solving algorithms that face orders of complexity of 40 to 50 orders of magnitude, i.e. Complexity<sup>50</sup> is just a tad too complex for the fast, but straight-line dumb A.I.-based solutions, which are inherent to classificatory machine-learning schema. Blockchain and Directed Acyclic Graphs are less helpful, but find their utility in the unescapably fast ability to <i>share data where data is needed</i><br /><br /></p>\n     Manipulations of the quantum realm are not at all intuitive to concepts we learn from the classical world. Less intuitive are the constraints of the data analysis. For example, the quantum metaphor of flipping two coins simultaneously means knowing the "state" of one coin if you know the other coin\'s state. The one lands on heads, and because it shares an entangled state with the other, <i>you are guaranteed to know the outcome of the second coin</i>. </p>\n     <img src="dist/img/quantumScience.jpg"  class="zoom" />\n     <p>Image credit: TechCrunch Disrupt! Day 3</p>\n     <p>Superconducting devices offer powerful tooling, yet <i>the catch is that the time you have to run calculations is approximately 50 micro-seconds</i>, i.e. the <strong>coherence time of entangled, superposed state</strong>. (a marked improvement from 1990\'s hardware that yielded coherence time of 1 nano-second). Not exactly enough time to run a long program, especially if you consider just one small algorithm is a series of logical gates that depend sequentially on other logical gates..., let alone an actual program. So then what\'s the use? The specific uses in academic research are without limit for those problems that present specific, exponential complexity--many cases in biotech, chemistry, and so on. Quantum computing offers a \'burst\' of calculations, and nothing more, at least for now. </p>\n     <img src="dist/img/quant-python.jpg" class="zoom" />\n     <img src="dist/img/quant-python2.jpg" class="zoom" />\n     <p>This short python-language program demonstrates quantum manipulation to machine-learning classification distinguishing a dog from a cat</p>\n     <p>Image credit: TechCrunch Disrupt! Day 3</p>\n     \n     <p>Not to be underestimated, quantum calculations operate best when modeling the laws of nature--because nature obeys quantum mechanical rules, beginning with chemistry. After all, quantum analysis simulated the largest molecule last year--and that\'s no small matter!  </p>\n       ';
  var blogcite6 = ' \n       <p class="cite">  TechCrunch Disrupt! Day 3 \n       </p>\n        ';
  var blogpost5 = '\n  <p class="firstparagraph">Machine learning\'s hey-day not only blossoms, but overtakes many areas of computing solutions if anything else but for the sheer ease of unloading mundane computing tasks. But the most widespread problem is that of non-A.I., non-machine-learning that masquerade as A.I., but are only complex looping algorithms. Much ado about nothing has been the death-knell for more than a few of the Startup Battlefield\'s contenders. <i>Disrupt\'s merciless premises abruptly dash dreams, but I guess that\'s what a public and publicized forum for Peer Review is all about!</i><br /> <br />... to be continued. </p> \n    ';
  var blogcite5 = ' \n    <p class="cite">   TechCrunch Disrupt! Day 3 \n    </p>\n     ';
  var blogpost4 = '<p class="firstparagraph"><br /> <br />  </p>\n  <p class="quote"> <sup>1</sup></p>\n  <p> </p> ';
  var blogcite4 = '\n  <p class="cite">  <a href=""   target="_blank">\n  </a>\n  </p>\n     ';
  var blogpost3 = '<p class="firstparagraph">Browser URLs are the constant of the web\'s evolutions over the years. After all, they are the solid, predictable workhorse for transporting web surfers\' requests and web servers\' responses. But could there be improvements even with this, beyond the HTTPS\' security upgrade? Wired reports: </p>\n  <p class="quote">Chrome looks ahead to its next 10 years, the team is mulling its most controversial initiative yet: fundamentally rethinking URLs across the web.\n<br /><br />\n  Uniform Resource Locators are the familiar web addresses you use every day. They are listed in the web\'s DNS address book and direct browsers to the right Internet Protocol addresses that identify and differentiate web servers. <br /><br />\n  As web functionality has expanded, URLs have increasingly become unintelligible strings of gibberish combining components from third-parties or being masked by link shorteners and redirect schemes. And on mobile devices there isn\'t room to display much of a URL at all.  The resulting opacity has been a boon for cyber criminals who build malicious sites to exploit the confusion.\n  <br /><br />\n  The focus right now, they say, is on identifying all the ways people use URLs to try to find an alternative that will enhance security and identity integrity on the web while also adding convenience for everyday tasks like sharing links on mobile devices.<sup>1</sup></p>\n  <p>Bring it on, Google, and save us from the increasing flood of &;@# ampersands &% and excessive #_&% URL parameters that grow longer and longer ... and longer ... but how?</p> ';
  var blogcite3 = '\n  <p class="cite">1 <a href="https://www.wired.com/story/google-wants-to-kill-the-url/"   target="_blank">https://www.wired.com/story/google-wants-to-kill-the-url/\n  </a>\n  </p>\n  ';
  var blogpost2 = '<p class="firstparagraph"> </p>\n  <p class="quote"> <sup>1</sup></p>\n  <p> </p>';
  var blogcite2 = '\n  <p class="cite"> <a href=""   target="_blank">\n  </a>\n  </p>\n  ';

  var blogpost1 = '<p class="quote"><i>At first the computer drew a blank; seconds later, it decided it was dealing with another car, expecting it to drive away and require no special action. Only at the last second was a clear identification found \u2013 a woman with a bike, shopping bags hanging confusingly from handlebars, doubtless assuming the Volvo would route around her as any ordinary vehicle would. Barred from taking evasive action on its own, the computer abruptly handed control back to its human master, but the master wasn\u2019t paying attention. Elaine Herzberg, aged 49, was struck and killed, leaving more reflective members of the tech community with two uncomfortable questions: was this algorithmic tragedy inevitable? And how used to such incidents would we, should we, be prepared to get?</i><sup>1 </sup></p>\n  <p class="firstparagraph">Mistakes in code are a given. But not inevitable, with less haste, more testing, and more corrective reduncencies. This however is not the trend:</p>\n  <p class="quote">\u201CIn some ways we\u2019ve lost agency. When programs pass into code and code passes into algorithms and then algorithms start to create new algorithms, it gets farther and farther from human agency. Software is released into a code universe which no one can fully understand.\u201D<sup> </sup></p>\n  <p></p>\n    ';
  var blogcite1 = '\n  <p class="cite">  <a href="https://www.theguardian.com/technology/2018/aug/29/coding-algorithms-frankenalgos-program-danger"   target="_blank">https://www.theguardian.com/technology/2018/aug/29/coding-algorithms-frankenalgos-program-danger\n  </a>\n  </p>\n    ';

  var url = [{
    id: '25',
    did: '9-29-18',
    date: 'September 29th, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Real-Time, 21st Web-Apps\'s',
    post: blogpost25,
    blogcite: blogcite25
  }, {
    id: '24',
    did: '9-28-18',
    date: 'September 28th, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Open Source Democracy: Part II <br />Data Visualization for All',
    post: blogpost24,
    blogcite: blogcite24
  }, {
    id: '23',
    did: '9-27-18',
    date: 'September 27th, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Open Source Democracy: Part I <br />The Primacy of the Jupyter Notebook',
    post: blogpost23,
    blogcite: blogcite23
  }, {
    id: "20",
    did: "09-24-18",
    date: "September 24, 2018",
    author: "Thomas Maestas",
    cat3: "A.I.Now.",
    title: "Sociology Tomorrow!",
    post: blogpost20,
    blogcite: blogcite20
  }, {
    id: "19",
    did: "09-22-18",
    date: "September 22-23, 2018 ",
    author: "Thomas Maestas",
    cat3: "A.I.Now.",
    title: "A.I. Personalities: Techanthropormorphism Misgivings",
    post: blogpost19,
    blogcite: blogcite19
  }, {
    id: '18',
    did: '09-21-18',
    date: 'September 21, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'On the Other Side of the Coin: Part IV<br />Democratized Markets',
    post: blogpost18,
    blogcite: blogcite18
  }, {
    id: '17',
    did: '09-20-18',
    date: 'September 20, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'On the Other Side of the Coin: Part III<br />The Long, Resurgent Road Forward',
    post: blogpost17,
    blogcite: blogcite17
  }, {
    id: '16',
    did: '09-19-18',
    date: 'September 19, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'On the Other Side of the Coin: Part II<br />Altering Crypto-Market States from Technology Advancements Help Determine the Wide Crypto-Currency Variances between Ripple Coin, Bitcoin, and Ethereum',
    post: blogpost16,
    blogcite: blogcite16
  }, {
    id: '15',
    did: '09-18-18',
    date: 'September 18, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'On the Other Side of the Coin: Part I<br />SEC Concerns About the Top Three Crypto-Currencies',
    post: blogpost15,
    blogcite: blogcite15
  }, {
    id: '14',
    did: '09-17-18',
    date: 'September 17, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Den Haague Security',
    post: blogpost14,
    blogcite: blogcite14
  }, {
    id: '13',
    did: '09-15-18',
    date: 'September 15-16, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The End of Traffic Jams, Part II: <br />A Car-Free Paris',
    post: blogpost13,
    blogcite: blogcite13
  }, {
    id: '12',
    did: '09-14-18',
    date: 'September 14, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The End of Traffic Jams, Part I: <br />A Green Los Angeles',
    post: blogpost12,
    blogcite: blogcite12
  }, {
    id: '11',
    did: '09-13-18',
    date: 'September 13, 2018',
    author: ' ',
    cat3: ' ',
    title: ' ',
    post: blogpost11,
    blogcite: blogcite11
  }, {
    id: '10',
    did: '09-12-18',
    date: 'September 12, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Apple\'s New A12 Chip with A.I. Neural Engine:<br /> Ooh L&aacute; L&aacute;!',
    post: blogpost10,
    blogcite: blogcite10
  }, {
    id: '9',
    did: '09-11-18',
    date: 'September 11, 2018',
    author: 'Thomas Maestas',
    cat3: ' ',
    title: ' ',
    post: blogpost9,
    blogcite: blogcite9
  }, {
    id: '8',
    did: '09-10-18',
    date: 'September 10, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Where Did All the Crypto-Cash Go? Part II:<br />Expectations of Speculation',
    post: blogpost8,
    blogcite: blogcite8
  }, {
    id: '7',
    did: '09-08-18',
    date: 'September 8-9, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Where Did All the Crypto-Cash Go? Part I:<br />Why the Long Crash ...',
    post: blogpost7,
    blogcite: blogcite7
  }, {
    id: '6',
    did: '09-07-18',
    date: 'September 7, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Quantum Data',
    title: 'Reports from TechCrunch Disrupt! Part III<br />Quanta',
    post: blogpost6,
    blogcite: blogcite6
  }, {
    id: '5',
    did: '09-06-18',
    date: 'September 6, 2018',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now',
    title: 'Reports from TechCrunch Disrupt! Part II<br />Artificial Intelligence',
    post: blogpost5,
    blogcite: blogcite5
  }, {
    id: '4',
    did: '09-05-18',
    date: 'September 5, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Reports from TechCrunch Disrupt! Part I<br />Blockchain',
    post: blogpost4,
    blogcite: blogcite4
  }, {
    id: '3',
    did: '09-04-18',
    date: 'September 4, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'The Cumbersome, Multipurpose and Sometimes Unsecure URL ...<br />Is There a Better way?',
    post: blogpost3,
    blogcite: blogcite3
  }, {
    id: '2',
    did: '09-03-18',
    date: 'September 3, 2018',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: '',
    post: blogpost2,
    blogcite: blogcite2
  }, {
    id: '1',
    did: '09-01-18',
    date: 'September 1-2, 2018<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Mistaken identities',
    post: blogpost1,
    blogcite: blogcite1
  }];

  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="  author">' + url[i].author + '</p>   \n    <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-sep").innerHTML += cat;
  }

  var i;
  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="  author">' + url[i].author + '</p>   \n  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle cha-pternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-sep-mod").innerHTML += catMod;
  }

  console.log('blogger-sep');
  // console.log(angular.toJson(url));
};
bloggerSep();

/***/ })
/******/ ]);