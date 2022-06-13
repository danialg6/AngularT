import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { ColorDirective } from './color.directive';
import { StudentComponent } from './student.component';
import { SwapLetterPipe } from './swap-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ColorDirective,
    StudentComponent,
    SwapLetterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
