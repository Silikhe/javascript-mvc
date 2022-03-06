import { Component, OnInit } from '@angular/core';
import { SeviceService } from '../../model/shared/sevice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  news: any = [];

  constructor(private apiSer: SeviceService) {}

  ngOnInit(): void {
    this.apiSer.newsRequest().then((data) => {
      this.news = data;
    });
  }

  deleteNewsData(id: number) {
    this.apiSer.deleteRequest(id).subscribe({
      next:(res)=>{

        this.news.slice(id, 1);

        alert("Deleted Sucessfully")
      }
    })
    // this.apiSer.delete(id).then((data) => {
    //   this.news.slice(id, 1);
    //   alert('Deleted Sucessfully');
    //   console.log(data);
    //   // this.news = data;
    // });
  }
}
