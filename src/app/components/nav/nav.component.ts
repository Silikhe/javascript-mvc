import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms'
import { SeviceService } from '../../model/shared/sevice.service'
import { NewsModel } from '../../model/app-model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  formValue !: FormGroup;
  newsObject : NewsModel = new NewsModel();
  display = "none";


  constructor(private formBuilder : FormBuilder, private apiSer : SeviceService ) {
   }

  ngOnInit(): void {
    // this.apiSer.newsRequest()
    this.formValue = this.formBuilder.group({
      name :  [''],
      description: [''],
      imageUrl:  ['']
    })
  }

  postNewsData(){
       
    this.apiSer.postRequest(this.formValue.value).subscribe({
      next:(res)=>{
        alert("added Sucessfully")
      }
    })
  }


  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  
}
