import { Component, OnInit } from '@angular/core';
import { SeviceService } from '../../model/shared/sevice.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  news: any = [];

  constructor(private apiSer: SeviceService, private snackbar: MatSnackBar ) {}

  ngOnInit(): void {
    this.apiSer.newsRequest().then((data) => {
      this.news = data;
    });
  }

  deleteNewsData(id: number) {
    this.apiSer.deleteRequest(id).subscribe({
      next:(res)=>{

        this.news.slice(id, 1);
        this.snackbar.open('Deleted Sucessfully', 'Ok', {
          duration: 2000
        });

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    })
  
  }
}
