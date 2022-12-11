import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chain } from 'src/app/models/Chain';

import { NftsService } from '../nfts.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})

export class NftComponent implements OnInit { 
  @Input('inputNft') nft: any;  
  @Input() nftData: any;

  @Input()
  chains: Chain[];

  @Output() nftDeleted = new EventEmitter();
  viewNft() {} 
    constructor(private nftsService: NftsService) { }

  ngOnInit(): void {
    // this.nft = this.nftsService.getNft(this.name);
            }
  onClicked() {
    // this.nftDeleted.emit(this.name);
    this.nftsService.deleteNft(this.nft.name);
  } 
}
