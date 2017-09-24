import {Component, Input, OnInit} from '@angular/core';
import {IPreziCard} from '../../services/prezi-query.service';

@Component({
  selector: 'prezly-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.less']
})
export class ThumbComponent implements OnInit {

    public timeInfo: string;
    constructor() { }
    @Input() prezi: IPreziCard;

    ngOnInit() {
      /*
    this.prezi = {
      createdAt: new Date(),
      creator: {name: 'Jack Mock'},
      modifiedAt: new Date(),
      thumbnail: 'http://static.snopes.com/app/uploads/2013/08/cleese.jpg',
      title: 'Hovercraft template',
      _id: '324dsf34sfd3q4fsas'
    };
    */
         //TODO: handle times with momemtjs and within a pipe
        const updatedDate: Date = new Date(this.prezi.modifiedAt);
        this.timeInfo = 'Updated at ' +  updatedDate.getDay() + ' of ' + updatedDate.getMonth() + ' '
            + updatedDate.getFullYear();
    }
}
