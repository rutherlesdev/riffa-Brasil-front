import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestWinnersComponent } from './latest-winners.component';

describe('LatestWinnersComponent', () => {
  let component: LatestWinnersComponent;
  let fixture: ComponentFixture<LatestWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
