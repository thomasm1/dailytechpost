import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name = '';

  message = 'Welcome '+ this.name;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  
   this.name = this.route.snapshot.params['name'];
   console.log(this.name)
   this.message = 'Welcome '+ this.name;
  }

}
