import { Component, OnInit } from '@angular/core';
import {
    PrezliQueryService, IPreziCard, IPrezlyResult, IPreziQuery,
    PrezlySortValues
} from '../../services/prezi-query.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    public status: string;
    public isBusy: boolean;

    constructor(private prezlyQuery: PrezliQueryService) {
        this.query = {};
        this.updateList();
    }

    ngOnInit() {
      //
        this.preziCards = [];
    }

    public onSearch (event: string) {
      this.query.page = 1;
      if (event === '') {
        this.query = {page: 1};
        return this.updateList();
      }
      this.query.title = event;
      this.updateList();
    }

    public sortChanged(event: boolean) {
      this.query.sort = event ? 'modifiedAt' : '-modifiedAt';
      this.updateList();
    }
    public pageChanged(event: number) {
      this.query.page = event;
      this.updateList();
    }
    private updateList() {
        this.isBusy = true;
        this.status = '';
        this.prezlyQuery.getPrezlies(this.query).subscribe((data: IPrezlyResult) => {
            this.pageCount = data.pages;
            this.preziCards = data.docs;
            this.isBusy = false;
            if (!data.docs.length) {
                return this.status = 'There is no result for searching "' + this.query.title + '".';
            }
        }, (error: HttpErrorResponse) => {
            this.isBusy = false;
            this.status = 'Opps, something went wrong, please keep calm.';
            if (error.message) {
                this.status += '\n The problem is: ' + error.message;
            }
        });
    }
}
