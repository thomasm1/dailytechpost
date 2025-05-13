import { Component, OnInit  } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit   {
  
  newsLoading : boolean = true;
  sections: string[] = `arts, automobiles, books, business, fashion, food, health,
    home, insider, magazine, movies, national, nyregion, obituaries,
    opinion, politics, realestate, science, sports, sundayreview,
    technology, theater, tmagazine, travel, upshot, world`
      .replace(/ /g, '')
      .split(',');
  results: any[] = [];
  selectedSection: string = 'technology';
constructor(
    private newsService: NewsService
  ) { }
ngOnInit() {
    this.getArticles(); 
  }
getArticles() {
    this.newsService.getArticles(this.selectedSection)
      .subscribe(res => {
        this.results = (res as any).results;
        this.newsLoading = false;
      })
  }
}
