import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeviceService } from '../../model/shared/sevice.service';
import { NewsModel } from '../../model/app-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formValue!: FormGroup;
  newsObject: NewsModel = new NewsModel();
  display = 'none';

  div: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiSer: SeviceService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.apiSer.newsRequest()
    this.formValue = this.formBuilder.group({
      name: [''],
      description: [''],
      imageUrl: [''],
    });
  }

  postNewsData() {
    this.apiSer.postRequest(this.formValue.value).subscribe({
      next: (res) => {
        this.snackbar.open('Post Created Successfully', 'Ok', {
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
    });
  }

  openDialog() {
    this.dialog.open(FormComponent);
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

  onClear() {
    // this.service.form.reset();
    // this.service.initializeFormGroup();
  }

  divFunction() {
    this.div = true;
  }

  onSubmit() {
    // this.service.addQuote(this.quote);
    const dialogConfig = new MatDialogConfig();
    // this.divFunction();
    setTimeout(() => {
      this.dialog.closeAll();
    }, 1300);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    // this.dialog.open(MyquotesComponent, dialogConfig);
  }
}
