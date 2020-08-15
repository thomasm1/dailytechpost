import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    a {
      color:rgb(220, 220, 247);text-decoration:none;
    }
    footer { 
       padding: 20px 0px 20px;
      color:rgb(220, 220, 247); 
      text-align:center;
      line-height:2rem; 
    background: rgba(96, 79, 245, 0.692);
 
   
    }
   
  `

  ]
})
export class FooterComponent implements OnInit {

  dt = new Date;

  copyright = `Copyright 2019, ${this.dt.getFullYear()} All Rights Reserved.    |  `;

  constructor() { }

  ngOnInit(): void {
  }

}
