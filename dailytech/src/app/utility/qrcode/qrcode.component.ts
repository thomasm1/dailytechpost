import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  // https://www.techiediaries.com/ngx-qrcode/
  //encoding modes (numeric, alphanumeric, byte/binary, and kanji) to
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://blog.ourdailytech.net/';
  constructor() { }

  ngOnInit(): void {
  }

}
