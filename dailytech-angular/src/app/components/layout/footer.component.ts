import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    p {
      font-size:.9rem;
      color:rgb(220, 220, 247);text-decoration:none;

    }
    a.footer-text {
      color:rgb(220, 220, 247);text-decoration:none;
    }
    footer {
      position:fixed;
      bottom:0;
      width:100%;
      z-index:100;

       padding: 20px 0px 20px;
      color:rgb(220, 220, 247);
      text-align:center;
      line-height:2rem;
    background-color: rgba(96, 79, 245, 0.592);
    }
    div.menu {

    background-image: url("../../../assets/bluechipTile.jpg");
    }
    i.fa {
      color:white;
    }


  `

  ]
})
export class FooterComponent implements OnInit {

  dt = new Date;

  copyright = `Copyright 2019, ${this.dt.getFullYear()} All Rights Reserved.      `;

  constructor() { }

  ngOnInit(): void {
  }

}
