package net.ourdailytech.rest.webservice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import net.ourdailytech.rest.webservice.beans.Post;

@Service
public class PostHardcodedService {

	private static List<Post> posts = new ArrayList<>(); 
	
	private static int idCounter = 0;
	
	private static String did = "may-18-05-02";
	private static String date = "May 2, 2018";
	private static String author = "by Thomas Maestas, MA";
	private static String monthOrder = "12";	
	private static String cat3 = "Musing Blockchain";	
	private static String title = "3rd Generation Blockchain: How fast can the blockchain operate? \\nPart I: Speed needs of the Financial Sector";
	private static String post = "\"may-18-05-02\",\"May 2, 2018\",  \"by Thomas Maestas, MA\",  \"Musing Blockchain\",  \"3rd Generation Blockchain: How fast can the blockchain operate? \\nPart I: Speed needs of the Financial Sector\",  \"<p class=\\\"firstparagraph\\\">The most polished, cryptographically stable leader of  <i>third generation</i> blockchain technology is formally released this month, and anticipation is anything but calm. (Some background posts help contextualize this 2-part series on Hashgraph  technology and potential for capturing per-micro-second, real-time financial needs of the globalizing economy: <a href=\\\"#18-04-18\\\"> April 18</a> and <a href=\\\"#18-04-02\\\">April 2</a>.) The formal release is on May 9th, but this May 1st press release caught my attention as we see a glimpse of this technology on a public* ledger: \\n</p>\\n<p class=\\\"quote\\\"> CULedger and Hedera today announced a partnership whereby CULedger will use Hedera's hashgraph platform and public ledger to build a system for cross-border payments. CULedger has already been using the private ledger version of hashgraph, offered by Swirlds, for general purpose, permissioned ledger use.<sup>1</sup> </p>\\n<p>The big news is Hedera's \\\"public\\\" blockchain ledger service that moves closer to popular usage with it's unique <i>directed acyclic graphs</i>, whose speed increases with scale.  Until recently, Blockchain tech has been hamstrung in the domain of micro-transactions, so now that the barrier has been crossed, how many sectors of life will be enhanced? All. But not yet. Once 5G technology (100 times faster, 100 times the capacity of 4G) is rolled out, then we hit the big leagues.</p> \\n<p class=\\\"quote\\\">A group of U.S. credit unions looking to pool resources considered the Bitcoin and Ethereum blockchains to track their business, but wound up selecting something else entirely: hashgraph.</p>\\n<p class=\\\"quote\\\">Currently, cross-border payments are painful for all parties involved,\\\" said Rick Cranston, COO of CULedger. \\\"They take time, they're expensive, and there is limited visibility into the transaction. Hashgraph is fast and it provides visibility between the two parties at a significantly lower cost. It also eliminates concerns regarding fraud and default, since transactions are recorded immutably on the public ledger, and manual processes, since transactions are automated via smart contracts.<sup>1</sup></p>\\n<p> ...to be continued...</p> \\n\\n\"";
	private static String blogcite = "<p class=\\\"cite\\\"><a href=\\\"https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html\\\" target=\\\"_blank\\\">https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html</a></p>\\n<p class=\\\"cite\\\"><a href=\\\"https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/\\\" target=\\\"_blank\\\">https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>\\n\\n<p class=\\\"cite\\\"><a href=\\\"https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f\\\" target=\\\"_blank\\\">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p>";
	
	static {
		posts.add(new Post(++idCounter,did,date,author, monthOrder,cat3,title, post,blogcite));
		posts.add(new Post(++idCounter,"did1","date1", "author","monthOrder1","cat3", "title1", "post1", "blogcite1"));
		posts.add(new Post(++idCounter,"did2","date2", "author2","monthOrder","cat3", "title2", "post2", "blogcite2"));
		posts.add(new Post(++idCounter,"did3","date3", "author3","monthOrder3","cat33", "title3", "post3", "blogcite3")); 

	}
	
	public List<Post> findAll() {
		return posts;
	}
	
	public Post save(Post post) {
		if(post.getId()==-1 || post.getId()==0) {
			post.setId(++idCounter);
			posts.add(post);
		} else {
			deleteById(post.getId());
			posts.add(post);
		}
		return post;
	}
	
	public Post deleteById(long id) {
		Post post = findById(id);
		if(post==null) return null;
		if(posts.remove(post)) {
			return post;
		}
		return null;
		}

	public Post findById(long id) {
		for(Post post:posts) {
			if(post.getId() == id) {
				return post;
			}
		}
		return null;
	}
}
   