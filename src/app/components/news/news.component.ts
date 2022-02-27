import { Component, OnInit, ElementRef } from '@angular/core';
import { SeviceService } from '../../model/shared/sevice.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  news: any = [];
  isShown: boolean = true;

  constructor(private ele : ElementRef, private apiSer : SeviceService ) {}

  ngOnInit(): void {
    this.apiSer.newsRequest().then(data =>{
      this.news = data;
    })
  }

  // let tag = ele.nativeElement.querySelector('li');

  toggleShow() {

    this.isShown = !this.isShown;
    
  // if (myTag.classList.contains('text-truncate-container')) {
  //   myTag.classList.add('none');
  // }
  }

  // getNews(){
  //   this.apiSer.getNews().subscribe(response =>{
  //     console.log(response.response)
  //   })
  // }
}
