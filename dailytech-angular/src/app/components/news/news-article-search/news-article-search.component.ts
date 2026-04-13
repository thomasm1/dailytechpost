import { Component, OnInit } from '@angular/core';
import { SearchData } from '../../../models/SearchData';
import { NgForm } from '@angular/forms';
import * as momentNs from 'moment';
import { Store } from '@ngrx/store';
import { SearchNewsStart } from '../../../reducers/news.actions';
 

const moment = momentNs as any;

@Component({
  selector: 'app-news-article-search',
  templateUrl: './news-article-search.component.html',
  styleUrls: ['./news-article-search.component.css'],
 
})
export class NewsArticleSearchComponent implements OnInit {
  searchData: SearchData = <SearchData>{
    sort: 'newest'
  };
  today: Date = new Date();
constructor(
    private store: Store<any>
  ) {
}
ngOnInit() {
  }
search(searchForm: NgForm) {
    const searchData = this.searchData as SearchData & { sort?: string };
    const data: any = {
      begin_date: searchData.begin_date ? moment(searchData.begin_date).format('YYYYMMDD') : undefined,
      end_date: searchData.end_date ? moment(searchData.end_date).format('YYYYMMDD') : undefined,
      q: searchData.q,
      sort: searchData.sort,
    }
    this.store.dispatch(new SearchNewsStart(data));
  }
}
