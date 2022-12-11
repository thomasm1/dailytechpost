import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { observable, Observable, Subject, Subscription, of } from 'rxjs';
import { NftsService } from '../nfts.service';
import { Store } from '@ngrx/store';

import { Chain } from '../../../models/Chain';
 

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.scss']
}) 
export class NftAddComponent implements OnInit, OnDestroy { 
  chains$!: Observable<Chain[]>;   
  chain: string = 'eth'; // default chain
  nftData: any;
  tokens: any = [];
  nfts: any 
  image: string = "";
  name: string = "";
  description: string = ""; 
  nftDataUpdated = new Subject<any>();
  nftsUpdated = new Subject<any[]>();
  key: string = ''; 
  nftAddress: string = ""; 
 
 
  private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService,
    // private store: Store<fromChains.State>
  ) {   
    this.chains$ = of([{id:"1",name:"eth"},{id:"2",name:"polygon"},{id:"3",name:"bnc"}])
     }
  
    ngOnInit(): void {
      // this.chains$ = this.store.select(fromChains.getAvailableChains)
    
    }
   
    formReplaceNft(form: { valid: any; value: { chain: string, nftAddress: string; }; }) { 
      if(form.valid) {
      this.nftsService.replaceNfts(form.value.chain, form.value.nftAddress)
        // .subscribe((data: any) => {
        //   if (data != undefined) {
        //     this.nftData = data;
        //     console.log("this.nftData")
        //     console.log(this.nftData);
  
        //    this.nftDataUpdated.next(this.nftData);
        //     this.tokens = data.tokens; 
  
        //     this.nfts = data.nfts;
        //     console.log(this.nfts);
        //     console.log(this.nfts[0])
        //     this.nftsUpdated.next([...this.nfts]);
        //   }
        // })
        return this.nftData;
      } 
    }

 
  // onAddNft(form: { valid: any; value: { nftAddress: string; }; }) {
  //   //this.nfts.push(this.name);
  //   if(form.valid) {
  //     this.nftsService.addNft(form.value.nftAddress);
  //   }
  // }
  // onDeleteNft(nftAddress: string) {
  //   this.nfts = this.nfts.filter((nft: string) => { return nft != nftAddress; });
  //   // this.nfts = this.nftsService.deleteNft(nftName);
  // }
  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
