// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <h1>App</h1>
//   <p>student name:{{student.name}}</p>
//   <app-student [student]="student"
  
//   (changeNameEvent)="changeName($event)"
//   ></app-student>
//   `,
//   styles: ['']
// }) 
// export class AppComponent {
//   title = 'lecture3-demo';
//   student:{ID:string,name:string}={ID:'1234567',name:'MOM'}
//   changeName(e:any){
//     this.student.name=e;
//   }



// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-asaad 
    [petName]= "name" 
    [breed]='animalBreed'
    (eating)="handleEating($event)"
    (teaching)="handleTeaching($event)">
    <p #acontent>I'm asaad's content</p>
    <p #another>ANother content</p>
  </app-asaad>
  <app-mike></app-mike>
  `
})
export class AppComponent {

  name: string = 'Theo';
  animalBreed: string = 'Goldendoodle'
  handleEating(e: string) {
    console.log(e)
  }
  handleTeaching(e: { msg: string }) {
    console.log(e.msg)
  }
}
