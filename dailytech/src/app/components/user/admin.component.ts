import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDataService } from '../../service/data/admin-data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() writingStart = new EventEmitter<void>();

  name = '';
  message = 'Welcome ' + this.name;
  getPostFromService: string;
  // cat3 = {
  //   "a":"b"
  // }

  constructor(private route: ActivatedRoute,
    private adminService: AdminDataService) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    this.getParameterUpdate();

  }
onStartWriting() {
      this.writingStart.emit();
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
