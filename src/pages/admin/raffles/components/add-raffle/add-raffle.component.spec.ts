import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaffleComponent } from './add-raffle.component';

describe('AddRaffleComponent', () => {
  let component: AddRaffleComponent;
  let fixture: ComponentFixture<AddRaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
