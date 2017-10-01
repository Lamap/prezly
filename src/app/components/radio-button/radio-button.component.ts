import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';

export interface IRadioValue {
  label?: string;
  value: any;
}

@Component({
  selector: 'prezly-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent implements OnInit {

  constructor() { }

  @Input() items: IRadioValue[];
  @Input() selectedValue: any;
  @Output() selectedValueChange = new EventEmitter<any>();
  ngOnInit() {
  }
  public onItemSelected(item: IRadioValue) {
    this.selectedValue = item.value;
    this.selectedValueChange.emit(this.selectedValue);
  }
}
