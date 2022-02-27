import { Component, OnInit } from '@angular/core';
import { SeviceService } from '../../model/shared/sevice.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  news: any = [];

  constructor( private apiSer : SeviceService) { }

  ngOnInit(): void {
    this.apiSer.newsRequest().then(data =>{
      this.news = data;
    })
  }

}
