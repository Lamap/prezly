import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'prezly-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnInit, OnChanges {

  public pages: number[];
  public from: number;
  public to: number;
  constructor() { }
  @Input() actualPage: number;
  @Input() pageCount: number;
  @Input() pagesToDisplay: number;

  @Output() pageChanged = new EventEmitter<number>();
  ngOnInit() {
    this.actualPage = 1;
    this.pageCount = 10;
    this.pagesToDisplay = 3;
  }
  ngOnChanges (changes: SimpleChanges) {
    this.setNumbers();
  }
  public leftClicked () {
    this.actualPage--;
    this.pageChanged.emit(this.actualPage);
  }
  public rightClicked () {
    this.actualPage++;
    this.pageChanged.emit(this.actualPage);
  }
  public onPageClicked (event: number) {
    this.actualPage = event;
    this.pageChanged.emit(this.actualPage);
  }
  private setNumbers () {
    this.from = Math.min(this.actualPage, this.pageCount - this.pagesToDisplay + 1);
    this.to = Math.max(this.from + this.pagesToDisplay - 1, this.pagesToDisplay);
    this.to = Math.min(this.to, this.pageCount);
    this.from = Math.max(this.from, 1);

    this.pages = [];
    for (let i = this.from; i <= this.to; i++) {
      this.pages.push(i);
    }
  }
}
