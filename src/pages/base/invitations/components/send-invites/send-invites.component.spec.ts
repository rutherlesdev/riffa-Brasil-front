import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvitesComponent } from './send-invites.component';

describe('SendInvitesComponent', () => {
  let component: SendInvitesComponent;
  let fixture: ComponentFixture<SendInvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendInvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
