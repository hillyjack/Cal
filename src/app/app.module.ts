import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { CcaBankComponent } from './cca-bank/cca-bank.component';
import { CcaBankBranchComponent } from './cca-bank-branch/cca-bank-branch.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CcaBankComponent,
    CcaBankBranchComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }