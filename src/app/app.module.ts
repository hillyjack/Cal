import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CcaBankComponent } from './cca-bank/cca-bank.component';
import { CcaBankBranchComponent } from './cca-bank-branch/cca-bank-branch.component';


@NgModule({
  declarations: [
    AppComponent,
    CcaBankComponent,
    CcaBankBranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
