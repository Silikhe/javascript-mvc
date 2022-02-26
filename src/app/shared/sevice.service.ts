import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeviceService {
  baer_url = 'https://news-portal-silikhe.herokuapp.com';

  constructor(private http : HttpClient) {}

  // getUsers() {

  //   // return this.http.get<any>(`${baseUrl}users`)
  //   return this.http.get<any>('https://api.github.com/users').subscribe((data) => {
  //     this.username = data.total;
  //     console.log(this.username);
  //   });
  // }

  postNews(data: any) {
    console.log(data)
    return this.http.post<any>(`${this.baer_url}/news/new`, data).pipe(map((res) => res));
  }

  getNew(){
    return this.http.get<any>(`${this.baer_url}/news`).pipe(map((res) => {
      console.log(res)
      return res
    }));
  }
}
