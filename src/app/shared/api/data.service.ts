import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Faqs } from '../models/faqs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //Stub data for testing purpose
  endpoint = '/assets/data/faqs.json';
  constructor(private http: HttpClient) {}

  // Fetch call get faqs
  getFaqs(): Observable<Faqs[]> {
    return this.http
      .get<Faqs[]>(this.endpoint)
      .pipe(retry(1), catchError(this.handleError));
  }

  //Method to handle error
  handleError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(message);
  }
}
