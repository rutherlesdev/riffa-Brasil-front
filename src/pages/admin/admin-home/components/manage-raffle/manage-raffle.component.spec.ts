import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRaffleComponent } from './manage-raffle.component';

describe('ManageRaffleComponent', () => {
  let component: ManageRaffleComponent;
  let fixture: ComponentFixture<ManageRaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
