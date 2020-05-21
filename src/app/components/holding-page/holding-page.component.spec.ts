import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingPageComponent } from './holding-page.component';

describe('HoldingPageComponent', () => {
  let component: HoldingPageComponent;
  let fixture: ComponentFixture<HoldingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
