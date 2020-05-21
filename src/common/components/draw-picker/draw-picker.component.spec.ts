import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPickerComponent } from './draw-picker.component';

describe('DrawPickerComponent', () => {
  let component: DrawPickerComponent;
  let fixture: ComponentFixture<DrawPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
