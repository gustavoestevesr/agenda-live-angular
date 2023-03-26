import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live';

@Injectable({
  providedIn: 'root',
})
export class LiveService {
  apiUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getPreviousLives(): Observable<Live> {
    return this.httpClient.get<Live>(`${this.apiUrl}/previous`);
  }

  public getNextLives(): Observable<Live> {
    return this.httpClient.get<Live>(`${this.apiUrl}/next`);
  }

  public postLives(live: any): Observable<Live> {
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
