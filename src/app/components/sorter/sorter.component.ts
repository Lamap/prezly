import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'prezly-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.less']
})
export class SorterComponent implements OnInit {
  public value: boolean = true;
  constructor() { }
  @Output() onUpdated = new EventEmitter<boolean>();
  @Input() name: string;
  ngOnInit() {
    this.value = true;
  }
  public switch() {
    this.value = !this.value;
    this.onUpdated.emit(this.value);
  }

}
