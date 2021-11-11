import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'X-Auth-Key': environment.apiKey,
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProcessFileService {
  constructor(private http: HttpClient) { }

  addFile = async (file: File): Promise<Observable<File>> =>  {
    const body = {
      document: [(await this.getBase64(file)).split(',')[1]],
    }
    return this.http.post<File>(environment.parseDocumentUrl, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = ()  => resolve(<string>reader.result);
       reader.onerror = error => reject(error);
    });
 }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}
