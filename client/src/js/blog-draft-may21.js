 
//Top Vars Above

var bloggerMay21 = function () {
 
  


// var blogpost2 =  ` 
// <p class="firstparagraph">, 
// <p class="quote"><i>A Dogecoin (DOGE)-focused division of publicly traded over-the-counter software firm AppSwarm is looking to bring together global development teams to build off of the Dogecoin blockchain.<br /><br />
// DogeLabs — a newly launched division of AppSwarm’s blockchain research lab, TulsaLabs — announced Wednesday a new initiative calling on DevOps teams to unite their efforts in building a “sort of decentralized network” of DOGE developers across the globe.</i><sup>1</sup> 
// </p>
// `;
// var blogcite2 = `
// <p class="footnotes">1. <a href="https://cointelegraph.com/news/appswarm-s-doge-division-calls-for-a-global-dev-teams-to-build-off-dogecoin"   target="_blank">https://cointelegraph.com/news/appswarm-s-doge-division-calls-for-a-global-dev-teams-to-build-off-dogecoin</a>
// </p>   `;
 

var blogpost1 =  ` 
<p>Doubtless, New Chain Lifecycle is 5% utility, 5% hype and 90% Decentralized App developers' community -- the ingredient <i>par excellence</i> for lasting hype and adoption. Here we have the exponential growth of Ethereum interest, let alone price of token. On the contrary we have Cardano Network, powered by Proof-of-Stake ADA token, which has yet to evolve past TestNet phase, a point of paralysis for Cardano chain DAPP development. One last step before final main net launch, and finally, we can witness David face Goliath...</p>

<p class="quote"><i>This year, we are seeing the direct competitors clashing. Ethereum has made great strides to make it scalable and affordable, with the Berlin fork already finalized and London hard fork scheduled for July.
In the meantime, Cardano smart contracts should be entering the Cardano testnet by the end of this month.</i><sup>1</sup> 
</p>
<p>Even if Cardono does launch main net, the multi-year delay in final completion of the the chain --for all its bells and whistles -- has stunted new development and developer solidarity. So why has ADA token reached its All-Time-High of $2.33, with a market cap of 66 billion</p>

`
var blogcite1 = 
`
 
<p class="footnotes">1. <a href="https://finance.yahoo.com/news/cardano-prepares-launch-alonzo-testnet-130000976.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKH0bKJvZsFbQBykBexupKV-HvvhwSDQjmlBmyM4Q69AaNPYvc4Tk8LSJIyBqekdp0PAPL7kz0hTgJFEwOB3jchU4gzkApL6bQay9JZ2z16ddSW5RsCYEp049RRj-L_zFhrhze_83BrLCQjxz_-oOvLEbc8l3X_T4KdO8-eQf6cz"   target="_blank">cardano-prepares-launch-alonzo-testnet</a>
</p>   
`; 
   
  var url =  
  [     
    // { 
    //   id:'2',
    //   did:'may-21-05-17',
    //   date:'May 17, 2021',
    //   author:'by Thomas Maestas, MA',
    //   cat3:'Web Dev Affairs',
    //   title:'Doge Days are Here Again:  ',
    //   post:blogpost1,
    //  blogcite:blogcite1
    //  },
    { 
    id:'1',
    did:'may-21-05-17',
    date:'May 17, 2021',
    author:'by Thomas Maestas, MA',
    cat3:'Web Dev Affairs',
    title:'ETH v. BTC v. ADA: Varying levels of DAPP Community-Building and the Law of Large Numbers',
    post:blogpost1,
   blogcite:blogcite1
   }
   ] ;

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
    <div id="post">${url[i].post}
    </div>
    <div id="blogcite">${url[i].blogcite}
    </div>` ;
document.getElementById("paragraph-may21").innerHTML += cat; 
} 
 
var i;
for (i=0;i<url.length;i++){ 
  var catMod = `
  <div id="${url[i].did}_mod" class="blogDivMod"> 
  <hr />  
  <a href="#top-mod"><button>Top</button></a>   
  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
  <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5>  
  <p id="author" class="  author">${url[i].author}</p>   
  <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
  <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
  <br />
  <div id="post">${url[i].post}</div>
  </div>
 <div id="blogcite">${url[i].blogcite}
 </div>`;
document.getElementById("paragraph-mod-may21").innerHTML += catMod;
}


console.log('blogger-may21'); 
console.log(angular.toJson(url));
}; 


bloggerMay21();  

