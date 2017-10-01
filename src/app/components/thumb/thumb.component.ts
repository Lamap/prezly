import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {IPreziCard} from '../../services/prezi-query.service';
//import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService} from 'ngx-bootstrap';
//import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import * as moment from 'moment';
import {Moment} from "moment";

@Component({
  selector: 'prezly-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.less']
})
export class ThumbComponent implements OnInit {

    public timeInfo: string;
    public modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    @Input() prezi: IPreziCard;

    ngOnInit() {
         //TODO: handle times with momentjs and within a pipe
        const updatedDate: Moment = moment(this.prezi.modifiedAt);
        this.timeInfo = 'Updated at ' +  updatedDate.format('Do MMMM YYYY');
    }
    public openModal (template: TemplateRef<any>) {
      console.log('open');
      this.modalRef = this.modalService.show(template);
    }
}
