import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  template: `
<hr>
<h2> <span class="daily-tech monoton text-box">OUR DAILY TECH</span> </h2>
<hr>
  `,
  styles: [
    ` 
hr {
    background: rgb(195, 196, 255);
    max-width: 60%;
    margin: 30px auto;
}

button {
    margin-right: 10px;
}
 
div.temp {
    max-height: 600px;
    min-height: 500px;
    width: 90%;
    padding: 10px;
    color: whitesmoke;
    background: rgba(96, 79, 245, 0.692);
    border-radius: 5px;
    margin: 30px auto;
}
    `
  ]
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
