import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmbedEditorComponent } from './embed-editor.component';
import {FormsModule} from '@angular/forms';
import {ClipboardService} from 'ng2-clipboard';
import {RadioButtonComponent} from "../radio-button/radio-button.component";

describe('EmbedEditorComponent', () => {
  let component: EmbedEditorComponent;
  let fixture: ComponentFixture<EmbedEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EmbedEditorComponent, RadioButtonComponent ],
      providers: [ClipboardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
