import { Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-asaad',
  template: `
    <p #para>
      {{petName}} - {{breed}}
    </p>
    <input value="Asaad"#i/>
    <ng-content></ng-content>
    <button (click)="handleClick()">Send a message to the parent</button>
  `,
  // inputs: ['petName', 'breed']
  // outputs: []
})
export class AsaadComponent implements OnInit {
  name: string = ''
  constructor() { console.log({ petnameConst: this.petName }) }
  ngOnInit(): void {
    console.log({ petnameInit: this.petName })
  }
  @ViewChild('para') paragraph: any; //nativeElemnt
  @ViewChild('i') inp: any;
  @ContentChild('acontent') ac: any;
  @ContentChild('another') anoth: any;

  @Input() petName: string = '';
  @Input() breed: string = '';

  @Output() eating: EventEmitter<string> = new EventEmitter();
  @Output() teaching: EventEmitter<{ msg: string }> = new EventEmitter();

  handleClick() {
    this.paragraph.nativeElement.innerHTML = 'Theo is the best Goldendoole'
    this.inp.nativeElement.value = 'Theo my dear!'
    this.ac.nativeElement.innerHTML = 'Theo is the students favorite!'
    this.anoth.nativeElement.innerHTML = 'Theo!!!!!!!'
    this.eating.emit('Theo is my best buddy!')
    this.teaching.emit({ msg: 'Time for a break!!!' })
  }



}
