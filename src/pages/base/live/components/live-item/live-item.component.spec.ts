import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveItemComponent } from './live-item.component';

describe('LiveItemComponent', () => {
  let component: LiveItemComponent;
  let fixture: ComponentFixture<LiveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
