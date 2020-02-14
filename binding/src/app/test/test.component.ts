import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>

  <h1>T11 Two Way Binding</h1>
  <input [(ngModel)]="name" type="text">
  {{name}}


  <h1>T10 Template Reference Variables</h1> 
  <input #myInput type="text">
  <button (click)="logMessage(myInput)">Log</button>


  <h1>T9 Event Binding</h1> 
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome Bei'">Greet</button>
  {{greeting}}


  <h1>T8 Style Binding</h1>
  <h2 [style.color]= "hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

  <h1>T7 Class Binding</h1>
  <h2 class="text-success">Codelvolution</h2>
  <h2 [class]="successClass">Codelvolution</h2>

  <h2 class="text-special" [class]="successClass">Codelvolution</h2>
  <h2 [class.text-danger]="hasError">Codelvolution</h2>

  <h2 [ngClass]="messageClasses">Codelvolution</h2>s

  <h1>T6 Property Binding</h1>
  <input [id]="myId" type="text" value="Bei">
  <input bind-disabled="isDisabled" id={{myId}} type="text" value="Bei">

  <h1>T5 Interpolation</h1>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome " + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteURL}}</h2>
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name =""
  public siteURL = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public greeting = "";


  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event)
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

}
