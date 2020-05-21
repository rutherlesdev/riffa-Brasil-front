import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWagersComponent } from './current-wagers.component';

describe('CurrentWagersComponent', () => {
  let component: CurrentWagersComponent;
  let fixture: ComponentFixture<CurrentWagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
