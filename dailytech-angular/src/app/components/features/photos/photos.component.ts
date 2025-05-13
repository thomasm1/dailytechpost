import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { GrootService } from '../../services/groot.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  // photos!: Observable<Object>;
  photos: any; //Subscription | undefined;
  private  photo:any;
  memberid: any = '0';
      albumId: any = '0';
  constructor(
    private grootService: GrootService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.memberid = this.route.snapshot.params['memberid'];
    // this.photos = this.grootService.getPhotos(this.albumId);
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('albumId');
    this.grootService.getPhotos(this.albumId)
      .subscribe(data => {
        this.photos = data;
      });
    });
      
  // OnDestroy() {
  //   if (this.photos) {
  //     this.photos.unsubscribe();
  //   }
  // }

  }
}
                    