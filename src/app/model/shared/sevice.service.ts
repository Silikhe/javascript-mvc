import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { News } from '../../model/news-class/news';

@Injectable({
  providedIn: 'root',
})
export class SeviceService {
  news: News;
  // let baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.news = new News('', '', '');
  }

  newsRequest() {
    interface apiRespose {
      name: string;
      description: string;
      imageUrl: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<apiRespose>(environment.baseUrl)
        .toPromise()
        .then((response) => {
          // this.news.name = response.name;
          resolve(response);
          console.log(response);
        }).catch(e => {
          reject(e)
          console.log(e)
        });
    });

    // let promise = new Promise((resolve: any, reject: any)=>{
    //   this.http.get<apiRespose>(environment.baseUrl).toPromise().then( res => {
    //     this.news.name = res.name
    //     this.news.description = res.description
    //     this.news.imageUrl = res.imageUrl
    //     resolve(res.json())
    //   }, error =>{
    //     this.news.name = "Silas"
    //     this.news.description = "Dummy Description Might be an error"
    //     this.news.imageUrl = "https://jdjijd/blalalala"

    //     reject(error)
    //     console.log(error)

    //   })
    // fetch(environment.baseUrl).then(res => {
    //   resolve(res.json());
    //   // return res.json();
    // }).catch(e => {
    //   reject(e);
    //   console.log(e);
    // });
    // })

    // return promise

    // }
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

    return promise;
  }
}
