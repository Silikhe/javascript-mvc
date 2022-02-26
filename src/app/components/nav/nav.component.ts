import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms'
import { SeviceService } from '../../shared/sevice.service'
import { NewsModel } from '../../model/app-model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  formValue !: FormGroup;
  newsObject : NewsModel = new NewsModel();

  constructor(private formBuilder : FormBuilder, private apiSer : SeviceService ) {
   }

  ngOnInit(): void {
    // this.apiSer.getNews()
    this.formValue = this.formBuilder.group({
      title :  [''],
      description: [''],
      type:  [''],
      author:  ['']
    })
  }

  postNewsData(){
        this.apiSer.getNews()

    this.newsObject.title = this.formValue.value;
    this.newsObject.description = this.formValue.value;
    this.newsObject.type = this.formValue.value;
    this.newsObject.author = this.formValue.value;

    this.apiSer.postNews(this.newsObject).subscribe(response =>{
      console.log(response)
      console.log("New added Succesfully")
    }, err =>{
      console.log("Something went wrong")
    })
  }

  
}
