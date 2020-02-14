import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  @Output() public childEvent2 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
    this.childEvent2.emit('This is another line');
  }

}
