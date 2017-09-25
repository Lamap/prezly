import { Component, OnInit } from '@angular/core';
import {
    PrezliQueryService, IPreziCard, IPrezlyResult, IPreziQuery,
    PrezlySortValues
} from '../../services/prezi-query.service';

@Component({
  selector: 'prezly-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.less']
})
export class ListViewComponent implements OnInit {
    public preziCards: IPreziCard[];
    public sort: PrezlySortValues;
    public query: IPreziQuery;
    public pageCount: number = 0;

    constructor(private prezlyQuery: PrezliQueryService) {
        this.query = {};
        this.updateList();
    }

    ngOnInit() {
      //
        this.preziCards = [];
    }

    public onSearch (event: string) {
      console.log(event);
      this.query.page = 1;
      if (event === '') {
        this.query = {page: 1};
        return this.updateList();
      }
      this.query.title = event;
      this.updateList();
    }

    public listUpdated (data: IPrezlyResult) {
        console.log('listUpdated:', data);
        this.preziCards = data.docs;
    }
    public sortChanged(event: boolean) {
      this.query.sort = event ? 'modifiedAt' : '-modifiedAt';
      this.updateList();
    }
    public pageChanged(event: number) {
      console.log(event);
      this.query.page = event;
      this.updateList();
    }
    private updateList() {
      this.prezlyQuery.getPrezlies(this.query).subscribe((data: IPrezlyResult) => {
        console.log(data.pages);
        this.pageCount = data.pages;
        this.preziCards = data.docs;
      });
    }
}
