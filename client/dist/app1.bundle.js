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
__webpack_require__(5);
__webpack_require__(6);
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


var url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {

  if (xhttp.readyState == 4 && xhttp.statusText == "OK") {
    console.log("onreadystate changed- xhttp.statusText: " + xhttp.statusText);
    var result = JSON.parse(this.responseText);
    console.log("this.responseText: " + this.responseText);
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
  } /// IF 200
};
xhttp.open("GET", url, true);
xhttp.send();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMarch20 = function bloggerMarch20() {

    //   var blogpost11 =  `<p>
    //     </p>
    //     <p class="quote">Graphene batteries are one of the fastest energy-storing solutions available, globally. Graphene utilized as electrode material in batteries needs to be of high quality, that is, single to few layered graphene.<sup>1</sup>
    //     </p>
    //     <p class="quote">
    //     `
    //      var blogcite11 =    ` 
    //       <p>1. <a  target="_blank" href="https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/">https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/</a> 
    // </p>
    // <p>2. <a  target="_blank" href="https://www.graphene-info.com/graphene-batteries">https://www.graphene-info.com/graphene-batteries</a> </p>  
    // <p>3. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a> 
    // </p>  
    //   `;
    //     var blogpost10 = `<p>The Nuts &amp; Bolts of one of graphene's contributions ...
    //     </p>
    //     <p class="quote">When a lithium-ion battery is charging, lithium ions flow to the anode, which is typically made of a type of carbon called graphite. If you swap graphite for silicon, far more lithium ions can be stored in the anode, which increases the energy capacity of the battery. But packing all these lithium ions into the electrode causes it to swell like a balloon; in some cases, it can grow up to four times larger.
    // <br /><br />
    // The swollen anode can pulverize the nanoengineered silicon particles and rupture the protective barrier between the anode and the battery’s electrolyte, which ferries the lithium ions between the electrodes. Over time, crud builds up at the boundary between the anode and electrolyte. This both blocks the efficient transfer of lithium ions and takes many of the ions out of service. It quickly kills any performance improvements the silicon anode provided.
    // <br /><br />
    // One way out of this problem is to sprinkle small amounts of silicon oxide—better known as sand—throughout a graphite anode. This is what Tesla currently does with its batteries. Silicon oxide comes pre-puffed, so it reduces the stress on the anode from swelling during charging. But it also limits the amount of lithium that can be stored in the anode. Juicing a battery this way isn’t enough to produce double-digit performance gains, but it’s better than nothing.
    // <br /><br />
    // Cary Hayner, cofounder and CTO of NanoGraf, thinks it’s possible to get the best of silicon and graphite without the loss of energy capacity from silicon oxide. At NanoGraf, he and his colleagues are boosting the energy of carbon-silicon batteries by embedding silicon particles in graphene, graphite’s Nobel Prize-winning cousin. Their design uses a graphene matrix to give silicon room to swell and to protect the anode from damaging reactions with the electrolyte. Hayner says a graphene-silicon anode can increase the amount of energy in a lithium-ion battery by up to 30 percent.<sup>1</sup>
    //     </p>
    //     `
    //      var blogcite10 =    ` 
    //       <p>1. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a>  </p>

    //       <!-- <p>2. <a  target="_blank" href=""></a> </p>  -->  `;

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

    var url = [
    //   {
    //     id: '11',
    //     did: '20-03-17',
    //     date: 'March 17, 2020 ',
    //     author: 'by Thomas Maestas, MA',
    //     cat3: 'Sociology Tomorrow!',
    //     title: 'Graphene Relief: Batteries\' Demand',
    //     post: blogpost11,
    //     cite: blogcite11
    // },
    //   {
    //     id: '10',
    //     did: '20-03-16',
    //     date: 'March 16, 2020 ',
    //     author: 'by Thomas Maestas, MA',
    //     cat3: 'Sociology Tomorrow!',
    //     title: 'Graphene Relief: Batteries\' Context',
    //     post: blogpost10,
    //     cite: blogcite10
    // },
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMarch19 = function bloggerMarch19() {
    /*
    https://medium.com/s/teamhuman/the-right-kind-of-ai-with-kenric-mcdowell-7481b239a0cb
      https://medium.com/hummingbird-ventures/a-brief-history-of-blockchain-an-investors-perspective-387c440ad11c
      https://medium.com/@thinkoutsidetheblox/why-bitcoin-and-crypto-have-no-future-4f95980bb774
      https://medium.com/mit-technology-review/explainer-what-is-quantum-communication-527bb0f5d987
      https://media.consensys.net/18-predictions-for-2018-7a376ea7bd4b
      https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e
      https://medium.com/mit-technology-review/russia-wants-to-cut-itself-off-from-the-global-internet-heres-what-that-really-means-c6f8851987ca
    
      https://onezero.medium.com/computer-generated-faces-are-getting-real-b32e8902586d
      https://medium.com/s/story/the-best-strategies-to-boost-your-willpower-5eb1b2d9af2b
     
    */

    var blogpost3 = '\n    <p class="firstparagraph">AWS Rekognition, a premier service among dozens of others, is like all AI software along with a Platform-as-a-Service necessarily reflects the biases of its origin lab. Alternately, AWS\' democratizing access to every student, professional, and researcher the unlimited use of sophisticated and expensive AI resources;thus hedging any potential bias to diverse individual\'s and team\'s participation.  At the heart of these healthy public debates, it\'s the particular use-cases that exemplify the spectrum of the debate. For instance, policing practice by bot is a sure example, if not for the <i>RoboCop</i> Hollywood allure ... As always, the AI\'s algorithm bears the imprint of the creator\'s intentions: </p>\n\t\n\t<p class="quote"> \n\tBut Washington County also became ground zero for a high-stakes battle over the unregulated growth of policing by algorithm. Defense attorneys, artificial-intelligence researchers and civil rights experts argue that the technology could lead to the wrongful arrest of innocent people who bear only a resemblance to a video image. Rekognition\u2019s accuracy is also hotly disputed, and some experts worry that a case of mistaken identity by armed deputies could have dangerous implications, threatening privacy and people\u2019s lives.<br /><br />\n\nSome police agencies have in recent years run facial-recognition searches against state or FBI databases using systems built by contractors such as Cognitec, IDEMIA and NEC. But the rollout by Amazon has marked perhaps the biggest step in making the controversial face-scanning technology mainstream. Rekognition is easy to activate, requires no major technical infrastructure, and is offered to virtually anyone at bargain-barrel prices. Washington County spent about $700 to upload its first big haul of photos, and now, for all its searches, pays about $7 a month.<sup>1</sup> \n    </p>\n    <p>Whether government services or commercial enterprise, the landscape  is converting <i>en masse</i> the manual and the mundane to machine learning.  Public advocacy, now more than ever, can help direct A.I. technology and use toward a more society-friendly endeavor ...</p>\n\t';

    var blogcite3 = ' \n \n\t<p>1.\n\t<a href="https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a" target="_blank">https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a</a>\n\t</p>\n    \n    ';

    var blogpost2 = '\n  <p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s\n  headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:\n  Cryptojacking.\n  <i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>\n  \n  <p class="quote">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone\n  to overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much\n  heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason\n  for the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.\n  <sup>1</sup>\n  </p>\n  \n  <p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or\n  Apple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded\n  apps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat\n  hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one\n  of which is the onset of Decentralized Applications (DAPPs), which use the\n  <i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of\n  the blockchain (via WEB).</p>\n  \n  <p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since\n  1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the\n  browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the\n  highly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.\n  PHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>\n  \n  <p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of\n  JavaScript</p>\n  \n\t';

    var blogcite2 = ' \n     \n       \n      \n  \n  <p>1.\n  <a href="https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8" target="_blank">\n  https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8\n  </a>\n  </p>\n  ';
    var blogpost1 = '\n  <p class="firstparagraph"> \n  <sup>2</sup>\n  </p>\n  \n  <p> </p>\n  \n  \n  <p class="quote"> \n  <sup>1</sup>\n  </p>\n  \n  <p>\n \n  </p>\n  \n\t';

    var blogcite1 = ' \n  <p>1.\n  <a href="https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a" target="_blank">https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a</a>\n  </p>\n   \n  ';
    var url = [{
        id: '3',
        did: '19-03-03',
        date: 'March 3-4, 2018 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'A Return to the Question of Guns, Germs, and Steel',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '19-03-02',
        date: 'March 2, 2018',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'Widening Circles of Mobile-App Security Risks',
        post: blogpost2,
        cite: blogcite2
    }, {
        id: '1',
        did: '19-03-01',
        date: 'March 1, 2018',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Blockchain Sustainability Issues and The Double-Edged Sword',
        post: blogpost1,
        cite: blogcite1
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-march19").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-march19-mod").innerHTML += catMod;
    }

    console.log('blogger-march19');
    // console.log(angular.toJson(url));
};

bloggerMarch19();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/'use strict'; https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html
// 'use strict';  

//june 
// http://nautil.us/issue/64/the-unseen/the-fourth-copernican-revolution
// https://www.theatlantic.com/science/archive/2018/09/your-dna-is-not-your-culture/571150/

var bloggerJan = function bloggerJan() {

  var blogpost1790 = '<p class="firstparagraph">Bitcoin\'s carbon footprint -- matching yearly Kilowatt usage as Portugul -- shows an example of the need to improve the technology. The Electrical drain from "Proof-of-Work" blockchain designs, like Ethereum and Bitcoin, makes the demand of scarcity through computationally difficult \'blocks\'. That is the \'weight\' worth in gold, at least cryptographically: <strong>A computer had to sweat alot so that <i>I</i> could own a piece of bitcoin.</strong> The problem is this makes for a lot of hot computing around the globe--a problem that grows with more ecological climate change.</p>\n\n  <p class="quote">Developers plan to ditch proof-of-work, the algorithm that the network currently uses to determine which transactions are valid and protect it from tampering, in favor of proof of stake, where the network is secured by the owners of tokens.\n<br /><br />\n  If and when that algorithm is rolled out, proof-of-stake could be a means for achieving distributed consensus that uses fewer resources.<sup>1</sup>\n  </p>\n  <p>So this is the conundrum with a long-term blockchain plans for ecological responsibility. Right now, Environmental hopes, like mine, are invested in Ethereum\'s planned migration to a "Proof-of-Stake" design... \n  </p>\n  <p class="quote">   At the cutting edge of blockchain research is a potential $15 million dollar venture by the Ethereum Foundation centered around a technology called Verifiable Delay Functions (VDFs).\n\n  Acting as a source of computer-generated randomness that is unpredictable and unbias-able, VDFs are envisioned for use in a highly-anticipated \u201Cproof-of-stake\u201D(PoS) system called Serenity which the ethereum network will migrate to in the next few years.\n  \n  What\u2019s more, the ability to generate secure randomized numbers \u2013 if implemented in Serenity \u2013 would be a feature that can be leveraged by all decentralized applications (dapps) on the platform once integrated into the ethereum codebase.\n<br />\n    <br />  \n    Speaking to current viability studies on VDF technology, Ethereum Foundation researcher Justin Drake told CoinDesk:\n    \n    \u201CWe\u2019re basically doing all this groundwork to make an informed go, no-go decision on the bigger project. The bigger project is 15 million dollars on that order of magnitude. So we want to make sure that if we do go ahead it\u2019s going to be successful.\u201D<sup>2</sup>\n  </p> \n  <br />\n  <img src="dist/img/bitcoin.jpg" class="zoom"   /><br />\n  <p class="cite">Photo: <a href="https://digiconomist.net/bitcoin-energy-consumption">https://digiconomist.net/bitcoin-energy-consumption</a></p> ';
  var blogcite1790 = '\n  <p class="cite">1. (background)<a target="_blank" href="https://www.coindesk.com/ethereum-foundation-weighs-15-million-bid-to-build-randomness-tech">\n  https://www.coindesk.com/ethereum-foundation-weighs-15-million-bid-to-build-randomness-tech</a></p>  \n\n  <p class="cite">2. <a target="_blank" href="https://www.coindesk.com/information/ethereum-mining-works">\n  https://www.coindesk.com/information/ethereum-mining-works</a></p>  \n  ';

  var blogpost1789 = '<p class="firstparagraph">Oracle the Great. Oracle the Fast. Oracle the Secure Database stands high among all Tech Giants. After all, aren\'t 99 out of a hundred SAP setups on Oracle DBs? ...with maybe an IBM DB2 on a blue moon. The Cloud Greats like Amazon, for instance, run their own servers using Oracle hardware--even their Aurora DB is a rendition of Oracle\'s legacy MySQL ...  \n  </p><p>Such power <i>requires</i> trust in order to thrive. Yet it looks like Oracle\'s hyper-competitive <i>and possibly suspect</i> collecting habit of personal and marketing data makes for a real, even existential, conflict of interest vis-&agrave;-vis customers, and customers of customers:  </p>\n  <p class="quote">Facing tough questions about its practices over the past year, Oracle\u2019s advertising software division, known as Data Cloud, has implemented previously unreported dismissals. While Data Cloud has always been a small part of Oracle\u2019s overall sales, Hurd, co-founder Larry Ellison, and other executives repeatedly cited it over the years as a bright spot in their otherwise humdrum business. That appears to be over. Investment bank Stifel Nicolaus & Co. estimates that Data Cloud delivered only about $500 million of Oracle\u2019s $40 billion in sales last year. \u201CWhat happened over the past couple years is, the nebulous concerns people may have had about what companies were doing with personal data all of a sudden became very real,\u201D says Blair Hanley Frank, an analyst at ISG, a technology research and advisory firm. \u201CThe risk to Oracle in all of this is what seemed like a somewhat ignorable value-add business a few years ago could all of a sudden become a big scary bugbear.\u201D\n  </p>  ';
  var blogcite1789 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming">\n  https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming</a></p>  \n \n  ';
  var blogpost1788 = '<p class="firstparagraph">Oracle\'s lofty role of providing the globe\'s finest and fastest databases, also means a commitment--to some degree--of respect for privacy data. This power does require trust in order to survive: And, it looks like Oracle\'s hyper-competitive <i>and possibly suspect</i> (or negligent at best) habit equates <i>and in turn helps monetize</i> the ties and boundaries between personal data and marketing data ...  </p>\n  <p class="quote">   \n    If Company X wants to, it can ask Oracle to find people looking at images of its SUV, add the information to its consumer profiles, and then upload the data to Facebook, where the carmaker can target those people with ads for the same model.\n  \n    <br />\n    That last part has gotten tougher in the past year. In March, after the Cambridge Analytica scandal revealed just how casually Facebook Inc. had shared user data with other companies for years, the social network\u2019s clampdown on its own systems became a serious problem for Oracle ...<sup>1</sup>\n  </p> \n  <br />\n  <img src="dist/img/oracle.jpg" class="zoom" width="340px" /> ';
  var blogcite1788 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming">\n  https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming</a></p>  \n \n  ';
  var blogpost1786 = '<p class="firstparagraph">Hecdraclitus\' iconic maxim, "that no man has stepped into the same river twice, for it\'s not the same river <i> and he\'s not the same man.</i>" This phrasing underscores that Earth is a living, evolving organic Ecosystem, just like man/woman-kind makes for an evolving being, too. How much moreso, given our symbiosis with Earth. So, the future is double blind--making Life all the more interesting!</p>\n  <p class="quote">\n\n  Magnetic north has never sat still. In the last hundred years or so, the direction in which our compasses steadfastly point has lumbered ever northward, driven by Earth\'s churning liquid outer core some 1,800 miles beneath the surface. Yet in recent years, scientists noticed something unusual: Magnetic north\'s routine plod has shifted into high gear, sending it galloping across the Northern Hemisphere\u2014and no one can entirely explain why.\n  <br /><br />  \n  The changes have been so large that scientists began working on an emergency update for the World Magnetic Model, the mathematical system that lays the foundations for navigation, from cell phones and ships to commercial airlines. But then the U.S. government shut down, placing the model\'s official release on hold, as Nature News first reported earlier this year.<sup>1</sup>\n  </p>  ';
  var blogcite1786 = '\n  <p class="cite">1. <a target="_blank" href="https://www.nationalgeographic.com/science/2019/02/magnetic-north-update-navigation-maps">\n  https://www.nationalgeographic.com/science/2019/02/magnetic-north-update-navigation-maps</a></p>  \n \n  ';
  var blogpost1785 = '<p class="firstparagraph">Memorization is a cultural topic and, contrary to many opinions, technology can\'t be directly blamed for waning interest. I helped judge a Speech and Debate Tournement last month, and there are no shortage of texting high-schoolers that <i>also happen to memorize long passsages of historical and political works</i>. Yet, this author makes some points about how far society has drifted ...</p>\n  <p class="quote">Before every smidgen of knowledge was a mere Google search away, it was customary for students to memorize great works, from poems to famous political speeches to religious passages. In antiquity, "there were elaborate mnemotechnic ways of memorizing speeches," explained Katharina Volk, the director of undergraduate Classics studies at Columbia University, citing the method of Ioci and Ars Memorativa.  \n  <br /><br /> \n   It was also customary to memorize far more prosaic works: In the U.S. and U.K. in the 19th century, "memorization was the default learning technique across the whole curriculum," said Catherine Robson, the author of Heart Beats: Everyday Life and the Memorized Poem. "To learn your lesson was to learn the passage in the textbook about the geography of Iowa. When it was your turn to be examined by the teacher, in the U.S. system you would go up to the recitation bench and you would recite that paragraph."\n \n  <sup>1</sup>\n  </p>\n  <p>So, is the declining practice of memorization a function of culture or technology, or rather merely a cultural aberration that might revive, and catch on like the next big fad?</p>';

  var blogcite1785 = '\n  <p class="cite">1. <a target="_blank" href="https://theweek.com/articles/820197/lost-art-memorization">\n  https://theweek.com/articles/820197/lost-art-memorization</a></p>  \n \n  ';
  var blogpost1784 = '<p class="firstparagraph"> </p>\n  <p class="quote">Gates\' prediction: "Automated price comparison services will be developed, allowing people to see prices across multiple websites, making it effortless to find the cheapest product for all industries."\n  <br /><br /> \n  Gates\' prediction: "\'Personal companions\' will be developed. They will connect and sync all your devices in a smart way, whether they are at home or in the office, and allow them to exchange data. The device will check your email or notifications, and present the information that you need. When you go to the store, you can tell it what recipes you want to prepare, and it will generate a list of ingredients that you need to pick up. It will inform all the devices that you use of your purchases and schedule, allowing them to automatically adjust to what you\'re doing."\n \n  <sup>1</sup>\n  </p>\n  <p>The author of future technologies does offer a certain vantage point over the horizon ...</p>';

  var blogcite1784 = '\n  <p class="cite">1. <a target="_blank" href="https://www.entrepreneur.com/slideshow/327229">https://www.entrepreneur.com/slideshow/327229</a></p>  \n \n  ';

  var blogpost178 = '<p class="firstparagraph">Photography\'s trajectory spanning three centuries makes for a common thread of experience: <i>The Art of the Image Capture</i> lives above the mere tools for the job--whether a flash-bulb, or dark-room, or yes, an experience with the likes of \'Tappy\' the Extraordinary Phone Bot!</p>  \n  <p class="quote">\n  It takes a lot of time and processing power to train an algorithm like this, but after the data centers have done their thing, it can be run on low-powered mobile devices without much trouble. The heavy-lifting work has already been done, so once your photos are uploaded to the cloud, Google can use its model to analyze and label the whole library. About a year after Google Photos was launched, Apple announced a photo search feature that was similarly trained on a neural network, but as part of the company\u2019s commitment to privacy the actual categorization is performed on each device\u2019s processor separately without sending the data. This usually takes a day or two and happens in the background following setup.<sup> 1</sup>\n  \'</p>  ';
  var blogcite178 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theverge.com/2019/1/31/18203363/ai-artificial-intelligence-photography-google-photos-apple-huawei">\n  https://www.theverge.com/2019/1/31/18203363/ai-artificial-intelligence-photography-google-photos-apple-huawei</a></p>  \n \n  ';

  var blogpost177 = '<p class="firstparagraph">URL dramas are never short of controversy--this, making the theme of my <a href="#09-04-18">Sept. 4th post </a>exploring the unfathomable task. There is but one likely outcome: a bifurcated internet: Imagine futre hang-ups resembling inconsistencies and incompatible experiences, <i>like, say ... the seemingly Immortal and Persistently Awkward Internet Explorer 11</i>.</p>  \n  <p class="quote">   \n  In September, members of Google\'s Chrome security team put forth a radical proposal: Kill off URLs as we know them. The researchers aren\'t actually advocating a change to the web\'s underlying infrastructure. They do, though, want to rework how browsers convey what website you\'re looking at, so that you don\'t have to contend with increasingly long and unintelligible URLs\u2014and the fraud that has sprung up around them. In a talk at the Bay Area Enigma security conference on Tuesday, Chrome usable security lead Emily Stark is wading into the controversy, detailing Google\'s first steps toward more robust website identity.<sup>1</sup>\n  </p><p>And yet, as my September post wondered: Since there <i>are</i> needs, as much as there was a need for asphalt roads, directly following the <i>vulkanizing</i> new opportunities for rubber tires. The inevitable Univorm Resource Locator revolution does loom, but <i>is Now</i> the timing right for the times?<sup> 1</sup></p>';
  var blogcite177 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/google-chrome-kill-url-first-steps">\n  https://www.wired.com/story/google-chrome-kill-url-first-steps</a></p>  \n \n  ';

  var blogpost176 = '<p class="firstparagraph"><i>Tappy</i> may not look like a kind of high-stakes value-item, compared with a Hollywood story like "Chappie" with Hugh Jackman. A story featuring  Factions fighting over control of one artistic, talented droid-bot. Yet, with equally high drama, it sounds like the stakes got raised to international proportions, for... for a phenomenal T-Mobile phone-tester bot... \n  </p>\n  <p class="quote">A grand jury in Seattle has charged Huawei with conspiracy to steal trade secrets, attempted theft of trade secrets, seven counts of wire fraud and one count of obstruction of justice for the company\u2019s alleged attempts to move potential witnesses back to China. The indictments grew out of a civil suit dating all the way back to 2014 in which T-Mobile sued Huawei for stealing trade secrets related to a robotic phone-testing device known as \u201CTappy.\u201D <sup>1</sup></p>\n <p>It looks like high justice will be served for "Tappy" the <i>phenomenal</i> phone-tester bot... Talk about dramatic escalation!<p>\n  </p>  ';
  var blogcite176 = '\n  <p class="cite">1. <a target="_blank" href="https://techcrunch.com/2019/01/28/huawei-us-meng-wanzhou-doj">\n  https://techcrunch.com/2019/01/28/huawei-us-meng-wanzhou-doj</a></p>  \n \n  ';
  var blogpost175 = '<p class="firstparagraph">TechCrunch Disrupt! 2018 hailed an A.I. startup named Kairos<sup> 0</sup> that addressed this same dilemma: How do you accurately report results when faced with disproportionate sampling due to  variance differences between stratification layers? Can you balance one group with one-hundred fold more data-points? And, equally polarized is the inferential freedoms needed to report statistically significant results with small-sample algorithms.</p> \n  </p>\n  <p class="quote">Amazon\'s Rekognition software incorrectly identified women as men 19 percent of the time, according to the study. In addition, it incorrectly identified darker-skinned women as men 31 percent of the time, it says. Software from Microsoft, by comparison, identified darker-skinned women as men 1.5 percent of the time.\n<br /><br />\nMatt Wood, general manager of artificial intelligence at Amazon Web Services, said that the study\'s test results are based on facial analysis, not facial recognition. Analysis, he said, can find faces in videos or images and assign generic attributes, such as the wearing of glasses. Recognition, he said, matches an individual\'s face to images in videos and photographs. The Rekognition technology includes both of these functionalities. <sup>1</sup>\n  </p> \n  <p>\n  <p>So, software considerations can be equally important to plain-old hardware limitations. So in all fairness, must technology\'s capabilities keep pace with politically-correct results? As they say, Why make it a federal case? \n  </p>\n  ';
  var blogcite175 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnet.com/news/amazons-facial-tech-shows-gender-racial-bias-mit-study-says/">\n  https://www.cnet.com/news/amazons-facial-tech-shows-gender-racial-bias-mit-study-says/</a></p>  \n\n  <p class="cite">0. <a target="_blank" href="https://www.kairos.com">\n  https://www.kairos.com</a></p>  \n \n  ';
  var blogpost174 = '<p class="firstparagraph">History does its own stunts. Internet History all the more, and the cast and crew could not have been better picked: Here is an  \nArchival Bests: <i>July 2016</i>\n  </p>\n  <p class="quote">The internet is so vast and formless that it\u2019s hard to imagine it being invented. It\u2019s easy to picture Thomas Edison inventing the lightbulb, because a lightbulb is easy to visualize. You can hold it in your hand and examine it from every angle.\n<br /><br />\nThe internet is the opposite. It\u2019s everywhere, but we only see it in glimpses. The internet is like the holy ghost: it makes itself knowable to us by taking possession of the pixels on our screens to manifest sites and apps and email, but its essence is always elsewhere.\n<br /><br />\nThis feature of the internet makes it seem extremely complex. Surely something so ubiquitous yet invisible must require deep technical sophistication to understand. But it doesn\u2019t. The internet is fundamentally simple. And that simplicity is the key to its success.<sup>1</sup>\n  </p>  ';
  var blogcite174 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theguardian.com/technology/2016/jul/15/how-the-internet-was-invented-1976-arpa-kahn-cerf">\n  https://www.theguardian.com/technology/2016/jul/15/how-the-internet-was-invented-1976-arpa-kahn-cerf</a></p>  \n  \n  ';

  var blogpost173 = '<p class="firstparagraph"> My new Samsung 40" Best Buy Special has shined yet  has also had trying moments. An every-once-in-a-while frozen desktop screen -- <i>perma-frozen until a couple hard resets.</i> In my opinion, nothing\'s out of the ordinary--they\'re just finicky, just like the 90\'s computers, it\'s called big plans with small hardware platforms--mole hills become mountains. Service in-fighting for precious memory resources! The hard thinking and the hardest problems, starting with ...I\'m frozen, how do I turn on and off?. \n  </p>\n  <p class="quote">I tried the obvious things. I turned off the TV and turned it back on. Same problem. Unplugged, replugged. Happened again. Reset the cable box just to try it. Again. Made the sign of the cross. Checked for software updates for the television. Threw my phone. Screamed into the abyss. But. It. Just. Kept. Happening.\n\n  Finally, I turned to the consumer micro-solidarity available in the support forums. Based on the outraged responses of other Samsung TV owners, the issue began sometime in September. No one knows how to fix it. And because of a deal that Samsung struck with app makers, you can\u2019t delete the app from your own TV.<sup>1</sup>\n  </p>  ';
  var blogcite173 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theatlantic.com/technology/archive/2019/01/smart-tvs-are-dumb/581059/">\n  https://www.theatlantic.com/technology/archive/2019/01/smart-tvs-are-dumb/581059/</a></p>  \n  \n  ';

  var blogpost172 = '<p class="firstparagraph">Yet another reason to moderate on that Eco-Expensive red meat ...  \n  </p>\n  <p class="quote"> We now have so many interconnected food-related crises \u2014 climate change, pollution, and food waste, not to mention malnutrition and obesity \u2014 that it will be impossible to feed the 10 billion people expected by 2050 unless we make dramatic changes to our diets and farming practices, the researchers argue.<br /><br />\n\n  What\u2019s needed, according to the peer-reviewed report, titled \u201CFood in the Anthropocene: The EAT-Lancet Commission on healthy diets from sustainable food systems,\u201D is a new philosophy for how to eat on planet Earth. Though there are huge variations around the world in what and how much we consume, we are all in this existential crisis together.<sup>1</sup>\n  </p>  ';
  var blogcite172 = '\n  <p class="cite">1. <a target="_blank" href="https://www.vox.com/2019/1/23/18185446/climate-change-planet-based-diet-lancet-eat-commission">\n  https://www.vox.com/2019/1/23/18185446/climate-change-planet-based-diet-lancet-eat-commission</a></p>  \n  \n  ';
  var blogpost171 = '<p class="quote">Popular Mechanics reports:\n  </p>\n  <p class="quote"> The thing that\u2019s counterintuitive about the stainless steel is, it\u2019s obviously cheap, it\u2019s obviously fast\u2014but it\u2019s not obviously the lightest. But it is actually the lightest. If you look at the properties of a high-quality stainless steel, the thing that isn\u2019t obvious is that at cryogenic temperatures, the strength is boosted by 50 percent.<sup>1</sup> \n  </p>  ';
  var blogcite171 = '\n  <p class="cite">1. <a target="_blank" href="https://www.popularmechanics.com/space/rockets/a25953663/elon-musk-spacex-bfr-stainless-steel/">\n  https://www.popularmechanics.com/space/rockets/a25953663/elon-musk-spacex-bfr-stainless-steel/</a></p>  \n  \n  ';
  var blogpost1705 = '<p class="firstparagraph">Copy Cat Accusations from the few mean a slower, more expensive, ad-driven internet experience! \n  </p>\n  <p class="quote">Simply put, the Directive on Copyright places more responsibility on websites such as YouTube, Facebook and Twitter to make sure that copyrighted materially isn\u2019t being illegaly shared on their platforms. Until now, the onus has mostly been on the copyright holders \u2013 usually the companies that produce audio, video or written content \u2013 to enforce copyright protection but under the new law this responsibility will shift onto the major platforms themselves.\n<br /><br />\n  At the heart of the Directive on Copyright are two divisive articles \u2013 Article 11 and Article 13 \u2013 that have been dubbed the \u201Clink tax\u201D and \u201Cmeme ban\u201D articles respectively. Critics of the Directive on Copyright argue that these articles mean that platforms will have to pay a fee to share a link to a news article and have to start filtering and removing memes.<sup>1</sup>  \n  </p>  \n  <p>The effort involved in roping in internet creativity is ...<i> like herding cats?</i>  </p>';
  var blogcite1705 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.co.uk/article/what-is-article-13-article-11-european-directive-on-copyright-explained-meme-ban">  https://www.wired.co.uk/article/what-is-article-13-article-11-european-directive-on-copyright-explained-meme-ban</a></p>  \n  \n  ';

  var blogpost17005 = '<p class="firstparagraph">\n  At the end of the day, every secret lair depends on the software and hardware stewards of the world: Thank goodness for this special class of craftsmen -- <i>defacto</i> alotted the role of connecting every part of the world ...</p>\n  <p class="quote"> \n  A frightened Rodriguez first met Guzman in 2008, at a meeting in the mountains where the Sinaloa Cartel leader had been hiding from authorities after his laundry-cart escape from a Mexican prison years earlier. Rodriguez described being taken to a clandestine airstrip to be flown to the meeting, and says he was met on the ground by "armed military." Rodriguez\'s work initially involved creating an office-like phone extension system for Sinaloa Cartel associates that would allow their conversations to be encrypted, or unable to be intercepted by authorities. Guzman, who did not enjoy working on computers, was pleased with the ability to have protected phone conversations.  <sup>1</sup>  \n  </p>  ';
  var blogcite17005 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnn.com/2019/01/09/americas/el-chapo-it-technician-rodriguez/index.html">https://www.cnn.com/2019/01/09/americas/el-chapo-it-technician-rodriguez/index.html\n   </a></p>  \n  \n  ';

  var blogpost170 = '<p class="quote"> \n  </p>\n  <p class="quote"> The gene therapy would instead give their bodies a working gene for them to make their own factor VIII. But transferring a gene into a person is no easy feat. Genes are long strings of DNA that don\'t readily get inside cells. So therapies typically rely on viruses, which squirt DNA into cells\' nuclei as a way of life. In this case, a virus, modified so that it doesn\'t cause disease, and with the healthy human factor VIII gene added to its DNA, is injected into the body. It then enters the body\'s cells to deposit its cargo, leaving it as a separate piece of DNA in the nucleus next to the host cell\'s genome.<sup>1</sup>  \n  </p>  ';
  var blogcite170 = '\n  <p class="cite">1. <a target="_blank" href="http://digg.com/2019/gene-therapies-immunity">http://digg.com/2019/gene-therapies-immunity\n   </a></p>  \n  \n  ';
  var blogpost169 = '<p class="quote"> \n  </p>\n  <p class="quote"> In his blog, Hunt says a large file of 12,000 separate files and 87GB of data had been uploaded to MEGA, a popular cloud service. The data was then posted to a popular hacking forum and appears to be an amalgamation of over 2,000 databases. The troubling thing is the databases contain \u201Cdehashed\u201D passwords, which means the methods used to scramble those passwords into unreadable strings has been cracked, fully exposing the passwords.\n<br />\n  So what does this mean for the average person? According to Hunt, it means compromised email and password combos are more vulnerable for a practice called credential stuffing. Basically, credential stuffing is when breached username or email/password combos are used to hack into other user accounts. This could impact anyone who has used the same username and password combo across multiple sites.<sup>1</sup>\n  </p>  ';
  var blogcite169 = '\n  <p class="cite">1. <a target="_blank" href="https://gizmodo.com/mother-of-all-breaches-exposes-773-million-emails-21-m-1831833456">https://gizmodo.com/mother-of-all-breaches-exposes-773-million-emails-21-m-1831833456\n </a></p>  \n  \n  ';

  var blogpost168 = '<p class="quote"> \n  </p>\n  <p class="quote"> On October 19, 2017, astronomers at the University of Hawaii spotted a strange object travelling through our solar system, which they later described as \u201Ca red and extremely elongated asteroid.\u201D It was the first interstellar object to be detected within our solar system; the scientists named it \u2018Oumuamua, the Hawaiian word for a scout or messenger. The following October, Avi Loeb, the chair of Harvard\u2019s astronomy department, co-wrote a paper (with a Harvard postdoctoral fellow, Shmuel Bialy) that examined \u2018Oumuamua\u2019s \u201Cpeculiar acceleration\u201D and suggested that the object \u201Cmay be a fully operational probe sent intentionally to Earth\u2019s vicinity by an alien civilization.\u201D Loeb has long been interested in the search for extraterrestrial life, and he recently made further headlines by suggesting that we might communicate with the civilization that sent the probe. \u201CIf these beings are peaceful, we could learn a lot from them,\u201D he told Der Spiegel.<sup>1</sup>\n  </p>  ';
  var blogcite168 = '\n  <p class="cite">1. <a target="_blank" href="https://www.newyorker.com/news/the-new-yorker-interview/have-aliens-found-us-a-harvard-astronomer-on-the-mysterious-interstellar-object-oumuamua"> https://www.newyorker.com/news/the-new-yorker-interview/have-aliens-found-us-a-harvard-astronomer-on-the-mysterious-interstellar-object-oumuamua\n </a></p>    \n <p class="cite">2<a target="_blank" href="https://blogs.scientificamerican.com/observations/6-strange-facts-about-the-interstellar-visitor-oumuamua/"> https://blogs.scientificamerican.com/observations/6-strange-facts-about-the-interstellar-visitor-oumuamua/\n </a></p>  \n \n  ';
  var blogpost167 = '<p class="quote">\n  </p>\n  <p class="quote"> Examine how and when you set standards. Perfectionistic leaders often don\u2019t communicate their \u201Chigh standards\u201D until others miss their expectations. When you observe a gap between what you get and what you wanted, pause before reacting. Ask yourself if the person who fell short understood what you expected. Then, ask yourself if what you wanted was realistic given the circumstances and abilities of your team. Being honest about what you base your expectations on, and clearly conveying them to others in a timely manner, ensures your standards aren\u2019t just high, but realistic and fair.<sup>1</sup>\n  </p>  ';

  var blogcite167 = '\n  <p class="cite">1. <a target="_blank" href="https://hbr.org/2019/01/are-your-high-expectations-hurting-your-team">https://hbr.org/2019/01/are-your-high-expectations-hurting-your-team\n </a></p>  \n  \n  ';
  var blogpost166 = '<p class="quote">\n  </p>\n  <p class="quote">Americans love convenient recycling, but convenient recycling increasingly does not love us. Waste experts call the system of dumping all the recyclables into one bin \u201Csingle-stream recycling.\u201D It\u2019s popular. But the cost-benefit math of it has changed. The benefit \u2014 more participation and thus more material put forward for recycling \u2014 may have been overtaken by the cost \u2014 unrecyclable recyclables. On average, about 25 percent of the stuff we try to recycle is too contaminated to go anywhere but the landfill, according to the National Waste and Recycling Association, a trade group. Just a decade ago, the contamination rate was closer to 7 percent, according to the association.<sup>1</sup>  \n  </p>  ';

  var blogcite166 = '\n  <p class="cite">1. <a target="_blank" href="https://fivethirtyeight.com/features/the-era-of-easy-recycling-may-be-coming-to-an-end/">https://fivethirtyeight.com/features/the-era-of-easy-recycling-may-be-coming-to-an-end/\n</a></p>  \n  \n  ';
  var blogpost164 = '<p class="quote">  \n  </p>\n  <p class="quote"> \u201CTo continue delivering for our customers and to succeed in developing interplanetary spacecraft and a global space-based internet, SpaceX must become a leaner company,\u201D the Hawthorne-based company said in a statement. \u201CEither of these developments, even when attempted separately, have bankrupted other organizations. This means we must part ways with some talented and hardworking members of our team.\u201D\n  </p><sup>1</sup>    ';

  var blogcite164 = '\n  <p class="cite">1. <a target="_blank" href="https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html">\n  https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html</a></p>  \n  \n  ';
  var blogpost163 = ' <p class="quote"> Smartphones are as central to the economy as cars and credit cards, and a lot of people have little meaningful opportunity to quit. \n    And the \u201Coffline\u201D world is now ruled by what happens online. Escape is impossible. Quips on Twitter are indirectly programming cable news \n    <sup>1</sup> ...<br /><br />--NYT Op-Ed\n    </p>\n  <p class="firstparagraph">Technology is too often the scapegoat for problems with ... <i>(our)</i> habits. Whether its <i>screen</i> time, selfie-addiction or mental dependance, it\'s never us as a society. I argue interactive tech saved a world of passive Movie & TV watching, passive reading ... leaving only the <i>professionals</i> to film, record music, publish and actively pursue leisure. Now, everybody with a telephone <i>can do</i> anything.</p>\n  <p>Technology has expanded average knowledge breadth <i>and</i> depth far more than it has undercut our potential. 25 years ago, specialized knowedge required a library. Besides the perseverence to get there. </p><p>If 18th century Berlin invented compulsory secondary schooling, thereby raising literacy from 10% to 70$ in one generation; Similarly, if 19th century Paris invented compulsory secondary schooling and revolutionalized learning as a national force, and John Hopkins the first <i>modern</i> university template for mass Higher-Ed; Then, by de Facto means, Silicon Valley has provided meta-knowledge that comprises a far more important knowledge: Tying unlimited knowledge to our most <i>social</i> device: el telefono. Thus, between the Wikipadia tile and the Twitter tile, one generation catapults over all previous generations--at least in terms of YouTube know-how and social awareness. Armies of bureaucrats and educators could not have achieved one-tenth! Thank you, California, for auguring such great potential for our age. </p><p>One NYT op-ed writer encapsulates the less optimistic view of online life--a life viewed as \'captive to technology\'.\n  </p>\n  <p class="quote">  Smartphones are as central to the economy as cars and credit cards, and a lot of people have little meaningful opportunity to quit. \n  And the \u201Coffline\u201D world is now ruled by what happens online. Escape is impossible. Quips on Twitter are indirectly programming cable news ...\n<sup>1</sup>\n  </p>\n  ';

  var blogcite163 = ' \n  <p class="cite">1. <a target="_blank" href="https://www.nytimes.com/2019/01/09/opinion/meditation-internet.html">\n  https://www.nytimes.com/2019/01/09/opinion/meditation-internet.html</a></p>  \n  \n  ';
  var blogpost162 = ' \n  <p class="firstparagraph">Software, Hardware, and by logical conclusion ...<i> Kitchenware!</i>\n  </p>\n  <p class="quote">The kitchen of the future is here, and it\u2019s one that no one asked for. CES 2019, this year\u2019s iteration of the annual Consumer Electronics Show, just opened in Las Vegas, and as per usual, the gadgets unveiled so far reveal a unique perspective on the everyday lifestyle problems that consumers apparently want solved. The problems? Too much privacy in kitchens! And not enough things that can be solved by app!  <br />\n  <br />\n  As Rose Elveth wrote for Eater in 2015, \u201CEngineers... operate on the premise that people don\u2019t know what they need until it\u2019s built for them... the result is an array of potential futures that are strangely both unaware of the culture from which they spring, and at the same time constrained by it. The kitchen of the future is a one-size-fits all, ahistorical, acultural room, one that serves no one well.\u201D \n<sup>1</sup>\n  </p>\n  ';

  var blogcite162 = '\n  <p class="cite">1. <a target="_blank" href="https://www.eater.com/2019/1/8/18173843/ces-2019-kitchen-tech-ge-samsung-whirlpool">\n  https://www.eater.com/2019/1/8/18173843/ces-2019-kitchen-tech-ge-samsung-whirlpool</a></p>  \n  \n  ';

  var blogpost1600 = ' \n  <p class="firstparagraph">CES 2019 offered the range of IoT wizardry that even Philosophy has been virtualized into LED-embedded wood! \n  </p>\n  <p class="quote">What does it mean that one of my favorite demos at CES 2019 \u2014 the world\u2019s foremost technology show \u2014 was a block of wood? Maybe that I\u2019ve been spending too much time in my garage with a table saw. Maybe that we\u2019re collectively suffering from a bad case of screen fatigue. Maybe both. But if the crowd surrounding Mui is any indication, I\u2019m not the only one smitten with the Kyoto-based company\u2019s head-smackingly simple approach to technology.\n<sup>1</sup>\n  </p>\n  ';

  var blogcite1600 = '\n  <p class="cite">1. <a target="_blank" href="https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/       ">https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/</a></p>  \n  \n  ';

  var blogpost161 = ' \n  <p class="firstparagraph">Relentless criticisms hurled at the Tech Greats like Facebook can\'t really explain a lot of the connivery in the 21st century world. So, the label of a Silicon-Valley culture that espouses teamwork can\'t be blamed: It\'s the nature of Software Engineers to develop gargantuanly complex programmed products, that dissent and critical thinking have much less place than most jobs. This article is laughable, but may bear a hint of truth ... \n  </p>\n  <p class="quote">The episode speaks to an atmosphere at Facebook in which employees feel pressure to place the company above all else in their lives, fall in line with their manager\u2019s orders and force cordiality with their colleagues so they can advance. Several former employees likened the culture to a \u201Ccult.\u201D\n<br /><br />\nThis culture has contributed to the company\u2019s well-publicized wave of scandals over the last two years, such as governments spreading misinformation to try to influence elections and the misuse of private user data, according to many people who worked there during this period. They say Facebook might have have caught some of these problems sooner if employees were encouraged to deliver honest feedback.  \n<sup>1</sup>\n  </p>\n  ';

  var blogcite161 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnbc.com/2019/01/08/facebook-culture-cult-performance-review-process-blamed.html">https://www.cnbc.com/2019/01/08/facebook-culture-cult-performance-review-process-blamed.html</a></p>   ';
  var blogpost16001 = '\n  \n  <img src="dist/img/thule0.jpg" class="zoom" />\n  <p class="firstparagraph">Ultima Thule ...</p>\n  <p class="quote">\n  On New Years\' Eve, following a 13-year trip to deep space, NASA\'s New Horizons spacecraft made a close pass of Ultima Thule, a small, icy world drifting 4 billion miles from the sun in the unexplored "third zone" of our solar system. The probe zipped by at upwards of 31,000 miles per hour, about the same speed it was going when it passed Pluto in 2015. But Pluto is 100 times the size of Ultima, which measures just 20 miles long. So New Horizons had days to capture photographs and spectrographic readings of the former planet, but for this smaller cosmic quarry, it only had a matter of minutes. New Horizons\' visit was brief, but momentous: The mission\'s success makes Ultima Thule by far the most distant object ever to be imaged up close.<sup>1</sup></p>\n\n <img src="dist/img/thule.jpg" class="zoom" />\n  ';

  var blogcite16001 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/new-horizons-first-photos-ultima-thule">https://www.wired.com/story/new-horizons-first-photos-ultima-thule</a></p>   \n  \n  ';

  var blogpost160 = '<p class="quote">Astronomers have revealed details of mysterious signals emanating from a distant galaxy, picked up by a telescope in Canada. \nThe precise nature and origin of the blasts of radio waves is unknown. \nAmong the 13 fast radio bursts, known as FRBs, was a very unusual repeating signal, coming from the same source about 1.5 billion light years away. \nSuch an event has only been reported once before, by a different telescope. \n"Knowing that there is another suggests that there could be more out there," said Ingrid Stairs, an astrophysicist from the University of British Columbia (UBC).\n \n<sup>1</sup></p>\n  <p class="firstparagraph">\n  Morse code across the Galaxies - what a concept! \n  </p>\n  <img src="dist/img/gettyimages-831502910.jpg" width="350" class="zoom" /><hr width="200"/>\n\n  <span style="float:right;">GETTY IMAGES</span>\n ';

  var blogcite160 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bbc.com/news/science-environment-46811618">https://www.bbc.com/news/science-environment-46811618</a></p>  \n  ';

  var url = [{
    id: '1790',
    did: '02-08-19',
    date: 'February 8, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Sustainable Blockchain Tech, Part I:<br />The Cost of Proof-of-Work Models',
    post: blogpost1790,
    blogcite: blogcite1790
  }, {
    id: '1789',
    did: '02-07-19',
    date: 'February 7, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Oracle the Great, Part II<br />Is Oracle also Good?',
    post: blogpost1789,
    blogcite: blogcite1789
  }, {
    id: '1788',
    did: '02-06-19',
    date: 'February 6, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Oracle the Great, Part I<br />Is Oracle also Trustworthy?',
    post: blogpost1788,
    blogcite: blogcite1788
  }, {
    id: '1786',
    did: '02-04-19',
    date: 'February 4, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Due North: Time to Calibrate the Compass?',
    post: blogpost1786,
    blogcite: blogcite1786
  }, {
    id: '1785',
    did: '02-02-19',
    date: 'February 2-3, 2019<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Four Score and Seven Years Ago ...',
    post: blogpost1785,
    blogcite: blogcite1785
  }, {
    id: '1784',
    did: '02-01-19',
    date: 'February 1, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Four Score and Seven Years From Now ...',
    post: blogpost1784,
    blogcite: blogcite1784
  }, {
    id: '178',
    did: '01-31-19',
    date: 'January 31, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Seeing Who Says, \'Say Cheese!\'',
    post: blogpost178,
    blogcite: blogcite178
  }, {
    id: '177',
    did: '01-29-19',
    date: 'January 29, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Construction on the Internet Super-Highway',
    post: blogpost177,
    blogcite: blogcite177
  }, {
    id: '176',
    did: '01-28-19',
    date: 'January 28, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Saving Tappy, the Extraordinary Phone-Tester Bot',
    post: blogpost176,
    blogcite: blogcite176
  }, {
    id: '175',
    did: '01-26-19',
    date: 'January 26-27, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Who Dis',
    post: blogpost175,
    blogcite: blogcite175
  }, {
    id: '174',
    did: '01-25-19',
    date: 'January 25, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Internet Phaenomen [Greek]: To Shine; To Appear<br /><small>How the Internet was Invented',
    post: blogpost174,
    blogcite: blogcite174
  }, {
    id: '173',
    did: '01-24-19',
    date: 'January 24, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'What\'s it Take to Dethaw Frozen TV\'s?',
    post: blogpost173,
    blogcite: blogcite173
  }, {
    id: '172',
    did: '01-23-19',
    date: 'January 23, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Food for Thought',
    post: blogpost172,
    blogcite: blogcite172
  }, {
    id: '171',
    did: '01-22-19',
    date: 'January 22, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Material Thinking',
    post: blogpost171,
    blogcite: blogcite171
  }, {
    id: '1705',
    did: '01-21-19',
    date: 'January 21, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'World of OpenSource, part II:<br />The CopyRight Strikes Back',
    post: blogpost1705,
    blogcite: blogcite1705
  }, {
    id: '17005',
    did: '01-19-19',
    date: 'January 19, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Cable Guy',
    post: blogpost17005,
    blogcite: blogcite17005
  }, {
    id: '170',
    did: '01-18-19',
    date: 'January 18, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Genes for a Change',
    post: blogpost170,
    blogcite: blogcite170
  }, {
    id: '169',
    did: '01-17-19',
    date: 'January 17, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Virtues of a Monomagous Password',
    post: blogpost169,
    blogcite: blogcite169
  }, {
    id: '168',
    did: '01-16-19',
    date: 'January 16, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'That Funny Visitor\'s Non-Elliptical Orbit',
    post: blogpost168,
    blogcite: blogcite168
  }, {
    id: '167',
    did: '01-15-19',
    date: 'January 15, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Practicing at Imperfection',
    post: blogpost167,
    blogcite: blogcite167
  }, {
    id: '166',
    did: '01-14-19',
    date: 'January 14, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Minimalism to the Rescue!',
    post: blogpost166,
    blogcite: blogcite166
  }, {
    id: '164',
    did: '01-12-19',
    date: 'January 12-13, 2019<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'E.U.\'s Overreaching GDPR Rules',
    post: blogpost164,
    blogcite: blogcite164
  }, {
    id: '163',
    did: '01-11-19',
    date: 'January 11, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'It\'s not Fair Scapegoating Tech for *Our* Bad Habits',
    post: blogpost163,
    blogcite: blogcite163
  }, {
    id: '162',
    did: '01-10-19',
    date: 'January 10, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Over the Edge with Gadgetry: CES 2019',
    post: blogpost162,
    blogcite: blogcite162
  }, {
    id: '1600',
    did: '01-09-19',
    date: 'January 9, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'That\'s One Smart Block of Wood!...or a Raspberri Pi',
    post: blogpost1600,
    blogcite: blogcite1600
  }, {
    id: '161',
    did: '01-08-19',
    date: 'January 8, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'What\'s Wrong with a little Esprit de Corps?',
    post: blogpost161,
    blogcite: blogcite161
  }, {
    id: '16001',
    did: '01-07-19',
    date: 'January 7, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'It Takes Two to Dance',
    post: blogpost16001,
    blogcite: blogcite16001
  }, {
    id: '160',
    did: '01-02-19',
    date: 'January 2, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'InterGalactic Code',
    post: blogpost160,
    blogcite: blogcite160
  }];
  var i;
  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a target="_blank" href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="author">' + url[i].author + '</p>   \n    <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-jan19").innerHTML += cat;
  }

  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a target="_blank" href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="author">' + url[i].author + '</p>   \n  <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-jan19-mod").innerHTML += catMod;
  }

  console.log('blogger-jan19');
  //  console.log(angular.toJson(url)); 
};
bloggerJan();

/***/ })
/******/ ]);