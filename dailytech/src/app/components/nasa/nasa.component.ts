import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NasaService } from '../../service/nasa.service';
import { Nasa } from '../../models/nasa.model';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {
  // urlNasa =  `https://api.nasa.gov/planetary/apod?api_key=${this.nasaKey}`;
  object;
    listNasa: Nasa[] ;

  constructor(
    private nasa: NasaService
  ) { }

  ngOnInit()  {
    this.displayNasa();
    this.getNasaStores();
  }
getNasaStores() {
   this.nasa.getNasaStores().subscribe(response => {
      this.listNasa = response;
      console.log(this.listNasa)
   });
   return this.listNasa;
}
displayNasa() {
  this.object = this.nasa.getNasa();
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
