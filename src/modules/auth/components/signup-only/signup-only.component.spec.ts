import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupOnlyComponent } from './signup-only.component';

describe('SignupOnlyComponent', () => {
  let component: SignupOnlyComponent;
  let fixture: ComponentFixture<SignupOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupOnlyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
