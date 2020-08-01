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
  getPostFromService: string;


  constructor(private route: ActivatedRoute,
    private adminService: AdminDataService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    console.log(this.name)

  }
  getParameterUpdate() {
    this.adminService.executeParameterService(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
    this.message = 'Welcome ' + this.name;
  }
  getUpdate() {
    this.adminService.executeAdminService().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
    this.message = 'Welcome ' + this.name;
  }
  getErrorUpdate() {
    this.adminService.errorService().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
    this.message = 'Welcome ' + this.name;
  }

  handleResponse(response) {
    this.getPostFromService = response.post
  }

  handleErrorResponse(error) {
    this.getPostFromService = error.error.message;
  }
}
