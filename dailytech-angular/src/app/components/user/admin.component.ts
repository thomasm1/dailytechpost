import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Output() writingStart = new EventEmitter<void>();

  name = '';
  message = 'Welcome ' + this.name;
  getPostFromService: string = '';
 
  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name'];
    this.getParameterUpdate();   // /DISABLED UNTIL BASIC AUTH ==> JWT

  }
onStartWriting() {
      this.writingStart.emit();
}

  getParameterUpdate() { 
    this.message = 'Welcome ' + this.name;
  }
 

  handleResponse(response: any) {
    this.getPostFromService = response.post
  }

  handleErrorResponse(error: any) {
    this.getPostFromService = error.error.message;
  }
}
