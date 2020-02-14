import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1> T13 ngSwitch Directive </h1>
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
  constructor() { }

  ngOnInit(): void {
  }

}
