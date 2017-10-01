import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbComponent } from './thumb.component';
import { AvatarComponent } from '../avatar/avatar.component';

describe('ThumbComponent', () => {
  let component: ThumbComponent;
  let fixture: ComponentFixture<ThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ThumbComponent,
          AvatarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
