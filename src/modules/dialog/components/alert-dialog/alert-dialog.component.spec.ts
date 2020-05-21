import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogConfig } from '../../helpers/dialog-config';
import { DialogRef } from '../../helpers/dialog-ref';
import { DialogService } from '../../services/dialog.service';
import { AlertDialogComponent } from './alert-dialog.component';

describe('AlertDialogComponent', () => {
  let component: AlertDialogComponent;
  let fixture: ComponentFixture<AlertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertDialogComponent],
      providers: [
        DialogService,
        DialogRef,
        { provide: DialogConfig, useValue: { data: {} } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
