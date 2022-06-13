import { Component,EventEmitter, OnInit ,Input,Output} from '@angular/core';


@Component({
  selector: 'app-student',
  template: `
    
  
      <h1>Student</h1>
      <p>ID:{{student.ID}} - Name:{{student.name}}</p>
      <Input [value]="name" (input)="changeName($event)" placeholder="Enter New Name">
    <button (click)="update()">update</button>
  `,
  styles: [
  ]
})
export class StudentComponent  {
  name: any;

  constructor() { }
@Input() student:{ID:string,name:string}={ID:'default',name:'default'}
@Output() changeNameEvent: EventEmitter<string>=new EventEmitter
changeName(e:any){
  this.name=e.target.value
  this.changeNameEvent.emit(this.name)
}
update(){
  this.student.name=this.name;

}

//   ngOnInit(): void {
//   }

}
