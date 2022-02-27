import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { News } from '../../model/news-class/news';
// import { apiRespose} from '../interface/interface'

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

    return promise;
  }

  postRequest(data:any) {
    interface apiRespose {
      name: string;
      description: string;
      imageUrl: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .post<any>(environment.baseUrl, data)
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

    return promise;
  }


  
}
