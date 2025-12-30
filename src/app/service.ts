import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import {
  Firestore,
  doc,
  docData,
  setDoc,
  updateDoc
} from '@angular/fire/firestore';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  favorites:[]=[]
  user$ = new BehaviorSubject<User | null>(null);
  private apiKey = 'e8b239c035a81c1ebff0c13d0e949899';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient, private auth:Auth,
    private firestore:Firestore ) {
   const audth = getAuth();
    onAuthStateChanged(audth, (user) => {
      this.user$.next(user);
    });
  
  }
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

  signupuser(email:string, password:string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  login( email:string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
signout(){
  return signOut(this.auth)
}
adduser(id:string, data:any){
  const docref = doc(this.firestore,`user/${id}` )
  return setDoc(docref,data)
}
addfav(id:any, data:any){
  const docref = doc(this.firestore,`user/${id}` )
  return updateDoc(docref,data)
}
getdoc(id:any){
   const docref = doc(this.firestore,`user/${id}` )
  return docData(docref)
}
searchMovies(query: string) {
    return this.http.get<any>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
  }
}