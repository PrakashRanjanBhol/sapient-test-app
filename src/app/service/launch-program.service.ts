import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
const endpoint = 'https://api.spaceXdata.com/v3/launches?limit=100';

@Injectable({
  providedIn: 'root'
})
export class LaunchProgramService {

  constructor(private http: HttpClient) { }

  getLaunchProgram(queryParam): Observable<any> {
    console.log(queryParam);

    const requestedLaunch = (queryParam.launch === '1' || queryParam.launch === '2') ? `&lauch_success=${queryParam.launch === '1' ? 'true' : 'false'}` : '';
    const requestedLanding = (queryParam.landing === '1' || queryParam.landing === '2') ?
      `&land_success=${queryParam.landing === '1' ? 'true' : 'false'}` : '';
    const requestedYear = queryParam.year === '0' ? '' : `&launch_year=${queryParam.year}`;
    return this.http.get(`${endpoint}${requestedLaunch}${requestedLanding}${requestedYear}`).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error} `);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
