import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../service/nasa.service';
import { Nasa } from '../../models/nasa.model';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss'],
})
export class NasaComponent implements OnInit {
  object:Nasa;
  listNasa: Nasa[];

  constructor(private nasa: NasaService) {}

  ngOnInit() {
    this.displayNasa();
    this.getNasaStores();
  }

  displayNasa() {
    this.object = this.nasa.getNasa();
    console.log("displayed: "+ this.object)
    return this.object;
  }

  getNasaStores() {
    this.nasa.getNasaStores().subscribe((response) => {
      this.listNasa = response;
      console.log(this.listNasa);
    });
    return this.listNasa;
  }
  storeNasa(): void {
    console.log("stored: "+ this.object.title)
    this.nasa.storeNasa(this.object).subscribe(
      (data:Nasa) => {
        console.log(data);
      },
      (error:any) => console.log(error)
    );
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
