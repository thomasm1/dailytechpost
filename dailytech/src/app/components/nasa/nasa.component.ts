import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { KeysService } from 'src/app/service/keys.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {
  nasaKey:string = '';
  object;
  // urlNasa =  `https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`;

  constructor(
    private http:HttpClient,
    private keys:KeysService
  ) { }

  ngOnInit()  {
    this.nasaKey = this.keys.getNasaApi();

  }

  displayNasa() {
    this.nasaKey = this.keys.getNasaApi();
    console.log(this.nasaKey);

    this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`)
    .subscribe((response) => {
      this.object = response;
      console.log(this.object);
    })
    return this.object;
  }
    // if (this.object.copyright != "") {
    //   document.getElementById("copyright").innerHTML =
    //     "Image Credits: " + this.object.copyright;
    // } else {
    //   document.getElementById("copyright").innerHTML =
    //     "Image Credits: " + "Public Domain";
    // }

    // if (this.object.media_type == "video") {
    //   document.getElementById("apod_img_id").style.display = "none";
    //   document.getElementById("apod_vid_id").setAttribute("src", this.object.url);
    // } else {
    //   document.getElementById("apod_vid_id").style.display = "none";
    //   document.getElementById("apod_img_id").setAttribute("src", this.object.url);
    // }
    // document.getElementById("reqObject").text = url;
    // document.getElementById("returnObject").innerHTML = JSON.stringify(
    //   this.object,
    //   null,
    //   4
    // );
    // document.getElementById("apod_explaination").innerHTML = this.object.explanation;
    // document.getElementById("apod_title").innerHTML = this.object.title;

}
