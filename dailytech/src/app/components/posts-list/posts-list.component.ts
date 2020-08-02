import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../service/data/post-data.service';
import { Router } from '@angular/router';

export class Post {
  constructor(
    public id: number,
    public did: string,
    public date: string,
    public author: string,
    public monthOrder: string,
    public cat3: string,
    public title: string,
    public post: string,
    public blogcite: string
  ) { }
}

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  message: string;
  username: string;
  posts: Post[];

  constructor(
    private postService: PostDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('AuthenticatedUser');
    this.refreshPosts();
  }

  refreshPosts() {
    this.postService.retrieveAllPosts(this.username).subscribe(
      response => {
        console.log(response);
        this.posts = response;
      }
    );
  }

 addPost() { 
  this.router.navigate(['post',-1])
  }
  
 updatePost(id) { 
  this.router.navigate(['post',id])
  }

  deletePost(id) {
    // console.log(`deleting post ${id}`);
    this.postService.deletePost(this.username, id).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of post ${id} successful`;
      }
    )
    this.refreshPosts();
  }

}
// OLD
// posts = [ 
  //  new Post(1,"may-18-05-02","May 2, 2018",  "by Thomas Maestas, MA",  "Musing Blockchain",  
  //  "3rd Generation Blockchain: How fast can the blockchain operate? \nPart I: Speed needs of the Financial Sector",  
  //  "<p class=\"firstparagraph\">The most polished, cryptographically stable leader of  <i>third generation</i> blockchain technology is formally released this month, and anticipation is anything but calm. (Some background posts help contextualize this 2-part series on Hashgraph  technology and potential for capturing per-micro-second, real-time financial needs of the globalizing economy: <a href=\"#18-04-18\"> April 18</a> and <a href=\"#18-04-02\">April 2</a>.) The formal release is on May 9th, but this May 1st press release caught my attention as we see a glimpse of this technology on a public* ledger: \n</p>\n<p class=\"quote\"> CULedger and Hedera today announced a partnership whereby CULedger will use Hedera's hashgraph platform and public ledger to build a system for cross-border payments. CULedger has already been using the private ledger version of hashgraph, offered by Swirlds, for general purpose, permissioned ledger use.<sup>1</sup> </p>\n<p>The big news is Hedera's \"public\" blockchain ledger service that moves closer to popular usage with it's unique <i>directed acyclic graphs</i>, whose speed increases with scale.  Until recently, Blockchain tech has been hamstrung in the domain of micro-transactions, so now that the barrier has been crossed, how many sectors of life will be enhanced? All. But not yet. Once 5G technology (100 times faster, 100 times the capacity of 4G) is rolled out, then we hit the big leagues.</p> \n<p class=\"quote\">A group of U.S. credit unions looking to pool resources considered the Bitcoin and Ethereum blockchains to track their business, but wound up selecting something else entirely: hashgraph.</p>\n<p class=\"quote\">Currently, cross-border payments are painful for all parties involved,\" said Rick Cranston, COO of CULedger. \"They take time, they're expensive, and there is limited visibility into the transaction. Hashgraph is fast and it provides visibility between the two parties at a significantly lower cost. It also eliminates concerns regarding fraud and default, since transactions are recorded immutably on the public ledger, and manual processes, since transactions are automated via smart contracts.<sup>1</sup></p>\n<p> ...to be continued...</p> \n\n", 
  //  "<p class=\"cite\"><a href=\"https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html\" target=\"_blank\">https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html</a></p>\n<p class=\"cite\"><a href=\"https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/\" target=\"_blank\">https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>\n\n<p class=\"cite\"><a href=\"https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f\" target=\"_blank\">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p>"), 
  //   new Post( 2,'','','','','','',''),
  //   new Post( 3,'','','','','','',''),
  //   new Post( 4,'','','','','','',''),
  // ];
