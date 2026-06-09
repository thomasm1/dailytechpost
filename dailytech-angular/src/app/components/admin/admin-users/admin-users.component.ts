import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UtilServiceService } from '../../../utility/util-service.service';

interface AdminUser {
  id?: string;
  uid?: string;
  email?: string;
  displayName?: string;
  emailVerified?: boolean;
  disabled?: boolean;
  providers?: string[];
  creationTimestamp?: number;
  lastSignInTimestamp?: number;
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {


  displayedColumns = ['email','emailVerified', 'displayName', 'providers', 'status', 'creationTimestamp', 'lastSignInTimestamp', 'id'];
  users$!: Observable<AdminUser[]>;

  constructor(private http: HttpClient, private utilService: UtilServiceService) {}

  ngOnInit(): void {
    this.users$ = this.http.get<AdminUser[]>(`${environment.API_URL}/admin/firebase-users`);
  }

}
