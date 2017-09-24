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
    private query: IPreziQuery;

    constructor(private prezlyQuery: PrezliQueryService) {
        this.query = {};
        this.prezlyQuery.getPrezlies(this.query).subscribe((data: IPrezlyResult) => {
            this.preziCards = data.docs;
        });
    }

    ngOnInit() {
      //
        this.preziCards = [];
    }

    public onSearch (event: string) {
      console.log(event);
      this.query.page = 1;
      this.query.title = event;
      //TODO: handle empty search -> get whole list
      this.prezlyQuery.getPrezlies(this.query).subscribe((data: IPrezlyResult) => {
          this.listUpdated(data);
      });
    }

    public listUpdated (data: IPrezlyResult) {
        console.log('listUpdated:', data);
        this.preziCards = data.docs;
    }
}
