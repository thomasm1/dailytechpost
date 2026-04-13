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
        const rawResults = (res as any).results || [];
        this.results = rawResults.map((item: any) => ({
          ...item,
          bestImage: this.selectBestImage(item.multimedia)
        }));
        this.newsLoading = false;
      }, () => {
        this.results = [];
        this.newsLoading = false;
      })
  }

  private selectBestImage(multimedia: any): { url: string; caption?: string } | null {
    const mediaList = Array.isArray(multimedia) ? multimedia : [];
    const validImages = mediaList.filter((m: any) => m?.url);
    if (!validImages.length) {
      return null;
    }

    const best = validImages.reduce((winner: any, current: any) => {
      const winnerScore = (winner?.width || 0) * (winner?.height || 0);
      const currentScore = (current?.width || 0) * (current?.height || 0);
      return currentScore > winnerScore ? current : winner;
    }, validImages[0]);

    return {
      url: best.url,
      caption: best.caption,
    };
  }
}
