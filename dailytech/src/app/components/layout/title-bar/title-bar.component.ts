import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  template: `
<hr>
<h2> <span class="daily-tech monoton text-box">OUR DAILY TECH</span> </h2>
<hr>
  `,
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
