import {Component, Input, OnChanges, OnInit} from '@angular/core';
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
  public width: number;
  public height: number;
  public code: string;
  constructor(private clipboard: ClipboardService) {
    this.width = 200;
    this.height = 300;
  }
  @Input() prezly: IPreziCard;
  @Input() modalRef: BsModalRef;

  ngOnInit() {
    this.test = JSON.stringify(this.prezly);
    this.generateCode();
  }
  copyToClipboard () {
    this.clipboard.copy(this.code);
  }
  public generateCode() {
    this.code = '<iframe width="' + this.width + '" height="' + this.height + '" id="' + this.prezly._id + '"></iframe>';
  }
}
