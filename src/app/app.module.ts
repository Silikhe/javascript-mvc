import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [AppComponent, UsersComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
