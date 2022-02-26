import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment'

@Injectable({
  providedIn: 'root',
})
export class SeviceService {
  baer_url = 'https://news-portal-silikhe.herokuapp.com'

  constructor(http: HttpClient) {}

  // getUsers() {

  //   // return this.http.get<any>(`${baseUrl}users`)
  //   return this.http.get<any>('https://api.github.com/users').subscribe((data) => {
  //     this.username = data.total;
  //     console.log(this.username);
  //   });
  // }


  postNews(data : any){
    return this.http.post<any>(`${baseUrl}/new`)
  }
}
