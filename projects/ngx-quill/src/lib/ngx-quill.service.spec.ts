import { TestBed } from '@angular/core/testing';

import { NgxQuillService } from './ngx-quill.service';

describe('NgxQuillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxQuillService = TestBed.get(NgxQuillService);
    expect(service).toBeTruthy();
  });
});
