import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {SorterComponent} from './components/sorter/sorter.component';
import {ThumbComponent} from './components/thumb/thumb.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {MessagePageComponent} from './components/message-page/message-page.component';
import {FormsModule} from '@angular/forms';
import {EmbedEditorComponent} from './components/embed-editor/embed-editor.component';
import {PrezliQueryService} from './services/prezi-query.service';
import {HttpModule} from '@angular/http';
import {ClipboardService} from 'ng2-clipboard';
import {RadioButtonComponent} from "./components/radio-button/radio-button.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        ListViewComponent,
        AvatarComponent,
        SearchBoxComponent,
        SorterComponent,
        ThumbComponent,
        PaginatorComponent,
        MessagePageComponent,
        EmbedEditorComponent,
        RadioButtonComponent
      ],
      providers: [
        PrezliQueryService,
        ClipboardService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
