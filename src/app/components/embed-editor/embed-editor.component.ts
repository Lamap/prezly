import {Component, Input, OnInit} from '@angular/core';
import {IPreziCard} from '../../services/prezi-query.service';
import { BsModalRef } from 'ngx-bootstrap';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

@Component({
  selector: 'prezly-embed-editor',
  templateUrl: './embed-editor.component.html',
  styleUrls: ['./embed-editor.component.less']
})
export class EmbedEditorComponent implements OnInit {
  public test: string;
  public width: number = 200;
  public height: number = 300;
  constructor(private clipboard: ClipboardService) { }
  @Input() prezly: IPreziCard;
  @Input() modalRef: BsModalRef;

  ngOnInit() {
    this.test = JSON.stringify(this.prezly);
  }
  copyToClipboard () {
    console.log('copyTo');
    this.clipboard.copy(this.prezly._id);
  }
}
