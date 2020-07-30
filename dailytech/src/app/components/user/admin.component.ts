import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../../service/data/admin-data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name = '';

  message = 'Welcome ' + this.name;

  constructor(private route: ActivatedRoute,
              private adminService: AdminDataService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    console.log(this.name)

  }

  getUpdate() {
    console.log(this.adminService.executeAdminService());
    this.message = 'Welcome ' + this.name;
  }
}
