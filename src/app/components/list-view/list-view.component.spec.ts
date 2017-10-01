import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViewComponent } from './list-view.component';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {FormsModule} from '@angular/forms';
import {ClipboardService} from 'ng2-clipboard';
import {SorterComponent} from '../sorter/sorter.component';
import {ThumbComponent} from '../thumb/thumb.component';
import {PaginatorComponent} from '../paginator/paginator.component';
import {MessagePageComponent} from '../message-page/message-page.component';
import {EmbedEditorComponent} from '../embed-editor/embed-editor.component';
import {AvatarComponent} from "../avatar/avatar.component";
import {PrezliQueryService} from "../../services/prezi-query.service";
import {HttpModule} from "@angular/http";
import {RadioButtonComponent} from "../radio-button/radio-button.component";

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [
          ListViewComponent,
          SearchBoxComponent,
          SorterComponent,
          ThumbComponent,
          PaginatorComponent,
          MessagePageComponent,
          EmbedEditorComponent,
          AvatarComponent,
          RadioButtonComponent
      ],
      providers: [ClipboardService, PrezliQueryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
