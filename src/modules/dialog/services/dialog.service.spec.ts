import { TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DialogService
    ],
    imports: [
      CommonModule
    ]
  }));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
