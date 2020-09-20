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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./js/force');  

__webpack_require__(1);
__webpack_require__(2);

__webpack_require__(3);
__webpack_require__(4);
// require('./js/blog-draft-march19');
// require('./js/blog-draft-jan19');
// require('./js/blog-draft-dec');
// require('./js/blog-draft-nov');
// require('./js/blog-draft-oct');
// require('./js/blog-draft-sep');
// require('./js/blog-draft-aug');
// require('./js/blog-draft-jul');
// require('./js/blog-draft-june');
// require('./js/blog-draft-may');
// require('./js/blog-draft-apr');
// require('./js/blog-draft-mar');
// require('./js/blog-draft-feb'); 

// modal
var modal = document.getElementById('msimpleModal');
var modalBtn = document.getElementById('mmodalBtn');
var closeBtn = document.getElementsByClassName('mcloseBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
  modalBtn.style.display = 'none';
}
function closeModal() {
  modal.style.display = 'none';
  modalBtn.style.display = 'block';
}
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modalBtn.style.display = 'block';
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.getElementById("dailyNav").innerHTML = "<nav class=\"navbar navbar-toggleable-sm  fixed-top bg-primary app-navbar\">\n    \n \n    <button aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler-center hidden-md-up\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n        type=\"button\" on-click=\"fadeUp()\" id=\"toggler\"> </button>\n\n    <div class=\"collapse navbar-collapse   multi_drop_menu   menu\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav mr-auto \">\n            <li  id=\"banner\" >\n            <a href=\"/\" class=\"banner\" id=\"linkbanner\" title=\"Our Daily Tech\"><img src=\"https://s3.amazonaws.com/ourdailytech.net/dist/img/ourdailytechbanner.png\" alt=\"our dailytech banner\"  /></a>\n            </li>\n        <!--    <li class=\"nav-item   \">\n                <a class=\"nav-link\" href=\"/\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\"\n                    on-click=\"fadeUp()\">\n                    <span class=\" subdailytech\"> TECH\n                        <br />BLOG </span>\n                </a>\n            </li>-->\n            <li class=\"nav-item  \">\n                <a class=\"nav-link\" href=\"/archives\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n                    type=\"button\" on-click=\"fadeUp()\">\n                    <span class=\"subdailytech \">BLOG  \u2728\n                        <br />ARCHIVES </span>\n                </a>\n            </li>\n            <li class=\"nav-item hidden\">\n                <a class=\"nav-link\" ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html\"\n                    title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\">\n                    <span class=\"caret subdailytech\">FOR_CAT\n                        <br />EYES_ONLY</span>\n                </a>\n\n                <a class=\"nav-link\" ng-href=\"/_For_Cat_Eyes_Only_\" title=\"tmm FICTION\" data-target=\"#navbarResponsive\"\n                    data-toggle=\"collapse\" type=\"button\">\n                    <span class=\"caret subdailytech\">FOR_CAT\n                        <br />EYES_ONLY</span>\n                </a>\n                <ul style=\"z-index:0\" class=\"menu-left\">\n                    <li>\n                        tmm FICTION\n                        <a style=\"z-index:199; \" ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html\"\n                            title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\">For\n                            Cat Eyes Only:\n                            <i>Early Months of Win&#39;s Campaign</i>\n                        </a>\n                    </li>\n                    <li style=\"z-index:199; \">\n                        tmm FICTION\n                        <a style=\"z-index:199; \"\n                            ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html#capturing\"\n                            title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n                            type=\"button\">Fiction Excerpts From:\n                            <br />\n                            <i>The Casperian Ancestries</i>\n                            <br />\n                            <small>Capturing One Cat&#39;s Past and Present</small>\n                        </a>\n                        tmm FICTION\n                    </li>\n                </ul>\n            </li>\n            <li style=\"z-index:5\" class=\"nav-item\">\n                <a class=\"nav-link\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\"\n                    on-click=\"fadeUp()\">\n                    <span class=\" subdailytech\">DATA\n                        <br /> TOOLS\n                    </span>\n                </a>\n\n\n                <ul>\n\n                    <!--START UL -->\n\n                    <li style=\"z-index:100;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> Web &nbsp;&nbsp;\n                            <span> </span>\n                        </a>\n\n\n                        <ul>\n                            <li style=\"z-index:100;\">\n                                <a href=\"http://webreference.com/\" target=\"_blank\">Web Reference</a>\n                            </li>\n                            <li>\n                                <a href=\"https://developer.mozilla.org\" target=\"_blank\">Mozilla Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://support.google.com/webmasters/?hl=en\" target=\"_blank\">Google Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://developer.yahoo.com/\" target=\"_blank\">Yahoo! Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.w3schools.com\" target=\"_blank\">W3 schools</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.w3.org/\" target=\"_blank\">World Wide Web Consortium</a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.icann.org\" target=\"_blank\">ICANN</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:98.2;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> D3 tools &nbsp;&nbsp; </a>\n                        <ul class=\"dropdown-menu\">\n                            <li style=\"z-index:98\">\n                                <a href=\"http://d3js.org\" target=\"_blank\">D3js</a>\n                            </li>\n                            <li style=\"z-index:98.5\">\n                                <a\n                                    href=\"https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md\">d3.v3</a>\n                            </li>\n                            <!--    <li style=\"z-index:98.5\">\n        <a href=\"https://chartio.com/\" target=\"_blank\">chartio</a>\n    </li>\n    <li style=\"z-index:98.5\">\n    <a href=\"http://code.shutterstock.com/rickshaw/\" target=\"_blank\">rickshaw</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://rawgraphs.io/\" target=\"_blank\">rawgraphs.io </a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://dimplejs.org\" target=\"_blank\">dimplejs</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://nvd3.org/\" target=\"_blank\">nvd3</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG\" target=\"_blank\">SVG</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://www.khronos.org/webgl/\" target=\"_blank\">WebGL</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API\" target=\"_blank\">Canvas</a>\n</li>\n<li>\n<a href=\"https://www.telerik.com/kendo-ui\"  >  <i class=\"fa fa-cog\"></i></a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://alignedleft.com/tutorials/d3/binding-data\" target=\"_blank\">binding-data</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://datajournalismhandbook.org/1.0/en/getting_data_3.html\" target=\"_blank\">getting_data</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API\" target=\"_blank\">Canvas</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://github.com/d3/d3/blob/master/CHANGES.md\" target=\"_blank\">d3.v4 changes</a>\n</li>\n-->\n                            <li style=\"z-index:98\">\n                                <a href=\"https://github.com/d3/d3/blob/master/API.md\" target=\"_blank\">D3js APIs</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                    <li style=\"z-index:98;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Javascript &nbsp;&nbsp; </a>\n                        <ul class=\"dropdown-menu\">\n                            <li style=\"z-index:98\">\n                                <a href=\"https://jsbin.com\" target=\"_blank\">JS Bin</a>\n                            </li>\n                            <li style=\"z-index:98\">\n                                <a href=\"https://developer.mozilla.org/en-US/docs/Web/API\" target=\"_blank\">JavaScript\n                                    APIs</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:10 ;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Datasets &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:10 ;\">\n                                <a href=\"http://www.icpsr.umich.edu/icpsrweb/ICPSR/index.jsp\" target=\"_blank\">ICPSR\n                                    Datasets</a>\n                            </li>\n                            <li style=\"z-index:10 ;\">\n                                <a href=\"http://data.imf.org/?sk=7CB6619C-CF87-48DC-9443-2973E161ABEB\"\n                                    target=\"_blank\">Datasets IMF</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:101;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Stats &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:101;\">\n                                <a href=\"https://stats.idre.ucla.edu/other/dae/\" target=\"_blank\">Stats</a>\n                            </li>\n                            <li style=\"z-index:101;\">\n                                <a href=\"http://openrefine.org/\" target=\"_blank\">OpenRefine</a>\n                            </li>\n                            <li style=\"z-index:102;\">\n                                <a href=\"http://statacumen.com\" target=\"_blank\">Stat Acumen</a>\n                            </li>\n                            <li style=\"z-index:102;\">\n                                <a href=\"http://www.mapageweb.umontreal.ca/durandc/\" target=\"_blank\">Montr&eacute;al\n                                    Stats</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:12;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">SQL &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:12;\">\n                                <a target=\"_blank\">MySQL &nbsp;&nbsp;</a>\n                            </li>\n                            <li style=\"z-index:12;\">\n                                <a href=\"https://www.mysql.com/\" target=\"_blank\">MySQL</a>\n                            </li>\n                            <li style=\"z-index:121;\">\n                                <a href=\"http://www.oracle.com/technetwork/developer-tools/apex/overview/index-155186.html\"\n                                    target=\"_blank\">Oracle Express</a>\n                            </li>\n                            <li style=\"z-index:121;\">\n                                <a href=\"http://iacademy.oracle.com\" target=\"_blank\">Application Express</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> R-Project &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:1;\">\n                                <a href=\"https://www.r-project.org/\" target=\"_blank\">R-Project </a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.rstudio.com/\" target=\"_blank\">RStudio</a>\n                            </li>\n                            <li>\n                                <a href=\"https://shiny.rstudio.com/\" target=\"_blank\">Shiny</a>\n                            </li>\n                            <li>\n                                <a href=\"http://amsantac.co/blog/en/2015/10/31/qgis-r.html\" target=\"_blank\">Open GIS</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.tableau.com/products/cloud-bi\" target=\"_blank\">Tableau </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> Python &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:1;\">\n                                <a href=\"https://www.python.org/\" target=\"_blank\">Python.org</a>\n                            </li>\n                            <li>\n                                <a href=\"https://pypi.python.org/pypi\" target=\"_blank\">Python Package Index</a>\n                            </li>\n                            <li>\n                                <a href=\"https://docs.python.org/2/library/index.html\" target=\"_blank\">Python Standard\n                                    Library</a>\n                            </li>\n                            <li>\n                                <a href=\"https://pandas.pydata.org/pandas-docs/stable/\" target=\"_blank\">Pandas Data\n                                    Analysis Toolkit</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:9;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Validators &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:9;\">\n                                <a href=\"https://stats.idre.ucla.edu/other/dae/\" target=\"_blank\">Validators </a>\n                            </li>\n                            <li>\n                                <a href=\"http://validator.w3.org\" target=\"_blank\">HTML validator</a>\n                            </li>\n                            <li>\n                                <a href=\"http://jigsaw.w3.org/css-validator/\" target=\"_blank\">CSS validator</a>\n                            </li>\n                            <li>\n                                <a href=\"http://jsonlint.com/\" target=\"_blank\">JSON Validator</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://html-color-codes.info/\" target=\"_blank\">Color Codes</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"https://inkscape.org/en/\" target=\"_blank\">Inkscape</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"https://v4-alpha.getbootstrap.com\" target=\"_blank\">Bootstrap</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://www.dynamicdrive.com/\" target=\"_blank\">Dynamic Drive</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://php.net\" target=\"_blank\">PHP.net</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.useit.com/\" target=\"_blank\">Jakob Nielson</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.alistapart.com/\" target=\"_blank\">A List Apart</a>\n                    </li>\n                    <li>\n                        <a href=\"http://codepen.io/\" target=\"_blank\">codepen.io</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.sitepoint.com/\" target=\"_blank\">sitepoint</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.kaggle.com\" target=\"_blank\">Kaggle</a>\n                    </li>\n                    <li>\n                        <a href=\"http://plnkr.co/\" target=\"_blank\">Plunker</a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com\" target=\"_blank\">GitHub</a>\n                    </li>\n                    <li>\n                        <a href=\"https://gist.github.com/\" target=\"_blank\">Gist\n                            <small>GitHub</small>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"last\" href=\"http://stackoverflow.com\" target=\"_blank\">Stack Overflow</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.virtualbox.org/\" target=\"_blank\">Virtual Box</a>\n                    </li>\n                </ul>\n                <!--end UL-->\n\n\n            </li>\n        </ul>\n        <ul id=\"media\" class=\"nav navbar-nav navbar-right\">\n\n\n            <li>\n\n                <a title=\"Medium\" href=\"https://medium.com/@thomasm1\" target=\"_blank\">\n\n                    <i class=\"fa fa-medium\"></i>\n\n                </a>\n\n            </li>\n            <li>\n\n                <a title=\"github\" href=\"https://github.com/thomasm1\" target=\"_blank\">\n\n                    <i class=\"fa fa-github\"></i>\n\n                </a>\n\n            </li>\n\n\n            <li>\n\n                <a title=\"facebook\" href=\"https://www.facebook.com/thomasm1.maestas\" target=\"_blank\">\n\n                    <i class=\"fa fa-facebook\"></i>\n\n                </a>\n\n            </li>\n\n            <li>\n\n                <a title=\"linkedin\" href=\"http://linkedin.com/in/thomasmaestas\" target=\"_blank\">\n\n                    <i class=\"fa fa-linkedin\"></i>\n\n                </a>\n\n            </li>\n            \n            <!--End UL -->\n\n        </ul>\n        <abbr title=\"Our Daily Tech\">\n\n            <img class=\"card-profile-img zoom\" id=\"dailylogo\" alt=\"image of Le Mont Real\"\n                src=\"dist/img/blueColorTriomphe.png\" />\n\n        </abbr>\n\n    </div>\n\n</nav>";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


