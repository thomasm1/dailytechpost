import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    a {
      color:rgb(220, 220, 247);text-decoration:none;
    }
    .footer {
      position:absolute;
      bottom:0px;
      left:0px;
      right:0px;
      height: 80px; 
      color:rgb(220, 220, 247);
      padding-top:20px;
      text-align:center;
      line-height:2rem;
      background-color:#1976d2;
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
