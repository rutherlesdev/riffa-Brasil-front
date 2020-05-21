import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagerHistoryComponent } from './wager-history.component';

describe('WagerHistoryComponent', () => {
  let component: WagerHistoryComponent;
  let fixture: ComponentFixture<WagerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
