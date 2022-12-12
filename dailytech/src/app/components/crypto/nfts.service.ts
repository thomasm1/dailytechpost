import { Injectable } from '@angular/core';
import { KeysService } from '../../service/keys.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import {  Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'

import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

export class NftsService {
  nftDataUpdated: any;
  collectChainData(): any {
    throw new Error('Method not implemented.');
  }
  // chainEth = EvmChain.ETHEREUM;
  // chainBsc= EvmChain.BSC;
  // chainPolygon = EvmChain.POLYGON;
  // chainAvalance  = EvmChain.AVALANCHE;
  // chainMumbai = EvmChain.MUMBAI; 
  // chainGoerli = EvmChain.GOERLI;

  chain: string = 'eth';
  nftData: any;
  tokens: any = [];
  nfts: any = []; 
  nftsUpdated = new Subject<any[]>();
  chainDataUpdated = new Subject<any>();

  key: string = '';
  constructor(
    private http: HttpClient,
    private keyService: KeysService
  ) {
    this.key = this.keyService.getMoralisKey();
    
  }
 
  collectNfts():Observable<any>  { 
   return  this.http.get(`${environment.nft_url}/nft`)    
   .pipe(
    catchError(this.handleError)
   ); 

  }

  replaceNfts(chain: string, address: string) {
    if(!chain) {
      chain = this.chain;
    }
  this.http.get(`${environment.nft_url}/nft/${chain}/${address}`)
      .subscribe((data: any) => {
          this.nftData = data;
          console.log(this.nftData);
          this.chainDataUpdated.next(this.nftData);
        });
        return this.nftData;

  }
  getChainData() {
   console.log("chain", this.nftData);
    return this.nftData;
  } 
  getTokens() {
    return [...this.tokens];
  }
 
  deleteNft(nftName: string) {
    this.nfts = this.nfts.filter((nft: string) => {
      return nft !== nftName;
    });
    this.nftsUpdated.next(this.nfts);
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) { 
      console.error('An error occurred:', error.error.message);
    } else { 
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // returns an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  } 
}
