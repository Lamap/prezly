import {Component, Input, OnInit } from '@angular/core';
import {IPreziCard} from '../../services/prezi-query.service';
import { BsModalRef } from 'ngx-bootstrap';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';
import {IRadioValue} from '../radio-button/radio-button.component';

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
  public lockToPathTypes: IRadioValue[];
  public lockToPathValue: number;

  constructor(private clipboard: ClipboardService) {
    this.width = 200;
    this.height = 300;
    this.lockToPathTypes = [
        {
            value: 0,
            label: 'Let viewers pan & zoom freely'
        },
        {
            value: 1,
            label: 'Constrain to simple back and forward steps'
        }
    ];
    this.lockToPathValue = 0;
  }
  @Input() prezly: IPreziCard;
  @Input() modalRef: BsModalRef;

  ngOnInit() {}

  public copyToClipboard () {
    const code = '<iframe id="iframe_container" width="' + this.width + '" frameborder="0" height="'
          + this.height + '" src="https://prezi.com/embed/' + this.prezly._id + '?bgcolor=fffff&amp;lock_to_path='
          + this.lockToPathValue + '&amp;autoplay=0&amp;autohide_ctrls=0"></iframe>';
    this.clipboard.copy(code);
  }
}
