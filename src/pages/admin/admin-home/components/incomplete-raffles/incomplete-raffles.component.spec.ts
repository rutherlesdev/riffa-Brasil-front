import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteRafflesComponent } from './incomplete-raffles.component';

describe('IncompleteRafflesComponent', () => {
  let component: IncompleteRafflesComponent;
  let fixture: ComponentFixture<IncompleteRafflesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleteRafflesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteRafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
