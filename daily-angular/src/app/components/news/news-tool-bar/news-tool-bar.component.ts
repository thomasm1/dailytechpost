import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SET_NEWS_STATE } from '../../../reducers/news.reducer';

@Component({
  selector: 'app-news-tool-bar',
  templateUrl: './news-tool-bar.component.html',
  styleUrls: ['./news-tool-bar.component.css']
})
export class NewsToolBarComponent implements OnInit {
  menuOpen: boolean;

  constructor( private store: Store<any> ) {
    // SENDS state of the menu to rest of the app
    store.pipe(select('menuState'))
      .subscribe(menuOpen => {
        this.menuOpen = menuOpen;
      })
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.store.dispatch({ type: SET_NEWS_STATE, payload: !this.menuOpen });
  }

}
// this.store.dispatch({ type: SET_MENU_STATE, payload: !this.menuOpen });
