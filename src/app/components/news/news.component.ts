import { Component, OnInit, ElementRef } from '@angular/core';
import { SeviceService } from '../../shared/sevice.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  isShown: boolean = true;

  constructor(private ele : ElementRef, private apiSer : SeviceService ) {}

  ngOnInit(): void {
    this.getNews()
  }

  // let tag = ele.nativeElement.querySelector('li');

  toggleShow() {

    this.isShown = !this.isShown;
    
  // if (myTag.classList.contains('text-truncate-container')) {
  //   myTag.classList.add('none');
  // }
  }

  getNews(){
    this.apiSer.getNews().subscribe(response =>{
      console.log(response.response)
    })
  }
}
