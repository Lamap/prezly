import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedEditorComponent } from './embed-editor.component';

describe('EmbedEditorComponent', () => {
  let component: EmbedEditorComponent;
  let fixture: ComponentFixture<EmbedEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
