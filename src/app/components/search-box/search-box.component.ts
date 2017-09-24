import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'prezly-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.less']
})
export class SearchBoxComponent implements OnInit {

  public value: string = '';
  constructor() { }
  @Output() onSubmit = new EventEmitter<string>();

  ngOnInit() {
  }

  public searchIt() {
      this.onSubmit.emit(this.value);
  }
}
