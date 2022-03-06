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
          resolve(response);
          console.log(response);
        })
        .catch((e) => {
          reject(e);
          console.log(e);
        });
    });

    return promise;
  }

  postRequest(data: any) {
    return this.http.post<any>(environment.baseUrl, data);
  }

  deleteRequest(id: any) {
    console.log(`${environment.baseUrl}/${id}`)
    return this.http.delete<any>(`${environment.baseUrl}/${id}`);
  }

  delete(id: number) {
    interface apiRespose {
      name: string;
      description: string;
      imageUrl: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<apiRespose>(`${environment.baseUrl}/${id}`)
        .toPromise()
        .then((response) => {
          resolve(response);
          console.log(response);
        })
        .catch((e) => {
          reject(e);
          console.log(e);
        });
    });

    return promise;
  }
}
