import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-list',
  template: `
    <p>
      list works!
{{title}}
    </p>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {
  constructor(elem:ElementRef,renderer:Renderer2) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
title = 'MidExamPractice';
  @Input('color') color:{wet:string,hot:string}={wet:"green",hot:"yellow"}
  @Output('click') colorChange:EventEmitter<string>=new EventEmitter();

  id:any=Math.floor(Math.random()*10+1);
  mycolor:string="";
  changeColor(event:any){
    if(this.id%2===0){
      this.mycolor=this.color.wet
this.colorChange.emit('mycolor')
    }else{
      this.mycolor=this.color.hot
      this.colorChange.emit('mycolor')
    }
  }
}



