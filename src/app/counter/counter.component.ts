import { Component, HostBinding, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <a href (click)="infoClick()">
     <i class="info circle icon"></i>
  </a>
  Articles: {{count}}
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'header item right floated';
  @Input() count: number;
  @Output() onInfoClicked: EventEmitter<number>

  constructor() { 
    this.onInfoClicked = new EventEmitter();
  }

  infoClick(): boolean {
    this.onInfoClicked.emit(this.count);
    return false;
  }

  ngOnInit(): void {
  }

}
