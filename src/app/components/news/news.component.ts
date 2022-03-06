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

  constructor(private ele : ElementRef, private apiSer : SeviceService ) {
    // let tag = ele.nativeElement.querySelector('#text');

  }

  ngOnInit(): void {
    this.apiSer.newsRequest().then(data =>{
      this.news = data;
    })
  }

  deleteNewsData(id: any){
    this.apiSer.deleteRequest(id).subscribe({
      next:(res)=>{
        this.news.slice(id, 1);

        alert("Deleted Sucessfully")
      }
    })
  }


  toggleShow() {
    this.isShown = !this.isShown;
    
  }

  
}
