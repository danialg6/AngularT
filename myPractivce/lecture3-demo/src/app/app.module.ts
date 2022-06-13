// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { StudentComponent } from './student.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     StudentComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsaadComponent } from './asaad.component';
import { MikeComponent } from './mike.component';

@NgModule({
  declarations: [
    AppComponent,
    AsaadComponent,
    MikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