setTimeout(function () {

  // OLD_KEY: NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
  // NEW_KEY: p2o1kCukELyMEhVm912JFO17GgidlBIx4dhi4Ppu
  var url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    // console.log("onreadystate changed")
    // if (xhttp.readyState == 4 && xhttp.statusText == 200) {  
    // console.log("200");
    var result = JSON.parse(this.responseText);
    // console.log(this.responseText);

    if (result.copyright != "") {
      document.getElementById("copyright").innerHTML = "Image Credits: " + result.copyright;
    } else {
      document.getElementById("copyright").innerHTML = "Image Credits: " + "Public Domain";
    }

    if (result.media_type == "video") {
      document.getElementById("apod_img_id").style.display = "none";
      document.getElementById("apod_vid_id").setAttribute("src", result.url);
    } else {
      document.getElementById("apod_vid_id").style.display = "none";
      document.getElementById("apod_img_id").setAttribute("src", result.url);
    }
    document.getElementById("reqObject").text = url;
    document.getElementById("returnObject").innerHTML = JSON.stringify(result, null, 4);

    document.getElementById("apod_explaination").innerHTML = result.explanation;
    document.getElementById("apod_title").innerHTML = result.title;
    // }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
  // var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";


  // $.ajax({
  //   url: url,
  //   success: function(result){
  //   if("copyright" in result) {
  //     $("#copyright").text("Image Credits: " + result.copyright);
  //   }
  //   else {
  //     $("#copyright").text("Image Credits: " + "Public Domain");
  //   }

  //   if(result.media_type == "video") {
  //     $("#apod_img_id").css("display", "none"); 
  //     $("#apod_vid_id").attr("src", result.url);
  //   }
  //   else {
  //     $("#apod_vid_id").css("display", "none"); 
  //     $("#apod_img_id").attr("src", result.url);
  //   }
  //   $("#reqObject").text(url);
  //   $("#returnObject").text(JSON.stringify(result, null, 4));  
  //   $("#apod_explaination").text(result.explanation);
  //   $("#apod_title").text(result.title);
  // }
  // });
}, 2500);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMarch20 = function bloggerMarch20() {

    var blogpost11 = '<p>\n    </p>\n    <p class="quote">Graphene batteries are one of the fastest energy-storing solutions available, globally. Graphene utilized as electrode material in batteries needs to be of high quality, that is, single to few layered graphene.<sup>1</sup>\n    </p>\n    <p class="quote">\n    ';
    var blogcite11 = ' \n      <p>1. <a  target="_blank" href="https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/">https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/</a> \n</p>\n<p>2. <a  target="_blank" href="https://www.graphene-info.com/graphene-batteries">https://www.graphene-info.com/graphene-batteries</a> </p>  \n<p>3. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a> \n</p>  \n  ';
    var blogpost10 = '<p>The Nuts &amp; Bolts of one of graphene\'s contributions ...\n    </p>\n    <p class="quote">When a lithium-ion battery is charging, lithium ions flow to the anode, which is typically made of a type of carbon called graphite. If you swap graphite for silicon, far more lithium ions can be stored in the anode, which increases the energy capacity of the battery. But packing all these lithium ions into the electrode causes it to swell like a balloon; in some cases, it can grow up to four times larger.\n<br /><br />\nThe swollen anode can pulverize the nanoengineered silicon particles and rupture the protective barrier between the anode and the battery\u2019s electrolyte, which ferries the lithium ions between the electrodes. Over time, crud builds up at the boundary between the anode and electrolyte. This both blocks the efficient transfer of lithium ions and takes many of the ions out of service. It quickly kills any performance improvements the silicon anode provided.\n<br /><br />\nOne way out of this problem is to sprinkle small amounts of silicon oxide\u2014better known as sand\u2014throughout a graphite anode. This is what Tesla currently does with its batteries. Silicon oxide comes pre-puffed, so it reduces the stress on the anode from swelling during charging. But it also limits the amount of lithium that can be stored in the anode. Juicing a battery this way isn\u2019t enough to produce double-digit performance gains, but it\u2019s better than nothing.\n<br /><br />\nCary Hayner, cofounder and CTO of NanoGraf, thinks it\u2019s possible to get the best of silicon and graphite without the loss of energy capacity from silicon oxide. At NanoGraf, he and his colleagues are boosting the energy of carbon-silicon batteries by embedding silicon particles in graphene, graphite\u2019s Nobel Prize-winning cousin. Their design uses a graphene matrix to give silicon room to swell and to protect the anode from damaging reactions with the electrolyte. Hayner says a graphene-silicon anode can increase the amount of energy in a lithium-ion battery by up to 30 percent.<sup>1</sup>\n    </p>\n    ';
    var blogcite10 = ' \n      <p>1. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a>  </p>\n\n      <!-- <p>2. <a  target="_blank" href=""></a> </p>  -->  ';

    //     var blogpost8 =     `<p>
    //     </p>
    //     <p class="quote">
    //     </p>
    //     `
    //      var blogcite8 =    ` 
    //       <p>1. <a  target="_blank" href=""></a>  </p>
    // <p>2. <a  target="_blank" href="</a> </p>    
    //   `;

    var blogpost7 = '<p>\n     Democratization of access to quantum software -- Cloud-backed hardware and open-software API\'s available to the public -- has been broadly expanded with Google Cloud Platform\'s March 6th White Paper, which outlines a package of (data analysis) simulation hardware, which "combines Cirq, an open source quantum circuit library, and the <a href="https://www.tensorflow.org/quantum" target="_blank">TensorFlow</a> machine learning platform." In short, the complete package: \n    </p> \n    <p class="quote">Google today announced the launch of TensorFlow Quantum, bringing together machine learning and quantum computing initiatives at the company. The framework can construct quantum datasets, prototype hybrid quantum and classic machine learning models, support quantum circuit simulators, and train discriminative and generative quantum models.\n    <sup>1 &nbsp; 2</sup>\n    </p>\n    <p>In my <a href="#12-22-18">12-22-18 blog post, Quantum Computing</a>, I wrote on IBM\'s pioneering efforts to provide public access to quantum hardware for limited use. IBM\'s <em>Q Experience</em> was the first to provide large-scale applications for public consumption, but those were test rides around a track while Google here is offering the track, the pit crew and unlimited supply of racing cars to work with and invent with, from under the hood to every tool in the shop. \n    <br /><br />\nFrom the White Paper:\n    </p>\n    <p class="quote">\nWe introduce TensorFlow Quantum (TFQ), an open source library for the rapid prototyping of hybrid quantum-classical models for classical or quantum data. This framework offers high-level abstractions for the design and training of both discriminative and generative quantum models under TensorFlow and supports high-performance quantum circuit simulators. We provide an overview of the software architecture and building blocks through several examples and review the theory of hybrid quantum-classical neural networks. We illustrate TFQ functionalities via several basic applications including supervised learning for quantum classification, quantum control, and quantum approximate optimization. Moreover, we demonstrate how one can apply TFQ to tackle advanced quantum learning tasks including meta-learning, Hamiltonian learning, and sampling thermal states. We hope this framework provides the necessary tools for the quantum computing and machine learning research communities to explore models of both natural and artificial quantum systems, and ultimately discover new quantum algorithms which could potentially yield a quantum advantage.\n    <sup>3</sup>\n</p> \n   ';
    var blogcite7 = '  \n    <p>1. <a  target="_blank" href="https://venturebeat.com/2020/03/09/google-launches-tensorflow-quantum-a-machine-learning-framework-for-training-quantum-models/">https://venturebeat.com/2020/03/09/google-launches-tensorflow-quantum-a-machine-learning-framework-for-training-quantum-models/</a> \n</p>\n<p>2. <a  target="_blank" href="https://ai.googleblog.com/2020/03/announcing-tensorflow-quantum-open.html">https://ai.googleblog.com/2020/03/announcing-tensorflow-quantum-open.html</a> </p>  \n<p>3. <a  target="_blank" href="https://arxiv.org/abs/2003.02989">March 6th, 2020 Google White Paper</a> \n</p>  \n\n  ';

    var blogpost4 = '<p>\n    At a time when the national lines blur between multi-national corporations, and an interdependent global tech community, the 21st century space race is nonetheless well-defined -- however defined along the lines of sub-atomic inner-space. \n    </p>\n       <img src="dist/img/q-chandelier.jpg" width="400"  class="zoom" />\n    <p class="quote">\n    But just as the Soviet Union was the first to put both a satellite and a human being into orbit, before going on to lose the space race, China March be poised to outstrip any American achievements in a specific field of quantum technology \u2014 communication.<sup>1</sup>\n    </p>\n    <p>\n    But the goals are less abstract than sending a traveler to space; they define how national secrets can be securely stored, accessed and communicated: </p>\n\n    <p class="quote">With Micius, Chinese researchers are attempting to use a different type of quantum technology to develop new forms of secure communications that would be unbreakable. Micius is being used to share cryptography keys, which are used to encode and decode secure communications.\n<br /><br />\nOrdinarily, these keys are vulnerable to interception, but Micius uses photons in a quantum-superposition state \u2013 it\u2019s impossible to read them without changing what they say, so you can\u2019t copy or intercept a key sent in this manner.<sup>2</sup>\n</p> \n   ';
    var blogcite4 = '  \n    <p>1. <a  target="_blank" href="https://www.cnn.com/2019/10/24/tech/china-quantum-computing-intl-hnk/index.html">https://www.cnn.com/2019/10/24/tech/china-quantum-computing-intl-hnk/index.html</a> \n</p> \n<p>2. <a  target="_blank" href="https://www.wired.co.uk/article/quantum-computing-china-us">https://www.wired.co.uk/article/quantum-computing-china-us</a> \n</p>  \n\n<p>3. <a  target="_blank" href="https://www.technologyreview.com/s/615180/quantum-computer-race-ibm-google/">https://www.technologyreview.com/s/615180/quantum-computer-race-ibm-google/</a> \n</p>  ';

    var blogpost3 = '\n\n<p class="firstparagraph">Data -- from the warehousing to the accessing and securing, all the while complying with data privacy regulations, has been a piecemeal, multi-faceted challenge: a race against the clock, against others\' race against the clock, and of course the changing dynamics of the clock itself. If this sounds like an impossiblly rigged game, it is, because the goal posts bend for the best technologies availed by whom. </p>\n  <img src="dist/img/q-superposition.jpg" width="400"  class="zoom" />\n<p class="quote"> Countries around the world are investing billions into quantum computing research. Mainly, it\u2019s because it has applications in artificial intelligence. Security and the search for unbreakable encryption in AI-enabled applications that house personal, business, and government data are prompting the investment into this new research area.<sup>1</sup>\n</p> \n\n<p>The roadblocks for machine learning are clear: computing power for modern techniques are not sustainable in terms of insufficient memory and computing power, hence the current "A.I. Winter". In my <a href="#07-05-18">July 5th 2018 post, <em>Godfathers of A.I.</em></a> I outline the periods that technical limitations reduce progress and interest in A.I. applicibility. In preliminary advances, single-layered algorithms (think of one set of variables that drive prediction) and later iterations that involve multiple-layers that exponentially increase computing needs: \n</p>\n\n\n\n<p class="quote">Programs that performed well in the laboratory were useless in everyday situations; a simple act like picking up a ball turned out to require an overwhelming number of computations. The research fell into the first of several \u201CA.I. winters.\u201D As Bostrom notes in his book, \u201CAmong academics and their funders, \u2018A.I.\u2019 became an unwanted epithet.\u201D<sup>2</sup></p>\n<p>So, then, what is at stake with the potential of quantum-based computations? Everything, because all the current machine learning roadblocks are flattened: </p>\n\n<p class="quote">Quantum Computing also has the potential to allow AI to optimize its processing to such a degree that complex calculations needed to achieve artificial general intelligence can be carried out in record time.<sup>1</sup>\n</p>\n\n<p>This time it\'s more than a roll of the die and a few good hires. To the winner go the spoils, the losers work for the winners, and finally, not even time spent can predict the winners!</p>\n<br />\n';

    var blogcite3 = '\n     \n<p>1. <a  target="_blank" href="https://towardsdatascience.com/is-quantum-computing-a-dream-fd7385b1db56">https://towardsdatascience.com/is-quantum-computing-a-dream-fd7385b1db56</a> \n</p>  \n<p>2. <a  target="_blank" href="http://fortune.com/longform/element-ai-startup-tech/">http://fortune.com/longform/element-ai-startup-tech/</a> \n</p> \n';

    var blogpost2 = '\n\n<p class="firstparagraph">Gone are the days when the best and the brightest took home the honors and laurels. Today, an obsucre darkness rules over visibility into the advances that don\'t arise from obvious luck. Instead, networks of tech advances, some stolen, some spilled and some surmised from nothing form the new space race: The rocket head forms the algorithm and the expendible data form the solid rocket boosters. Period. \n</p>\n\n<p class="quote"> We need quantum-resistant algorithms as soon as possible,\u201D Grobman said. \nCloud computing is sweeping through the industry, and it will enable the use of quantum computing. And that\u2019s a problem, as quantum computers may be able to break encryption techniques such as RSA encryption much faster than traditional computers can. Typically, encryption techniques make it easy to encode data but hugely difficult to decode it without the use of a special key. The security is possible only because of the huge amount of time it takes for a classical computer to do the computations. <sup>1</sup></p>  \n\n  ';

    var blogcite2 = '\n<p>1. <a  target="_blank" href="https://venturebeat.com/2020/02/25/mcafee-start-protecting-against-quantum-computing-hacks-now/">https://venturebeat.com/2020/02/25/mcafee-start-protecting-against-quantum-computing-hacks-now/</a> \n</p>  \n';

    var url = [{
        id: '11',
        did: '20-03-17',
        date: 'March 17, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'Graphene Relief: Batteries\' Demand',
        post: blogpost11,
        cite: blogcite11
    }, {
        id: '10',
        did: '20-03-16',
        date: 'March 16, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'Graphene Relief: Batteries\' Context',
        post: blogpost10,
        cite: blogcite10
    },
    //   {
    //     id: '8',
    //     did: '20-03-14',
    //     date: 'March 14-15, 2020<br />Weekend',
    //     author: 'by Thomas Maestas, MA',
    //     cat3: ' ',
    //     title: ' ',
    //     post: blogpost8,
    //     cite: blogcite8
    // },
    {
        id: '7',
        did: '20-03-09',
        date: 'March 9, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part V: <br />Quantum Data in the Cloud',
        post: blogpost7,
        cite: blogcite7
    }, {
        id: '4',
        did: '20-03-05',
        date: 'March 5, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part III: <br />The Nationalism of Quantum Data and Privacy',
        post: blogpost4,
        cite: blogcite4
    }, {
        id: '3',
        did: '20-03-04',
        date: 'March 4, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part II:<br />The Business of Quantum Data and Privacy',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '20-03-03',
        date: 'March 3, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Today',
        title: 'Moving your Quantum Dreams into Today, Part I: <br /> The Timing of Quantum Data and Privacy',
        post: blogpost2,
        cite: blogcite2
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-March20").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-March20-mod").innerHTML += catMod;
    }

    console.log('blogger-March-20');
    // console.log(angular.toJson(url));
};

