import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsMod } from '../models/news-mods.model';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { firstValueFrom, Observable } from 'rxjs';
import { filter, take, timeout } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class FileService {
  private newsApiUrl = 'YOUR_API_URL';

  constructor(
    private http: HttpClient,
    // private snackBar: MatSnackBar,
    // private afAuth: AngularFireAuth,
  ) {}

  // private async getFirebaseAuthHeader(): Promise<HttpHeaders> {
  //   let currentUser = await this.afAuth.currentUser;
  //   if (!currentUser) {
  //     currentUser = await firstValueFrom(
  //       this.afAuth.authState.pipe(
  //         filter((user): user is any => !!user),
  //         take(1),
  //         timeout(3000),
  //       ),
  //     ).catch(() => null);
  //   }
  //   if (!currentUser) {
  //     throw new Error('Must be logged in with Firebase to upload files');
  //   }
  //   const idToken = await currentUser.getIdToken();
  //   return new HttpHeaders({
  //     Authorization: `Bearer ${idToken}`,
  //   });
  // }

  uploadCsv<T>(url: string, file: File, headers?: HttpHeaders): Observable<T> {
    const formData = new FormData();
    // const headersWithAuth = headers ? headers : new HttpHeaders();
    formData.append('file', file);

    return this.http.post<T>(url, formData /*, { headers: headersWithAuth }*/);
  }

  // uploadResearchNewsCsv(file: File): Promise<NewsMod[]> {
  //   return this.getFirebaseAuthHeader().then((headers) => {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     return lastValueFrom(
  //       this.http.post<NewsMod[]>(`${this.newsApiUrl}/bulk/csv`, formData, { headers })
  //     );
  //   }).then((savedNews) => {
  //     this.snackBar.open(`${savedNews.length} research URLs imported`, undefined, { duration: 3000 });
  //     return savedNews;
  //   }).catch((error) => {
  //     console.error('Error uploading research CSV:', error);
  //     this.snackBar.open('Error uploading research CSV', undefined, { duration: 3000 });
  //     throw error;
  //   });
  // }
}
