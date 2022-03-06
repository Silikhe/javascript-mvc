import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms'
import { SeviceService } from '../../model/shared/sevice.service'
import { NewsModel } from '../../model/app-model'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  formValue !: FormGroup;
  newsObject : NewsModel = new NewsModel();
  display = "none";

  div: boolean = false;

  constructor(private formBuilder : FormBuilder, private apiSer : SeviceService,  private dialog: MatDialog, private snackbar: MatSnackBar ) {
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
        this.snackbar.open('Post Created Successfully', 'Ok', {
          duration: 5000
        });
      }
    })
  }

  openDialog() {
    this.dialog.open(FormComponent);
  }

 

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }


  onClear() {
    this.formValue.reset();
  }

  divFunction() {
    this.div = true;
  }

   onSubmit() {
    const dialogConfig = new MatDialogConfig();
    setTimeout(() => {
      this.dialog.closeAll();
      window.location.reload();
    }, 1000);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
  }

  
  
}
