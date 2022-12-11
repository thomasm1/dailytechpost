import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable, Subject, timer} from 'rxjs';
 
import {delayWhen, filter, map,  shareReplay, tap, withLatestFrom} from 'rxjs/operators';
import {createHttpObservable} from './observable';  
import { Chain } from '../models/Chain';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})


export class Store {

    private subjectChain = new BehaviorSubject<Chain[]>([]);

    chains$: Observable<Chain[]> = this.subjectChain.asObservable();


    init() {
        const baseUrl = environment.local_url; 
        const http$ = createHttpObservable(`${baseUrl}/chains`);
        console.log(this.chains$.subscribe())
        http$
            .pipe(
                tap(() => console.log('HTTP request executed')),
                map(res => Object.values(res['payload']))
            )
            .subscribe(
                chains => this.subjectChain.next(chains)
            );
    }
    selectAllChains() {
        console.log("chainsSelct")
        console.log(this.chains$.subscribe())
        return this.noFilter();
    }
    selectEthereumChains() {
        return this.filterByCategory('ETHEREUM');
    }

    selectPolygonChains() {
        return this.filterByCategory('POLYGON');
    }

    selectChainById(chainId:number) {
        return this.chains$
            .pipe(
                map(chains => chains.find(chain => +chain.id == chainId)),
                filter(chain => !!chain)

            );
    }
    noFilter() {
        return this.chains$;
    }
    filterByCategory(category: string) {
        return this.chains$
            .pipe(
                map(chains => chains
                    .filter(chain => chain.category == category))
            );
    }

    saveChain(chainId:number, changes): Observable<any> {

        const chains = this.subjectChain.getValue();

        const chainIndex = chains.findIndex(chain => +chain.id == chainId);

        const newChains = chains.slice(0);

        newChains[chainIndex] = {
            ...chains[chainIndex],
            ...changes
        };

        this.subjectChain.next(newChains);

        return from(fetch(`/api/chains/${chainId}`, {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'content-type': 'application/json'
            }
        }));

    }





}


  