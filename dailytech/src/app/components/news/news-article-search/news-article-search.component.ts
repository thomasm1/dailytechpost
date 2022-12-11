import { Component, OnInit } from '@angular/core';
import { SearchData } from '../../../models/search-data';
import { NgForm } from '@angular/forms';
import { NewsService } from '../news.service';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { SET_SEARCH_RESULT } from '../../../reducers/news-search.reducer';

@Component({
  selector: 'app-news-article-search',
  templateUrl: './news-article-search.component.html',
  styleUrls: ['./news-article-search.component.css']
})
export class NewsArticleSearchComponent implements OnInit {
  searchData: SearchData = <SearchData>{
    sort: 'newest'
  };
  today: Date = new Date();
constructor(
    private newsService: NewsService,
    private store: Store<any>
  ) {
}
ngOnInit() {
  }
search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    const data: any = {
      begin_date: moment(this.searchData.begin_date).format('YYYYMMDD'),
      end_date: moment(this.searchData.end_date).format('YYYYMMDD'),
      q: this.searchData.q
    }
    this.newsService.search(data)
      .subscribe(res => {
        this.store.dispatch({ type: SET_SEARCH_RESULT, payload: (res as any).response.docs });
      })
  }
}
