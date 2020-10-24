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
  urlNasa =  `https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`;

  constructor(
    private http:HttpClient,
    private keys:KeysService
  ) { }

  ngOnInit()  {

    this.nasaKey = this.keys.getNasaApi();

    console.log(this.nasaKey);
    // this.nasaKey = environment.nasaKey;
  }
//  xhttp = new XMLHttpRequest();
//  xhttp.onreadystatechange() {

//   if (xhttp.readyState == 4 && xhttp.statusText == "OK") {
//   console.log("onreadystate changed- xhttp.statusText: " + xhttp.statusText);
//     let result = JSON.parse(this.responseText);
//     console.log("this.responseText: "+this.responseText);
//     if (result.copyright != "") {
//       document.getElementById("copyright").innerHTML =
//         "Image Credits: " + result.copyright;
//     } else {
//       document.getElementById("copyright").innerHTML =
//         "Image Credits: " + "Public Domain";
//     }

//     if (result.media_type == "video") {
//       document.getElementById("apod_img_id").style.display = "none";
//       document.getElementById("apod_vid_id").setAttribute("src", result.url);
//     } else {
//       document.getElementById("apod_vid_id").style.display = "none";
//       document.getElementById("apod_img_id").setAttribute("src", result.url);
//     }
//     document.getElementById("reqObject").text = url;
//     document.getElementById("returnObject").innerHTML = JSON.stringify(
//       result,
//       null,
//       4
//     );
//     document.getElementById("apod_explaination").innerHTML = result.explanation;
//     document.getElementById("apod_title").innerHTML = result.title;

//   } /// IF 200
// };
// xhttp.open("GET", url, true);
// xhttp.send();

}
