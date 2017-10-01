import {Component, Input, OnInit, OnChanges, SimpleChanges, NgZone} from '@angular/core';

@Component({
  selector: 'prezly-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.less']
})
export class MessagePageComponent implements OnInit, OnChanges {

    constructor(private zone: NgZone) {this.message = 'Sorry...'; }

    @Input() message: string;

    ngOnInit() {}

    ngOnChanges (changes: SimpleChanges) {}

}
