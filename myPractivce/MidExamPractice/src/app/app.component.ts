import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p ngNonBindable>
  {{title}}
  </p>
  <app-list [color]='obj' (click)='changeColor($event)'>{{title}}<app-list>
  
  `,
  styles: [`

  `
]
})
export class AppComponent {
  title = 'MidExamPractice';
  obj:{wet:string,hot:string}={wet:"green",hot:"yellow"}
  id:any=Math.floor(Math.random()*10+1);
  changeColor(e:any){
if(this.id%2===0){
this.obj.wet=e.target.value;
}
  }
  
}
