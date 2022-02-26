import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  isShown: boolean = true;

  constructor(private ele : ElementRef) {}

  ngOnInit(): void {}

  // let tag = ele.nativeElement.querySelector('li');

  toggleShow() {
    this.isShown = !this.isShown;
    
  // if (myTag.classList.contains('text-truncate-container')) {
  //   myTag.classList.add('none');
  // }
  }
}
