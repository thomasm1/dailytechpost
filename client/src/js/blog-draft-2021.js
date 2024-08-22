
var blogger2021 = function () {
    
    var blogpost7 = `<p class="firstparagraph quote">The Ghosts of the Past have come again to steer my thoughts.  H&eacute;las! I cannot but acquiesce to them. After all, it was a dreary night, in the immediate aftermath(s) of the infamous <i>CloudStrike</i> bug that the misdirected accusations and misplaced assumptions abounded across the land. It was the voice of my ex-girlfriend, with whom I debated, that resoundedly defended Windows, because after all, CloudStrike (CS) <i>isn't a dependency</i>, a simple software. Blame it on the team, she said, blame it on the decision to install the software.. blame it on Delta. They should have chosen a better anti-virus like McAfee! To this notion I inserted my 2 cents that it was indeed a dependency of Windows. So it was both the fault of CS and how much more of Microsoft for allowing it. Further, the users of Windows servers were powerless to prevent the error. To resolve this enigmatic question, the reader and I must dive deep: </p>  <p > What really is the difference between the <span style="color:white;background-color:blue;" >stomach-curling Blue Screen and Linux's black screen of death, or rarer yet, Mac's Pink Screen of demise? Nothing, it just so happens the former happens. And happens alot more frequently. </span> But why you ask? Because of the irascible and increasingly unscrupulous bi-modal architecture of Windows itself. </p> <p> My story cannot complete itself without touching upon these details --that the strict line between kernel-mode (i.e. external apps, users, etc are forbidden, being relegated to user-mode.) So what takes place in kernel mode? Well those delicate activities and configurations that only Windows will certify with ample testing, like the thread scheduler (bear with this tangent, dear reader), heap manager, and perhaps a graphical functionality, for example, to access driver, which would talk to the GPU across the PCI Bus. <br/> So, where does CloudStrike's <i><span style="color:green">FALCON</span></i> fit into this picture? [Returning now to the point of whether or not this antimalware software Falcon is a dependency].</p> <p>Earlier antimalware not only looks at files, but also the behavior of the operating itself; hence the need access the kernel ... thus passing beyond the line of kernel mode -- a necessary evil you say? yes, a necessary risk. However, it used to be that modifcations of the this device driver (i.e. not hardware, just CloudStrike's Falcon software; any software alterations MUST therefore pass any tests, proffered by Windows Hardware Quality Labs (WHQL), which at the end of such battery of tests, is <i>signed &amp; certified by Windows.</i>) Thus, the necessary evil-risk is indeed mitigated; and all remain happy, without any case of the blues. <br /> Sadly, though, times change and standards stoop ever lower -- because it is 2024, and the once-lofty WHQL no longer requires alterations to such drivers as Falcon to pass the battery of tests because of the advent of <i>now-programmable</i> "dynamic definition files" (which now re-program the behavior of the driver itself! ...thereby circumventing the once-strict line of defense that guarded the sacred Kernel Mode from harm.</p> <p>And so, my short tangent is completed, now that we know that this dangerous software can enter and exit kernel mode access at will -- The case STILL justifies Windows and CloudStrike because the User/Enterprise is still at fault for using this so-called non-dependency, correct? Wrong. Windows has allowed CloudStrike (in a bid to embed its software into the OS) to mark their driver as a "Boot-Start Driver"--id est, a driver for a device that <strong>must</strong> be installed to start the MS Windows Operating System.  Huh?!? Yep. Whereas most boot-start drivers are included in driver packages that are "in-the-box" with Windows, Windows automatically installs these boot-start drivers during first boot of the system. If a boot-start driver for a device is not included in a driver package that is "in-the-box" with Windows, a user can install an additional vendor-supplied driver package for the device; And in these instances, let's say on a Saturday afternoon when cleaning out the home computer, refreshing, and reinstalling software, these driver packages <i>should</i> be added to the image <u>offline</u> before the image is deployed to a system. Simple. And Safe. Right? <br /> Wrong. CrowdStrike did not want you booting Windows without their precious software! So instead you must reboot Windows in Safe Mode, to remove or uninstall this surreptitious piece of software.  And so, there you have it, in 1,000 words or less, this Spectre of the Past has been exposed, and the public can now act as Judge and Jury to lay all the blame on both Windows lax security policy and CloudStrike's ineptitude to not even test for null-pointer errors (the absolute simplest errors and simplest to test/protect against), while justifying and restoring innocence to the many clients, user or enterprise alike, who were left powerless to the impending doom that CloudStrike Falcon would shrowd the world--if only for a a weekend. So next time there is a Ghost in the Shell, we can learn to undermine and root out the perils that lay beneath!</p>`;
    var blogcite7 = `  <p></p>  `;

    var blogpost6 = `<p class="firstparagraph quote">What is the true cost of A.I. Supremacy? </p> <p class="quote">.<i>..experts say that the openness and accuracy of the Llama 3.1 family of models pose an existential threat to providers of closed proprietary large language models.</i> <sup>1</sup></p>  <p style="color:black;">The forces of profiteers have converged upon the (apparent) novelties of A.I. to find a niche from which to extract wealth. Not unlike the dot-com bubble, Virtual/Augmented Reality, quantum-era, and even the short-lived NFT bubbles, the research to demarcate technical boundaries and timelines for sustainable return-on-investment in A.I. remains murky.  And yet, 1.5 years since the arrival of ChatGPT 1.0, the one thing is clear: depth-wise development of the tech is banal (unless you count the hot debates between byte-sized versus multi-word tokenization), it is the breadth-wise implementation, security, and enterprise-ready accuracy of the tool into existing technologies that counts. <br /><br />So what about the unfathomable data-training resources necessary for competitive LLM models? With Meta's July open-sourcing of its mega- 400 billion parameterized model, i.e. Llama 3.1, the world is at the fingers of any typical middle-schooler or A.I. hobbyist to create monumental feats. But not-so-fast say you! Okay, it is true that the computing power needed for this model is a mere 700 Watts of power, which rivals small countries.  Renting of the item is another cost rounding out at $300,000/year... So who can afford to run this model? And worse yet, will the world become even more dependent on cloud-computing?  </p><p>The time has arrived for developers to fine-tune their apps to quickly access certain problems with a diverse range of LLMs, reserving the big questions for the big models, if only briefly. This architectural pattern, or at least paradigm, already exists -- It was with Quantum technologies that the world was first introduced to short bursts of brilliance (Given that the super-imposed quantum state needed for computation is a matter of seconds still.) So now that we have identified the next big Wall for innovation --electricity and hardware cost--should one fear a downturn in innovation? Ever emphatically, I say no, because after all Necessity is the Mother of Invention!</p>
   `;
    var blogcite6 = `  <p class="footnotes">1. <a href="https://www.infoworld.com/article/3477234/why-metas-llama-3-1-is-a-boon-for-enterprises-and-a-bane-for-other-llm-vendors.html"   target="_blank">infoworld.com/article/3477234/why-metas-llama-3-1-is-a-boon-for-enterprises-and-a-bane-for-other-llm-vendors.html</a></p> <p class="footnotes">1. <a href="https://ai.meta.com/blog/meta-llama-3-1/"   target="_blank">ai.meta.com/blog/meta-llama-3-1/</a></p>    `;

    var blogpost5 = `<p class="firstparagraph quote">7 days into 2024, and machine-learning, whether it be the old-fashioned quantitative analysis and propensity matching using the Law of Large Numbers, or the new syntactic Generative Pre-trained Transformer (4) ... </br>Different Use Cases will no doubt spur a retro-active inventory of the various generations of machine-learning branches of knowledge that grew up, thrived, and retired to the dusty confines of Academic Halls.  I recall being a Universite of Montreal doctoral student in 2017, which coincided with Facebook's $100 million donation to the UM CS dept...however times were to change:  ironically enough, the 2nd Crypto winter struck 2018-2021 ... </p> <p class="quote"><sup>1</sup></p> <p>This period in which neural network models, and nearly all designs, (except for the narrow-scoped domains of AI research, like self-driving) hit their infrastructural limits. After the 3rd or even let's say the 7th or 17th layer of neural networking creates unfathomable calculations -- and hence all the startup investment money died out as researchers in Montreal, Silicon Valley, and Szchenzen (I won't attempt the spelling), and thus interrupting the usual flow of academic-intellectual capital from flowing from academia to consumer products--who can inspire the next generation of Tomb Raiders from digging into those algorithms? --perhaps a couple dozen thousand academic citations later, we'll have recursion-based or graph-based algorithm perhaps, that were labored over for thousands of hours, carefully tailored to the university researchers' whim and intellectual compass -- alas, the spirits of antiquity call out from the marble halls of academia for new investment money because lost treasures await those ready to look into the past, in order to rightly direct the future, especially in terms of A.I.-Human Alignment, which remains the å-propos controversy of the time.  </p> <p style="color:green;">needless to say, although the author like CoPilot & ChatGPT for trivial musing, but never to impersonate the words of Thomas Milton, who speaks for his own self</p>`;

    var blogcite5 = ` <p class="footnotes">1. <a href="https://bdtechtalks.com/2018/11/12/artificial-intelligence-winter-history/"   target="_blank">https://bdtechtalks.com/2018/11/12/artificial-intelligence-winter-history/</a></p>    `;


    var blogpost4 = `<p class="firstparagraph quote">Due in March, the next version of standard Java will have 12 features including previews of scoped values, structured concurrency, stream gatherers, and the ability to execute multi-file programs.<sup>1</sup></p><p> Doubtless the accelerating pace of Angular and Spring Frameworks, coupled with the syntactic evolutions of Python 2 to 3 upheaval, and the once-per-18 months language versioning of Java and EcmaSript-JavaScript. Why? why must languages and frameworks expand and multiply. The expansion of digital nature of <i>every</i> business arrives because every business, from every sector, and any size, <i>is</i> de facto a tech business.</p><br /><p> The great philsophers throughout the ages have always argued that civilization and enlightenment are limited in their breadth by the limitations of the philophy's inherent language, i.e., syntax. Thus, the predominant languages of philosophy depended on ever-growing syntax to describe new conceptual phenomena. --And the same rings true with technological code: The once linear expansion of language has been replaced by an exponential expansion of syntax to power the expanding wish-list of 21st business and markets demands. And so at a time of peril for all developers buried beneath ever more and more homework, there has arrived a help from Above the code stack: From language model itsel, the Large Language Model and its derivate syntax-oriented A.I. arrives not moment too soon to break developers free from the growing onslaught of boilerplate code!</p>
  `;

    var blogcite4 = ` <p class="footnotes">1. <a href="https://www.infoworld.com/article/3708329/jdk-22-the-new-features-in-java-22.html"   target="_blank">https://www.infoworld.com/article/3708329/jdk-22-the-new-features-in-java-22.html </a></p>
`;


    var blogpost3 = `<p class="firstparagraph"> The importance of reducing electricity cannot be overstated, most importantly it provides an ecological image boost--but not much more.  Ethereum's Merge from Proof-of-work to Proof-of-stake is the big news, however the big liabilities such as gas transactioanal fees and throughput will not improve at all! Layer 2 solutions and side chains create an uncomforatable level of platform dependence. </p>     <p class="quote">Beiko was questioned by an individual about Ethereum miners who have been securing the network. The individual asked the Ethereum developer if miners would be “left out to dry.”<br /><br >  Beiko responded to the person and explained that he would not invest in any mining devices going forward. “I would strongly suggest not investing more in mining equipment at this point,” the Ethereum developer tweeted. Then the individual asked if developers planned the “plug pull” for June or if the ether mining community has more time. Beiko also replied to that question as well and said:  <br /><br >  It won’t be June, but likely in the few months after. No firm date yet, but we’re definitely in the final chapter of PoW on Ethereum.<sup>1</sup>  </p>
`;

    var blogcite3 = `<p class="footnotes">   1. <a href="https://news.bitcoin.com/ethereum-dev-says-the-merge-could-be-delayed-a-few-months-strongly-suggests-not-investing-in-eth-mining-rigs/"   target="_blank">https://news.bitcoin.com/ethereum-dev-says-the-merge-could-be-delayed-a-few-months-strongly-suggests-not-investing-in-eth-mining-rigs/</a> <br />     </p>       
`;
    var blogpost2 = `<p class="firstparagraph">Like Starsky &amp; Hutch, detectives in the abstract, symbolic world often work best together in pairs, given Fred Brooks' Maxim that adding minds to a project commensurably delays project completion.<br /> This concept illustrates how an intellectual partnership with computers will shape professionalism and the workplace. </p>  ... and, scholarly professions benefit from computing symbiosis ... <p class="quote">  Similarly, computers are becoming increasingly indispensable tools for mathematicians, who use them not just to carry out calculations but to solve otherwise impossible problems and even verify complicated proofs. And as machines become better at solving problems,   this year has also seen new progress in understanding just how they got so good at it. <sup>1</sup>  </p> 
`;

    var blogcite2 = ` <p class="footnotes">   1. <a href="https://www.quantamagazine.org/the-year-in-math-and-computer-science-20211223/"   target="_blank">https://www.quantamagazine.org/the-year-in-math-and-computer-science-20211223/</a> <br />     </p>      `;
    var blogpost1 = `<p class="firstparagraph">Beyond computing power and discussions of "A.I. Winters" and processing limitations, one may overlook a more decisive approach to machine learning development, evolving from the what and how, to the why ...  however hard it is to extricate Hollywood's depictions of hope and fear from our minds!       This 2021 Wired article's prescience on artificial intelligence is worth a read:  </p>     <p class="quote">  More recently, techniques of machine learning have been used to gain an understanding from a database of successful proofs to generate more proofs. But although the proofs are new, they do not pass the test of exciting the mathematical mind. It’s the same for powerful algorithms, which can generate convincing short-form text, but are a long way from writing a novel. <br /> But in 2021 I think we will see – or at least be close to – an algorithm with the ability to write its first mathematical story. Storytelling through the written word is based on millions of years of human evolution, and it takes a human many years to reach the maturity to write a novel. But mathematics is a much younger evolutionary development. A person immersed in the mathematical world can reach maturity quite quickly, which is why one sees mathematical breakthroughs made by young minds. <br />This is why I think that it won’t take long for an AI to understand the quality of the proofs we love and celebrate, before it too will be writing proofs. Perhaps, given its internal architecture, these may be mathematical theorems about networks – a subject that deserves its place on the shelves of the mathematical libraries we humans have been filling for centuries.<sup>1</sup>  </p>  
  `;

    var blogcite1 = ` <p class="footnotes">   1. <a href="https://www.wired.co.uk/article/marcus-du-sautoy-maths-proofs"   target="_blank">https://www.wired.co.uk/article/marcus-du-sautoy-maths-proofs</a> <br />     </p>             `;

    var blogpost0 = `<p class="firstparagraph">Taxes ... simultaneously the ultimate bane and archenemy for the Greedy, yet also the easiest way to share; and sharing, whether compulsory or not, feels good.   So, by extension, taxes are good.   </p>     <p>Yet another positive attribute of Tax is the power of attention.    There is no brighter light of scrutiny and organization than tax, to de-complicate and elucidate <i>where</i> money is, where it goes, and what it does. </p>  <p>On the subject of complicated, changing , obscure financial landscapes ... <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />... Deeply complicated, dynamic systems like the crypto space can do well with a   set of pliable, flexible regulation to further efficiency and faireness for the cryptocurrency system; but most of all, further intuitive clarity for the wider public.          </p>  <p class="quote">  Crypto may have started out as a discreet decentralized economy, but now that the nearly $2 trillion sector has gone mainstream enough to occupy coveted Super Bowl ad space, the Internal Revenue Service (IRS) is well clued in.The IRS classifies cryptocurrency as intangible property for tax purposes, which means the profits you make from selling virtual currency are subject to capital gains taxes. This holds true whether you bought bitcoin or altcoins on a crypto exchange like Coinbase, or simply used an app like Venmo or PayPal to buy and use cryptocurrency.<br/><br />  However exciting crypto may be, if you gave it as a gift, you should be aware of IRS rules on gifting. There’s a $15,000 gift threshold for 2021, meaning the giver doesn’t have to pay taxes on the gift as long as it's worth $14,999 or less.   If the value of the gift is over $15,000, the tax burden falls on the generous donor, who must file IRS form 709.<sup>1</sup>  </p>   
    `;

    var blogcite0 = `  <p class="footnotes">   1. <a href="https://www.coindesk.com/learn/you-may-owe-crypto-taxes-on-these-surprising-things-in-2022/"   target="_blank">https://www.coindesk.com/learn/you-may-owe-crypto-taxes-on-these-surprising-things-in-2022/</a> <br />     </p>                   `;



    var blogpost00 = `<p class="firstparagraph">As a cyclist, a runner, a pedestrian, and sometimes driver, my earbuds stay in. Whether ordering from my Starbucks Barista or listening to traffic, proximal noise matters! <br /><br />  Given the importance of hearing your surroundings crystal-clear while conversing or listening to music is a safety feature extraordinaire. Yet, Apple's 2021 AirPods don't carry this essential feature that any typical $100 earbud surely offers. So, IMHO, the only worthwhile Apple AirPod is the very pricey AirPod Pro.    </p>     <p class="quote">Once you get them seated in your ears, the new AirPods sound OK. But it's annoying how much outside sound gets in when you’re out and about, which makes everything much muddier. Again, in comparison to similarly priced models from Jabra, Samsung, and other top-tier modern producers, these get left in the dust. <sup>1</sup></p><p>Whether for safety or enhancement, AirPod Pro is the way to go ...</p>  
      `;

    var blogcite00 = `  <p class="footnotes">   1. <a href="https://www.wired.com/review/apple-airpods-pro/"   target="_blank">https://www.wired.com/review/apple-airpods-pro/</a>   <br />   2. <a href="https://www.wired.com/review/apple-airpods-pro/"   target="_blank">https://www.wired.com/review/apple-airpods-pro/</a>       </p>        `;


    var blogpost000 = ` <p class="firstparagraph">I've always enjoyed the maxim that if you want to get somewhere fast, go it alone.<sup>1</sup> If you want to go far collaborate.   I like to to fast. So does Apple. And since the <a href="https://www.technologyreview.com/2020/02/24/905789/were-not-prepared-for-the-end-of-moores-law/"   target="_blank"> "End of Moore's Law"</a>, the only viable solution was multi-core processors. The only heretofore impossible other option requires separate vendors to provide separate, specialized chips ...<i>However,</i>     Because Apple manufactures in-house chips, and owns the hardware, System-on-a-Chip can be realized,   providing a much better solution to the crisis of the "End of Moore's Law".<sup>2</sup>   </p>      `;

    var blogcite000 = ` <p class="footnotes">     1. <span>Source: Ancient African Proverb<br />   2. <a href="https://www.technologyreview.com/2020/02/24/905789/were-not-prepared-for-the-end-of-moores-law/"   target="_blank">https://www.technologyreview.com/2020/02/24/905789/were-not-prepared-for-the-end-of-moores-law/</a>       </p>       ",
    `;


    var url = [

        {
            id: '7',
            did: '24-08-06',
            date: 'August 6, 2024',
            author: 'by Thomas Maestas, MA',
            cat3: 'Web Dev Affairs',
            title: 'Haunted by the Ghosts of the Past',
            post: blogpost7,
            cite: blogcite7
        },
        {
            id: '6',
            did: '24-08-01',
            date: 'August 1, 2024',
            author: 'by Thomas Maestas, MA',
            cat3: 'A.I.Now!',
            title: 'Democraticized Technology: On the Growing Costs of A.I. Computing',
            post: blogpost6,
            cite: blogcite6
        },
        {
            id: '5',
            date: "January 7, 2024",
            did: "24-01-07",
            author: 'by Thomas Maestas, MA',
            cat3: 'Quantum Data',
            title: "A Soft Look into A.I.'s Past to guide the Hard Turns that lay Ahead",
            post: blogpost5,
            cite: blogcite5
        },
        {
            id: '4',
            date: "December 30, 2023",
            did: "23-12-30",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "On the Accelerating Pace of Software BoilerPlate and the Advent of AI",
            post: blogpost4,
            cite: blogcite4
        },
        {
            id: '3',
            date: "April 14, 2022",
            did: "22-04-14",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "The Big Merge",
            post: blogpost3,
            cite: blogcite3
        },
        {
            id: '2',
            date: "February 19, 2022",
            did: "22-02-19",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "A year for Math and Science: Embracing our Bots",
            post: blogpost2,
            cite: blogcite2
        },
        {
            id: '1',
            date: "February 18, 2022",
            did: "22-02-18",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "I Think Therefore I am",
            post: blogpost1,
            cite: blogcite1
        },
        {
            id: '0',
            date: "February 17, 2022",
            did: "22-02-17",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "The Clarity of Money",
            post: blogpost0,
            cite: blogcite0
        },
        {
            id: '00',
            date: "October 23, 2021",
            did: "21-10-23",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "Salutations of Safety, and the Wonderous Era of Conxtext-Aware Noise Canceling and Amplification",
            post: blogpost00,
            cite: blogcite00
        },
        {
            id: '000',
            date: "October 22, 2021",
            did: "21-10-22",
            author: 'by Thomas Maestas, MA',
            cat3: 'Sociology Today',
            title: "Shifting Technological Super-Structures, Part V: <br />M1 Chip: The Long-awaited salve to the End of Moore's Law",
            post: blogpost000,
            cite: blogcite000
        }
    ];

    for (i = 0; i < url.length; i++) {
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
	  <div id="post">${url[i].post}	  </div>
      <div id="post">${url[i].cite}</div>
	  </div>`

        document.getElementById("paragraph-2021").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
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
      <div id="post">${url[i].cite}</div>
      

	  </div>`;

        document.getElementById("paragraph-mod-2021").innerHTML += catMod;
    }

    console.log('blogger-2021');
    console.log(url);
    console.log(angular.toJson(url));
};

blogger2021(); 