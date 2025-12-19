import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private apiKey = 'e8b239c035a81c1ebff0c13d0e949899';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}
getPopularMovies(page:number): Observable<any> {
     return this.http.get<any>(`${this.baseUrl}/movie/popular`, {
    params: { api_key: this.apiKey, language: 'en-US', page: page.toString() }
  });
  }
  gettopratedMovies(): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/movie/top_rated`, {
    params: { api_key: this.apiKey, language: 'en-US', page: '1' }
  });
  }
  getupcomingMovies(page:number): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/movie/upcoming`, {
    params: { api_key: this.apiKey, language: 'en-US', page: page.toString() }
  });
  }
  getnowplayingMovies(): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/movie/now_playing`, {
    params: { api_key: this.apiKey, language: 'en-US', page: '1' }
  });
  }
  getmoviedetails(id:number): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/movie/${id}`, {
    params: { api_key: this.apiKey, language: 'en-US' }
  });
  }
getsimilarMovies(id:number, page:number): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/movie/${id}/similar`, {
    params: { api_key: this.apiKey, language: 'en-US', page: page.toString()}
  });
  }
}