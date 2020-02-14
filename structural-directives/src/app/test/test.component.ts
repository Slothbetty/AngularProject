import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1> T14 ngFor Directive </h1>
  <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
  <h2>{{f}} {{l}} {{o}} {{e}} {{i}} {{color}}</h2>
  </div>
  
  <h1> T13 ngSwitch Directive </h1>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

  <h1> T12 ngIf Directive </h1>
  <h2 *ngIf = "displayName; else elseBlock">
  Codevolution
  </h2>

  <ng-template #elseBlock>
  <h2>Name is hidden</h2>
  </ng-template>

  <div *ngIf="displayName; then thenBlock2; else elseBlock2"></div>

  <ng-template #thenBlock2>
  <h2>Codevolution 2</h2>
  </ng-template>

  <ng-template #elseBlock2>
  <h2>Hidden 2</h2>
  </ng-template>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  displayName = true;
  public color = "orange";
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
