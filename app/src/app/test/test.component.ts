import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>T16 Pipes</h1>
  <h2>{{name1}}</h2>
  <h2>{{ name1 | lowercase }}</h2>
  <h2>{{ name1 | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name1 | slice:3:5 }}</h2>
  //json pipe
  <h2>{{ person | json }}</h2>

  //number pipe
  <h2>{{ 5.678 | number:'1.2-3' }}</h2>
  <h2>{{ 5.678 | number:'3.4-5' }}</h2>
  <h2>{{ 5.678 | number:'3.1-2' }}</h2>

  //percentage pipe
  <h2>{{ 0.25 | percent }}</h2>
 
  //currency pipe
  <h2>{{ 0.25 | currency }}</h2>
  <h2>{{ 0.25 | currency: 'GBP' }}</h2>
  <h2>{{ 0.25 | currency: 'CNY' }}</h2>
  <h2>{{ 0.25 | currency: 'GBP': 'code' }}</h2>

  //date pipe
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>

  <h1>T15 Component Interaction<h1>
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name1 = "Codevolution";
  public message ="Welcome to Codevolution";
  public person = {
    "firstname": "John",
    "lastname" : "Doe"
  }
  public date = new Date();

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