bloggerMarch20();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMay19 = function bloggerMay19() {

    /*
    
    august  16 - 
    https://bitcoinist.com/bakkt-wins-regulatory-approval-to-launch-bitcoin-futures/
    ----
     The tables have turned ..
    -
    and now the launchlad
    june 14
    https://www.cnet.com/news/calls-to-break-up-amazon-google-facebook-and-apple-get-louder/
    DOJ-->
    Last week, The Wall Street Journal reported that the FTC and Justice Department reached a new agreement, with the FTC gaining authority to review Amazon and Facebook, while the Justice Department is able to look into Apple and Google. This deal is seen as an early step in these agencies digging into potential anticompetitive practices by all four companies.
    consumer view-->
    That could result in a flourishing of new services and features for consumers, giving them a lot more choices for e-commerce, social media and search. That change could also sow confusion, as sites that used to be part of the same company no longer work as seamlessly together.
        June 11, 2019
    Most cross-border payments are done through the Society for Worldwide Interbank Financial Telecommunication, or Swift, a Belgian organization started in 1973 that counts 11,000 financial institutions as members. But its legacy system has inefficiencies. Because few banks are connected directly to each other, a payment that originates in Kansas City and is bound for Nairobi might have to stop at banks in New York and London before reaching its final destination, with each bank extracting a fee. 
    https://www.forbes.com/sites/jeffkauflin/2019/06/11/visa-targets-swift-with-new-blockchain-product-for-global-money-transfers/
    Visa seems to do everything on a massive scale. Last year, it moved $11.2 trillion over its payment rails across more than 200 countries for purchases ranging from cups of coffee to cars. Now it’s eyeing an even bigger market: cross-border, business-to-business (B2B) transactions, where banks transfer money on behalf of corporate customers. Visa says it’s entering a $125 trillion market and using distributed ledger technology—software where transactions must be confirmed by multiple computers on a network to be considered final—to make these payments faster, cheaper and more transparent.
    Phalen’s team created Visa B2B Connect using distributed ledger technology because it provides more transparency and traceability than a typical state-of-the-art database, he says. They used Hyperledger Fabric, the blockchain software developed in part by IBM and hosted by Linux, to build it, and it has taken two years to launch. Unlike cryptocurrency-based blockchains including Bitcoin and Ethereum, Visa’s product isn’t decentralized, since the payments giant has complete control over it. Visa made Forbes’ first-ever Blockhain 50 list earlier this year.
    june 6
    Unlike the original vision spelled out in the Nakamoto paper, these initiatives don’t use a proof-of-work system for verification, but are permissioned blockchains in which each participant is identified and known—and therefore accountable—to the others in the blockchain network. Essentially this verifies members before transactions take place, much as Global Entry and TSA Pre do at airline security checkpoints.
    https://www.barrons.com/articles/blockchain-moves-beyond-the-walled-garden-stage-51559820635
    IBM hath been busy ...
    "To understand what the future of blockchain could look like, it’s helpful to look at IBM ’s recent initiatives to build communities around peer-to-peer networks in financial services, identity and supply chain.
    The company is also working with SecureKey to develop a digital identity system in Canada. The system is designed to allow consumers to develop digital identities that they can control. 
    Perhaps the greatest opportunity for blockchain technology is in helping to streamline supply chains. In fact, a 2013 study by the World Economic Forum found that reducing back-office friction in international trade could increase GDP by nearly 5%. IBM has two major efforts in this area. It partnered with Maersk to create TradeLens, which aims to digitize global shipping and created Food Trust that focuses on agricultural products."
    June 4 - Near-Zero Latency Apps and Bots
    And then there's the question of what type of 5G signals are available. Verizon, like AT&T, has focused on what's known as millimeter wave spectrum, which is fast but has a limited range and can have trouble with walls and even foliage. Carriers in Europe and Asia, along with Sprint and T-Mobile in the US, have been using sub-6GHz airwaves for slower but more reliable coverage.
    https://www.cnet.com/news/verizon-5g-lab-tunes-up-robots-and-medical-tech-heading-your-way/
    The bigger goal, Palmer said, is to enable whole new experiences -- in education, for instance, transporting someone who's studying glaciers to an actual glacier via virtual reality or a holographic experience that's not possible today.
    When the next generation matures eventually, a whole array of technologies will be able to blossom in ways that today's 4G networks don't allow -- cars communicating with each other and with sensors on a highway or city streets at speed, for instance. The internet of things becomes a lot more than just you checking in with your Nest thermostat or an August smart doorbell. Soldiers and first responders get better, faster situational awareness.
    June 3 - The $6000 computadora
    https://www.cnet.com/news/the-new-mac-pro-makes-its-debut-at-wwdc-2019-starts-at-5999-available-fall-2019-apple/
    June 2 - Steer Clear of TapeWorms: Practice Good Hygiene
    https://blogs.technet.microsoft.com/msrc/2019/05/30/a-reminder-to-update-your-systems-to-prevent-a-worm/
    EternalBlue Timeline
    Almost two months passed between the release of fixes for the EternalBlue vulnerability and when ransomware attacks began. Despite having nearly 60 days to patch their systems, many customers had not.
    A significant number of these customers were infected by the ransomware.
    /// Quantum::: mainstream
    AUTHOR::: Yun-Hee Kim at yun-hee.kim@wsj.com
    Dow Jones & Company, Inc. All Rights Reserved.
    Quantum computers won’t replace today’s traditional computers, but they will become mainstream within five years, a top executive in charge of emerging technologies at International Business Machines Corp. predicted.
    Speaking at The Wall Street Journal’s Future of Everything Festival Wednesday, Arvind Krishna, senior vice president of cloud and cognitive software, predicted that with quantum computing, batteries could last “a thousand times longer” and airplanes could become lighter.
    “All of these use cases, I think, will get solved in a few years,” Mr. Krishna said. “Pharmaceuticals and drug discovery is a much harder problem.”
    Quantum computers have the potential to sort through a vast number of possible solutions—more than the number of atoms in the universe—with the calculations being completed as fast as a fraction of a second.
    Responding to criticism from researchers that the U.S. may be falling behind China and the European Union to invest in quantum computing, Mr. Krishna said the U.S. is currently slightly ahead but does need to invest more. China is constructing a $10 billion research center for quantum applications. The European Union announced in 2016 that it is creating a €1 billion effort on four areas of quantum technology including computing and communication.
    Mr. Krishna, who also oversees the integration of IBM’s $33 billion acquisition of Red Hat Inc. said he expects the deal—IBM’s largest acquisition to date—to close around June. The company has received approval from the U.S. Department of Justice for the deal, and is now awaiting approval from the European Union.
    Asked about restructuring after the acquisition is completed, Mr. Krishna said that it wouldn’t result in any job cuts at Red Hat.
    “This is a value deal, not about cost synergy. They [Red Hat] run on multiple public clouds. It’s got to be preserved,” he said.
    In the public cloud space, IBM trails rivals Amazon Inc. and Microsoft Corp. IBM ranked fifth in the world for public cloud-infrastructure service in 2017, according to data from Gartner Inc., behind Amazon, Microsoft, Alibaba Group Holding Inc. and Google Inc.
    But Mr. Krishna said the acquisition creates a big opportunity for IBM to expand in the so-called hybrid cloud space where customers run some software in their own data centers but also use cloud services.
    “I’m not trying to catch up to Amazon and Microsoft,” he said. “They are going down the path of public cloud and we are going to be hybrid. There is so much investment that’s already happening and there is so much data that can’t sit on the public cloud. I believe there is space for all of us,” he said.
    ///
    The use of the trapped ion technology puts Honeywell in rare company, since the most visible companies pursuing quantum computing, including IBM, Google, Intel, and Rigetti, are basing their hardware on semiconductor technology.
    June 1 - 
    https://www.nextplatform.com/2019/05/28/honeywell-one-step-closer-to-universal-quantum-computer/
    In November, the company revealed it had started testing its first-generation qubit devices, followed in January by the claim that it had “demonstrated record-breaking high fidelity quantum operations” on its trapped-ion qubits. In March, it announced it had demonstrated “parallel operating zones” on the device, which it believes will provide faster execution and more flexible qubit connectivity.
    Honeywell’s attraction to trapped ion technology mirrors that of IonQ, namely that these atomic level structures are totally uniform, naturally resistant to error-producing noise, and can be connected to one another in different configurations at runtime. While this technology doesn’t have the decades-long history and proven scalability of semiconductors, at this point, it offers the most interesting alternative for solid-state quantum computing.
     */
    var blogpost30 = '\n\n<p class="firstparagraph">Substituting one material for another when in a pinch invites a panoply of complications when the quality of substitute materials vary by geographical and political borders ... <br />\n  <img src="dist/img/metal.jpg"  width="400"  class="zoom" />\n</p>\n\n<p class="quote">Electronics manufacturers could be among the first to feel the full brunt of the trade war. The industry is perhaps uniquely global: Chips made in Oregon or Texas are shipped to a plant in Mexico to be attached to circuit boards made in China alongside capacitors made in Vietnam. It is not unheard-of for a product or its components to cross the Pacific three or even four times before showing up on retail shelves. \nBut nearly a year later, the trade war shows no sign of cooling off. So ControlTek, the electronics manufacturer that Mr. LaFrazia runs near Portland, is taking steps to protect itself, a strategic shift that has been repeated in boardrooms and executive suites around the world in recent weeks.\n<br /><br /> \n\u201CWe\u2019re very much at the end of the whip getting thrown around,\u201D Mr. LaFrazia said.\nIt was also unclear which products were subject to tariffs. Mr. LaFrazia, a 54-year-old Air Force veteran, recalled spending hours poring over an online list of tariff codes to figure out which applied to his parts. When he called the manufacturers, they often didn\u2019t know where they fell in the government\u2019s taxonomy of tradable goods. Even the government\u2019s experts can get confused \u2014 ControlTek recently had a shipment of parts delayed for 12 days because customs officials thought they contained aluminum that was subject to tariffs. (They didn\u2019t.)<sup>1</sup></p>\n \n\n';

    var blogcite30 = '\n<p>1. <a  target="_blank" href="https://www.nytimes.com/2019/05/30/business/economy/trump-tariff-manufacturer.html">https://www.nytimes.com/2019/05/30/business/economy/trump-tariff-manufacturer.html</a> \n</p>\n\n<p><a  target="_blank" href="https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247">https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247</a> \n</p> \n\n';

    var blogpost29 = '\n  <p class="firstparagraph">My <a href="#09-11-18">September 11th post</a> last year touched on global tech\'s dependence on rare earth materials  ... and again, the trade war begins to take its toll:\n  </p>\n  \n  <p class="quote">Against a backdrop of mounting concern over the long-running trade dispute between the US and China, which stands to choke global growth, Beijing signalled that exports of rare-earth elements to the US could be curtailed.\n  <br /><br />Chinese media reports, including the People\u2019s Daily, the flagship newspaper of the Communist party, raised the prospect of the crackdown, which would stand to hit American companies involved in electronics, car production and defence.\n\n  Analysts said China handles roughly 80% of US imports of rare earths and that high-tech manufacturers could see their profits crippled by the measures.<sup></sup></p> ';

    var blogcite29 = '  \n<p><a  target="_blank" href="https://www.theguardian.com/business/2019/may/29/global-markets-fall-as-china-prepares-to-hit-back-at-us-in-trade-war">https://www.theguardian.com/business/2019/may/29/global-markets-fall-as-china-prepares-to-hit-back-at-us-in-trade-war</a> \n</p>\n\n';
    var blogpost18 = ' \n  \n  <p class="firstparagraph"> \n  </p>\n  \n  <p class="quote">In a surprise bit of weekend news that could have major implications on the smartphone market, Reuters reports that \u201CGoogle has suspended business with Huawei that requires the transfer of hardware, software, and technical services except those publicly available via open source licensing.\u201D\n  <br /><br />\n  Translation: Huawei can no longer implement a full-fledged version of Android, losing access to Google services and more. Instead, it\u2019ll only be allowed to use the open source components of Android. That means no Google Play Store, no Gmail, no YouTube \u2013 at least not without major workarounds. This presumably affects future devices; it\u2019s not clear what effect it will have on current ones.<sup></sup></p>\n\n  \n';
    var blogcite18 = '  \n  \n  <p><a  target="_blank" href="https://thenextweb.com/insider/2019/05/20/report-google-breaks-up-with-huawei-cutting-access-to-android-services-and-apps/">https://thenextweb.com/insider/2019/05/20/report-google-breaks-up-with-huawei-cutting-access-to-android-services-and-apps/</a> \n  </p>\n  \n\n';
    var blogpost17 = ' \n  \n<p class="firstparagraph"> \n</p>\n\n<p class="quote">Quantum computers won\u2019t replace today\u2019s traditional computers, but they will become mainstream within five years, a top executive in charge of emerging technologies at International Business Machines Corp. predicted.\n\nSpeaking at The Wall Street Journal\u2019s Future of Everything Festival Wednesday, Arvind Krishna, senior vice president of cloud and cognitive software, predicted that with quantum computing, batteries could last \u201Ca thousand times longer\u201D and airplanes could become lighter.\n\n\u201CAll of these use cases, I think, will get solved in a few years,\u201D Mr. Krishna said. \u201CPharmaceuticals and drug discovery is a much harder problem.\u201D\n\nQuantum computers have the potential to sort through a vast number of possible solutions\u2014more than the number of atoms in the universe\u2014with the calculations being completed as fast as a fraction of a second.\n<br /><br />\nResponding to criticism from researchers that the U.S. may be falling behind China and the European Union to invest in quantum computing, Mr. Krishna said the U.S. is currently slightly ahead but does need to invest more. China is constructing a $10 billion research center for quantum applications. The European Union announced in 2016 that it is creating a \u20AC1 billion effort on four areas of quantum technology including computing and communication.\n\nMr. Krishna, who also oversees the integration of IBM\u2019s $33 billion acquisition of Red Hat Inc. said he expects the deal\u2014IBM\u2019s largest acquisition to date\u2014to close around June. The company has received approval from the U.S. Department of Justice for the deal, and is now awaiting approval from the European Union.\n<br /><br />\nAsked about restructuring after the acquisition is completed, Mr. Krishna said that it wouldn\u2019t result in any job cuts at Red Hat.\n\u201CThis is a value deal, not about cost synergy. They [Red Hat] run on multiple public clouds. It\u2019s got to be preserved,\u201D he said.\nIn the public cloud space, IBM trails rivals Amazon Inc. and Microsoft Corp. IBM ranked fifth in the world for public cloud-infrastructure service in 2017, according to data from Gartner Inc., behind Amazon, Microsoft, Alibaba Group Holding Inc. and Google Inc.\n<br /><br />\nBut Mr. Krishna said the acquisition creates a big opportunity for IBM to expand in the so-called hybrid cloud space where customers run some software in their own data centers but also use cloud services.  \u201CI\u2019m not trying to catch up to Amazon and Microsoft,\u201D he said. \u201CThey are going down the path of public cloud and we are going to be hybrid. There is so much investment that\u2019s already happening and there is so much data that can\u2019t sit on the public cloud. I believe there is space for all of us,\u201D he said. <sup>1</sup></p>\n  ';
    var blogcite17 = '  \n  \n<p><a  target="_blank" href="https://www.wsj.com/articles/ibm-software-exec-predicts-quantum-computers-will-become-mainstream-in-five-years-11558548160">https://www.wsj.com/articles/ibm-software-exec-predicts-quantum-computers-will-become-mainstream-in-five-years-11558548160</a> \n</p>\n  ';

    var blogpost16 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> \n<br /><br /> <sup></sup></p>\n';
    var blogcite16 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';
    var blogpost15 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote">But, interestingly, the word \u201Cblockchain\u201D doesn\u2019t actually appear in the original bitcoin white paper, released back in 2008. Rather, the white paper uses the words \u201Cblock\u201D and \u201Cchain\u201D separately many times.\n\nIt describes the word \u201Cblock\u201D as the vehicle for a bundle bitcoin transactions. Then, these blocks of are linked together, forming a \u201Cchain\u201D of \u201Cblocks.\u201D <br /><br /><sup>1</sup></p>\n';
    var blogcite15 = '  \n\n \n<p>1. <a target="_blank" href="https://www.coindesk.com/bitcoin-and-blockchain-the-tangled-history-of-two-tech-buzzwords">https://www.coindesk.com/bitcoin-and-blockchain-the-tangled-history-of-two-tech-buzzwords</a> \n</p>\n';

    var blogpost14 = ' \n  <p class="firstparagraph"> \n  </p>\n \n<p class="quote"> <sup></sup></p>\n';
    var blogcite14 = ' \n    <p><a  target="_blank" href=""></a> \n    </p>\n';

    var blogpost13 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> <sup></sup></p>\n';
    var blogcite13 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';

    var blogpost12 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> <sup></sup></p>\n';
    var blogcite12 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';
    var blogpost11 = ' \n  <p class="firstparagraph">The <i>global quest</i> for Satoshi Nakamoto\'s identity now reveals an interesting new plot twist. Contrasting with my  May 4th and 5th post articles, this theory appears to hold water ... \n  </p> \n<p class="quote">\nOne of the most enduring mysteries of modern times has produced another enthralling twist. Satoshi Nakamoto, Bitcoin\u2019s pseudonymous and enigmatic creator, has not been seen online in more than eight years. Evidence has now surfaced that points to a new Satoshi candidate, whose known life has a number of parallels with that of Bitcoin\u2019s inventor. His name is Paul Le Roux and, if proven to be Satoshi, there is a good reason why his 1 million BTC hasn\u2019t moved \u2013 the Rhodesian has been in jail since 2012.<sup>1</sup></p>\n';
    var blogcite11 = '  \n<p>1.<a target="_blank"  href="https://news.bitcoin.com/satoshi-nakamoto-could-be-criminal-mastermind-paul-le-roux/">https://news.bitcoin.com/satoshi-nakamoto-could-be-criminal-mastermind-paul-le-roux/</a> \n</p> \n';
    var blogpost10 = ' \n<p class="quote"><i>Bitcoin is like gold in many ways. Like gold, Bitcoin cannot simply be created arbitrarily. Gold must be mined out of the ground, and Bitcoin must be mined via digital means. Linked with this process is the stipulation set forth by the founders of Bitcoin that, like gold, it have a limited and finite supply. In fact, there are only 21 million Bitcoins that can be mined in total. Once miners have unlocked this many Bitcoins, the planet\'s supply will essentially be tapped out, unless Bitcoin\'s protocol is changed to allow for a larger supply. All confirmed Bitcoin transactions are recorded in the blockchain. The blockchain is described as a shared public ledger on which the entire Bitcoin network relies.</i> <sup>1</sup></p>\n<p class="firstparagraph">Sometime near 2020, the rules of crypto-logic begin to bend ... \n</p>\n<p class="quote"> It may seem that the group of individuals most directly affected by the limit of the Bitcoin supply will be the Bitcoin miners themselves. On one hand, there are detractors of the Bitcoin limitation who that say that miners will be forced away from the block rewards they receive for their work once the Bitcoin supply has reached 21 million in circulation. In this case, these miners may need to rely on transaction fees in order to maintain operations. Bitcoin.com points to an argument that miners will then find the process unaffordable, leading to a reduction in the number of miners, a centralization process of the Bitcoin network, and numerous negative effects on the Bitcoin system. <sup>2</sup></p>\n\n\n';
    var blogcite10 = '  \n\n  <p>1.\n  <a href="https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a" target="_blank">https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a</a>https://www.cnbc.com/2019/04/28/bitcoin-bull-tom-lee-says-new-crypto-highs-likely-by-2020.html\n  </p>\n<p>1.\n<a href="https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/" target="_blank">https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/</a> \n</p>\n';
    var blogpost9 = ' \n  <p class="firstparagraph">Linus Torvalds\' great contribution now extends to Microsoft 10, rather than the past couple year\'s emulated mounting. \n  </p>\n \n<p class="quote">Windows 10 will soon include a built-in Linux kernel updated through Windows Update. Windows itself will still be based on the Windows kernel, of course. The Linux kernel will power the Windows Subsystem for Linux 2 (WSL 2) and let you run even more Linux applications on Windows 10.\n<br /><br />\nWSL version 1 was powerful, but it relied on emulation to run Linux software. That prevented more complex Linux applications\u2014like Docker\u2014from running on Windows. WSL 2 will be more powerful and will run Linux software using an actual Linux kernel.<sup>1</sup></p>\n<p>\nThis, along with 2019 Google Chromebooks\' command-line Linux development environments -- Hooray, the Universe has finally converged!\n</p>\n';
    var blogcite9 = '  \n<p>1. <a href="https://www.howtogeek.com/414036/2019-is-the-year-of-linux-on-the-desktop/">https://www.howtogeek.com/414036/2019-is-the-year-of-linux-on-the-desktop/</a> \n</p>\n \n';
    var blogpost8 = ' \n  <p class="firstparagraph"> \n  </p>\n \n<p class="quote"> <sup></sup></p>\n';
    var blogcite8 = '  \n<p><a href=""></a> \n</p>\n \n';

    var blogpost7 = ' \n  <p class="firstparagraph">  BTC smart contract ability now gets a boost, as it looks like R & D has been busy lately:\n  </p>\n  <p class="quote">\n  The two proposals, announced on the bitcoin developer email list, describe Taproot, a code change designed to increase bitcoin\u2019s privacy. Taproot is expected to be bundled together with an upgrade called Schnorr in a soft fork that developers have been looking into for some time, paving the way for privacy and scalability improvements to bitcoin.\n<br /><br />\nDevelopers have long been thinking about how to arrange this particular upgrade. There have been a number of proposed changes to bitcoin over the years and, as they are all related, it makes sense to implement them together. That includes Merkelized Abstract Syntax Trees (MAST), adding, improved bitcoin smart contracts, Schnorr signatures, which adds another way to sign bitcoin transactions, and Taproot, which adds even better privacy.<sup>1</sup>\n</p>\n\n';
    var blogcite7 = ' \n<p>1.<a href="https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork</a>\n</p> \n\n';
    var blogpost6 = ' \n  <p class="firstparagraph">Bitcoin\'s bare simplicity--designed more than ten years ago, published October 31, 2008--has traditionally served as a strength of reliability in an uncharted industry field. Yet, in a complex and demanding Tech world, others took the spotlight--as the Bitcoin distributed ledger has been contrasted with Ethereum\'s complex scripting language, Solidity, which provides multi-variate <i>Smart Contracts</i> that are well-suited for Distributed Apps, <i>DAPPs</i> and generally for financial-clerical-legal documents. However, the once belittled simple, but reliable, distributed blockchain ledger leverages third-party smart contracting:\n  </p>\n \n<p class="quote">\nEthereum has become the most popular blockchain for creating smart contracts. One of the major design goals of the Ethereum platform was to support smart contracts. From the start, this set Ethereum apart from Bitcoin, which was created first and foremost as a digital currency platform.\n<br /><br />\nAs the Bitcoin protocol has evolved, it has gained support for smart contracts. Smart contract functionality is not as programmable and extensible on Bitcoin as it is on Ethereum. However, using features added to Bitcoin through improvement proposals, certain smart contract functionality can be achieved through Bitcoin scripting.\n<br /><br />\nFor Particl, the most important smart contract feature in Bitcoin is the OP_CHECKLOCKTIMEVERIFY opcode, which was introduced by Peter Todd as Bitcoin Improvement Proposal (BIP) 65. The opcode makes it possible to write scripts that prevent funds in a multi-signature wallet from being spent until a certain signature pattern is implemented or a certain amount of time passes.<sup>1</sup></p>\n';
    var blogcite6 = '  \n<p>1.<a href="https://bitcoinmagazine.com/articles/yes-bitcoin-can-do-smart-contracts-and-particl-demonstrates-how/">https://bitcoinmagazine.com/articles/yes-bitcoin-can-do-smart-contracts-and-particl-demonstrates-how/</a> \n</p>\n\n<p>White Paper<a href="https://github.com/particl/whitepaper/blob/master/decentralized-private-marketplace-draft-0.1.pdf">https://github.com/particl/whitepaper/blob/master/decentralized-private-marketplace-draft-0.1.pdf</a>\n</p>\n';
    var blogpost5 = ' \n  <p class="firstparagraph"> \n  </p>\n    \n  <p class="quote">\n  The self-proclaimed Satoshi, Craig Wright, is being sued by the Kleiman family on behalf of the now deceased Dave Kleiman and his estate. The lawsuit accuses Wright of fraud and theft of \u201Cover $11 billion worth of bitcoins and intellectual property from the estate of Dave Kleiman and W&K shortly after Dave\u2019s 2013 death.\u201D Last week the court ordered Wright to disclose bitcoin addresses that belonged to him before December 2013. The Florida Magistrate overseeing the lawsuit, Judge Bruce Reinhart, signed the order and gave Wright a few days to produce the list.\n  <br /><br />\n  Since then a list of addresses that were once filed in an obscure fashion was unsealed and Wright claims to have mined the first 70 bitcoin blocks starting from the Genesis block. After the redacted list was unsealed, the researchers at Wizsec decided to study the addresses and wrote a blog post about the recently disclosed file. Wizsec claims that Wright simply copied and pasted the addresses from the first 70 blocks and asserted the addresses belonged to him without any cryptographic proof.\n<br /><br />\nWizsec says the motion begs the belief that the self-proclaimed inventor acts as if he is \u201Cignorant about the fundamentals of his invention.\u201D \u201CPerhaps Wright thinks that being a bitcoin miner means pointing at bitcoins and yelling \u2018Mine,\u2019\u201D the researchers jokingly remarked. In the document, Wright\u2019s filing continues to assert that he did not keep track of which Bitcoin blocks he mined and that he does not know any of the other Bitcoin public addresses. The motion further states that the self-styled Satoshi does not have a complete list of the public addresses that he owned as of any date.<sup>1</sup>\n</p>\n';
    var blogcite5 = ' \n<p>1.<a href="https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork" target="_blank">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork</a>\n</p>\n \n';

    var blogpost4 = ' \n<p class="firstparagraph">Satoshi Nakamoto, the omni-present legend that introduced the final frontier for Trustless-based cryptocurrencies is worthy of the world\'s respect. But the Prying Eyes of the tech paparazzi are on the attack. <br /><br />Some character development:  \n</p>\n \n\n<p class="quote"> Ten years ago today, someone using the name Satoshi Nakamoto sent an academic paper to a cryptography mailing list proposing a form of digital cash called "bitcoin." The pseudonymous Nakamoto, whose true identity remains unknown, described an idea for "mining" a limited amount of this virtual currency through a peer-to-peer scheme that wouldn\'t depend on a bank, government, or any other central authority. Once people started using bitcoin, it would be impossible for a government to pull the plug, as happened with previous attempts to create digital money, such as E-Gold.\n<sup>1</sup>\n</p>\n<p>However, seeking a life of anonymity can only stir up further the paparazzis\' research fervor. So, the latest attempt on the inventor\'s privacy, there is the latest claim:</p>\n<p class="quote">The Gotsatoshi.com domain was registered in May 2017, but has lain dormant until last month, when an archived snapshot of the site shows it to have been proclaiming Satoshi\u2019s unveiling as 10 days away then. It\u2019s possible that the great reveal will remain forever 10 days away, to frustrate watchers hoping for a thrilling denouement, or the countdown may reach zero only to reveal a new shitcoin, puzzle game, or to hail the efforts of the marketing agency that dreamed up the stunt.<sup>2</sup>\n</p>\n<p> \nChanneling our adoration of Satoshi Nakamoto toward respect is a bygone hope, but unwarranted paparazzi expos&eacute;s cross the line of decency, so let\'s see if Satoshi\'s cleverness yet once again thwarts the prying eyes!</p>\n';
    var blogcite4 = '\n<p>0. Night at the Roxbury</p>\n<p>1.<a href="https://www.wired.com/story/after-10-years-bitcoin-changed-everything-nothing/" target="_blank">Oct. 31, 2019: https://www.wired.com/story/after-10-years-bitcoin-changed-everything-nothing/</a>\n</p>\n\n<p>2.   <a href="https://news.bitcoin.com/new-website-promises-to-unveil-satoshi-nakamoto-in-10-days/" target="_blank">https://news.bitcoin.com/new-website-promises-to-unveil-satoshi-nakamoto-in-10-days/</a>\n</p>\n';
    var blogpost3 = '\n    <p class="firstparagraph">Rekognition, a premier AWS service, shines among a few dozen other AI software resources, not to mention Platforms-as-a-Service, yet not without controversy: On the one hand, AI algorithms necessarily reflect the biases of its origin lab. On the other hand, Providers like AWS\' democratizing access to every researcher, professional, and student the unlimited use of sophisticated and expensive AI resources; thus canceling out any potential bias through the diversity of individuals\' and teams\' participation.  \n    <br /><br />\n    <img   class="zoom" src="https://s3.amazonaws.com/tmm-nov/img/rekognition.jpg">  \n    <br /><br />\n    At the heart of these healthy public debates, it\'s the particular use-cases that exemplify the spectrum of the debate. For instance, policing practice by bot is a sure example, if not for the <i>RoboCop</i> Hollywood allure ... As always, the AI\'s algorithm bears the imprint of the creator\'s intentions: </p>\n\t\n\t<p class="quote"> \n\tBut Washington County also became ground zero for a high-stakes battle over the unregulated growth of policing by algorithm. Defense attorneys, artificial-intelligence researchers and civil rights experts argue that the technology could lead to the wrongful arrest of innocent people who bear only a resemblance to a video image. Rekognition\u2019s accuracy is also hotly disputed, and some experts worry that a case of mistaken identity by armed deputies could have dangerous implications, threatening privacy and people\u2019s lives.<br /><br />\n\nSome police agencies have in recent years run facial-recognition searches against state or FBI databases using systems built by contractors such as Cognitec, IDEMIA and NEC. But the rollout by Amazon has marked perhaps the biggest step in making the controversial face-scanning technology mainstream. Rekognition is easy to activate, requires no major technical infrastructure, and is offered to virtually anyone at bargain-barrel prices. Washington County spent about $700 to upload its first big haul of photos, and now, for all its searches, pays about $7 a month.<sup>1</sup> \n    </p>\n    <p>Whether government services or commercial enterprise, the landscape  is converting <i>en masse</i> the manual and the mundane to machine learning.  Public advocacy, now-g5 23 more than ever, can help direct A.I. technology and use toward a more society-friendly endeavor ...</p>\n\t';
    var blogcite3 = ' \n \n\t<p>1.\n\t<a href="https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a" target="_blank">https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a</a>\n\t</p>\n    \n    ';

    var blogpost2 = '  \n    <p class="firstparagraph">Ethereum Ether and Bitcoin have plenty in common, including their Proof-of-Work architecture--requiring Mining computationally difficult math problems to create scarcity and other functions. The downside is the nation-comparable amount of electricity spent each year, which in many cases are unregulated, coal-filled energy sources across the globe. This commonality will end next month when the Ethereum cryptocurrency will transition to Proof-of-Stake architecture, the long-ago and highly anticipated Ethereum 2.0.\n    </p> \n    <p class="quote"> \n    Ethereum has been inching toward a major upgrade, dubbed ethereum 2.0, which would radically change the how the $17 billion network creates blocks and verifies transactions. As explained by founder of ethereum Vitalik Buterin in a recent interview at ethereum conference ETHCapetown, ethereum 2.0 has \u201Ctwo major flagship components.\u201D\n    <br /><br />\n    \u201COne is Casper, which is our proof-of-stake algorithm which replaces mining\u2026with something that we consider to be much more efficient,\u201D Buterin said at the time. \u201CThe second part is sharding which is this massive scalability improvement which happens because you don\u2019t need every computer in the network to process every transaction in the network any more.\n    <br /><br />\n    Buterin added that with sharding, he anticipates a \u201C1,000 factor increase in scalability\u201D to the network. However, sharding will only come in the later two phases of ethereum 2.0 roll-out. The first phase \u2013 dubbed Phase Zero \u2013 strictly launches ethereum\u2019s new proof-of-stake blockchain.\n    <sup>1.</sup>\n    </p>\n    \n    <p>The second improvement accentuates Ethereum\'s contract-capable currency (unlike Bitcoin\'s lack of contractual functionality), which means to revolutionize not only how data is persisted but also distributed, and managed at the individualized crypto-level! Using a language called <i>Solidity</i>, derived from Java and JavaScript origins, this crypto-currency stands first in line for upsetting the existing systems of finance, manufacture, and enterprise data. An exemple use-case ...\n   \n    </p>\n    \n    <p class="quote"> \n    In the United States, healthcare comes from a patchwork of private companies, which means the handling of patient data is even more fragmented. John Halamka, chief information officer at Beth Israel Deaconess Medical Center in Boston, Massachusetts, told MIT Technology Review last year that there are 26 different electronic medical records systems in his home city alone.\n    <br /><br />\n    In 2016, Halamka teamed up with a group of scientists at MIT to try to find a solution to the problem using blockchain. They published their white paper on the subject in August 2016, laying out their proposal for a system that would help all those disparate databases exchange data\u200A\u2014\u200Aa project they called MedRec.\n    <br /><br />\n    Andy Lippman, a senior research scientist at MIT, co-authored the paper with Halamka. The system they outlined was to use Ethereum software\u200A\u2014\u200Awhich, unlike bitcoin, can integrate and execute smart contracts\u200A\u2014\u200Ato build a private blockchain, linking healthcare providers together and allowing them to share their data.\n    <sup>2.</sup>\n    </p>\n    <p>So, as usual, Ethereum wins the day for both daily applicability and now a more scalable <strong><i>and</i> conscientious</strong> crypto-currency Tech!\n\t';

    var blogcite2 = ' \n      \n  <p class="cite">1. \n  <a href="https://www.coindesk.com/code-for-ethereums-proof-of-stake-blockchain-to-be-finalized-next-month" target="_blank"> https://www.coindesk.com/code-for-ethereums-proof-of-stake-blockchain-to-be-finalized-next-month</a>\n  \n  </p>\n  \n      \n  <p class="cite">2. [Post article 2/20/18]\n  <a href="https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e" target="_blank">https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e</a> </p>\n  \n  ';
    var blogpost1 = ' \n  \n  <p class="firstparagraph">Data Analytics\' <i>Law of Large Numbers</i>, i.e. over n = 10,000, promises a predictable likelihood of conditions and events, given a sufficiently high sample of training data. Despite the quantum-directed molecular behavior of biological organisms, the classical exponentiation of machine-learning statistical algorithms still does work miracles:  \n  </p> \n  \n  <p class="quote"> \n  Studies indicate that using algorithms to analyze digital slides delivers diagnoses as accurate as an expert pathologist\u2014and in some instances, the algorithms are more accurate. A 2018 study by Massachusetts General Hospital and MIT found that an automated system they developed diagnosed dense breast tissue (an indicator of breast cancer) in mammograms at the same level as an expert radiologist. Another algorithm developed by Google was found to \u201Chelp detect metastatic breast cancers with significant accuracy and improve pathologist performance,\u201D according to studies in the Archives of Pathology and Laboratory Medicine and the American Journal of Surgical Pathology.\n  </p>\n  So, how can we best take advantage of these advances? Clear the brush! The meta-organization of healthcare technology and financing simply can\'t keep pace with the pure tech:\n  <p class="quote">\n  After taking a look, the pathologist might ship it to a specialist at another lab for a second opinion. Each time the slide is moved, it is packed up and shipped to a different address. All the while, you\u2019re waiting days or even weeks to hear whether or not you have cancer.\n<br /><br />\n  For decades, there have been limited ways to share medical slides, with information management lagging behind even as medical science advanced. But in the past few years, a new industry of digital pathology has emerged that could finally offer a more efficient and large-scale way of distributing and analyzing these kinds of samples.\n  <sup>1</sup>\n  </p>\n  <p>So, the good news from <i>the doctors\'</i> occasional nemesis, U.S. Food and Drug Administration, decided that after 8 years of trials and hearings, truly scalable and sufficiently large sample data can now be digitized - hence personalizing the law of large numbers from the whole to the individual patient. At long last, the patience has paid off!\n  ';
    var blogcite1 = '\n  \n  \n  <p>1. [Post article 2/22/19]\n  <a href="https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8" target="_blank">\n  https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8\n  </a>\n  </p>\n  \n  ';

    var url = [{
        id: '30',
        did: '19-05-30',
        date: 'May 30, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'All\'s Fair in War and Peace, but Not in Trade! Part II: <br />Material Substitutes',
        post: blogpost30,
        cite: blogcite30
    }, {
        id: '29',
        did: '19-05-29',
        date: 'May 29, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'All\'s Fair in War and Peace, but Not in Trade! Part I: <br />When the Dogs of War take a Bite out of Tech',
        post: blogpost29,
        cite: blogcite29
    }, {
        id: '18',
        did: '19-05-21',
        date: 'May 21, 2019 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'The Politics of Tech',
        post: blogpost18,
        cite: blogcite18
    }, {
        id: '17',
        did: '19-05-20',
        date: 'May 20, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Procrastinating a Quantum Leap are We?',
        post: blogpost17,
        cite: blogcite17
    }, {
        id: '16',
        did: '19-05-18',
        date: 'May 18-19, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost16,
        cite: blogcite16
    }, {
        id: '15',
        did: '19-05-17',
        date: 'May 17, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost15,
        cite: blogcite15
    }, {
        id: '14',
        did: '19-05-16',
        date: 'May 16, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'M',
        title: '',
        post: blogpost14,
        cite: blogcite14
    }, {
        id: '13',
        did: '19-05-15',
        date: 'May 15, 2019 ',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost13,
        cite: blogcite13
    }, {
        id: '12',
        did: '19-05-14',
        date: 'May 14, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost12,
        cite: blogcite12
    }, {
        id: '11',
        did: '19-05-13',
        date: 'May 13, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Satoshi \'Le Roux\' Nakamoto?',
        post: blogpost11,
        cite: blogcite11
    }, {
        id: '10',
        did: '19-05-11',
        date: 'May 11-12, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Finite Bitcoin',
        post: blogpost10,
        cite: blogcite10
    }, {
        id: '9',
        did: '19-05-10',
        date: 'May 10, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'The Long and Ubiquitous Reign of Linux OS',
        post: blogpost9,
        cite: blogcite9
    }, {
        id: '8',
        did: '19-05-09',
        date: 'May 9, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: ' ',
        title: ' ',
        post: blogpost8,
        cite: blogcite8
    }, {
        id: '7',
        did: '19-05-08',
        date: 'May 8, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Toward a Smarter Bitcoin, Part II:<br />Designing a More Scalable and Private Crypto-Currency',
        post: blogpost7,
        cite: blogcite7
    }, {
        id: '6',
        did: '19-05-07',
        date: 'May 7, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Toward a Smarter Bitcoin, Part I:<br />Contracting a More Functional Crypto-Currency',
        post: blogpost6,
        cite: blogcite6
    }, {
        id: '5',
        did: '19-05-05',
        date: 'May 6, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: '<i>What is Love? Baby, Baby Don\'t Hurt Me No More! </i><sup>0</sup> Part II:<br /><br />Bitcoin\'s Palaentology Deepens the Founder\'s Obscurity',
        post: blogpost5,
        cite: blogcite5
    }, {
        id: '4',
        did: '19-05-04',
        date: 'May 4 - 5, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: '<i>What is Love? Baby, Baby Don\'t Hurt Me No More! </i><sup>0</sup> Part I:<br /><br />Paparazzi Sighting of our Bitcoin Father: <br />Adoring Adulation or Privacy Invasion?',
        post: blogpost4,
        cite: blogcite4
    }, {
        id: '3',
        did: '19-05-03',
        date: 'May 3, 2019  ',
        author: 'by Thomas Maestas, MA',
        cat3: 'A.I.Now.',
        title: 'Rekognize Me?',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '19-05-02',
        date: 'May 2, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Modern Healthcare, Part II:<br />The Scalable and Clean Data Platform',
        post: blogpost2,
        cite: blogcite2
    }, {
        id: '1',
        did: '19-05-01',
        date: 'May 1, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'A.I.Now.',
        title: 'Modern Healthcare, Part I:<br />On the Second Opinion of 10,000 Doctors',
        post: blogpost1,
        cite: blogcite1
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-may19").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-may19-mod").innerHTML += catMod;
    }

    console.log('blogger-may-19');
    // console.log(angular.toJson(url));
};

bloggerMay19();

/***/ })
/******/ ]);