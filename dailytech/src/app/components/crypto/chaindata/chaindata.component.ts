import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaindata',
  templateUrl: './chaindata.component.html',
  styleUrls: ['./chaindata.component.scss']
})
export class ChaindataComponent implements OnInit {
@Input() nftData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
