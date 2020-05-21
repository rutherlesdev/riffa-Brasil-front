import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRafflesComponent } from './completed-raffles.component';

describe('CompletedRafflesComponent', () => {
  let component: CompletedRafflesComponent;
  let fixture: ComponentFixture<CompletedRafflesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedRafflesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedRafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
