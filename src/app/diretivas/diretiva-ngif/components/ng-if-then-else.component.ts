import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-if-then-else',
  template: `
    <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
    <button (click)="switchPrimary()">Switch Primary</button>
    show = {{show}}
    <br>
    <div *ngIf="show; then thenBlock; else elseBlock">this is ignored</div>
    <ng-template #primaryBlock>Primary text to show</ng-template>
    <ng-template #secondaryBlock>Secondary text to show</ng-template>
    <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
`
})
export class NgIfThenElse implements OnInit {
  thenBlock: TemplateRef<any>|null = null;
  show: boolean = true;

  @ViewChild('primaryBlock', {static: true})
  primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('secondaryBlock', {static: true})
  secondaryBlock: TemplateRef<any>|null = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  ngOnInit() { this.thenBlock = this.primaryBlock; }
}
