
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-news-article-results',
  templateUrl: './news-article-results.component.html',
  styleUrls: ['./news-article-results.component.css']
})
export class NewsArticleResultsComponent implements OnInit {
  searchResults: any[] = [];
constructor(
    private store: Store<any>
  ) {
    store.pipe(select('searchResults'))
      .subscribe(searchResults => {
        this.searchResults = searchResults;
      })
  }
ngOnInit() {
  }
}