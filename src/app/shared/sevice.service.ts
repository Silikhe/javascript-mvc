import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeviceService {
  // let baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  newsRequest() {
    interface apiRespose {
      name: string;
      description: string;
      imageUrl: string;
    }

    let promise = new Promise((resolve, reject)=>{
      this.http.get<apiRespose>(environment.baseUrl)..toPromise().then(response =>{
        this.name = 
      })
    })
  }
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };

  // getUsers() {

  //   // return this.http.get<any>(`${baseUrl}users`)
  //   return this.http.get<any>('https://api.github.com/users').subscribe((data) => {
  //     this.username = data.total;
  //     console.log(this.username);
  //   });
  // }

  // postNews(data: any) {
  //   console.log(data);
  //   return this.http
  //     .post<any>(`${this.baer_url}/news`, data)
  //     .pipe(map((res) => res));
  // }

  // getNews() {
  //   return this.http.get<any>(`${this.baer_url}/news`).pipe(
  //     map((res) => {
  //       console.log(res);
  //       return res;
  //     })
  //   );
  // }

  // getUsers() {
  //   return this.http.get<any>(`${this.baer_url}/users`).pipe(
  //     map((res) => {
  //       console.log(res);
  //       return res;
  //     })
  //   );
  // }
}
