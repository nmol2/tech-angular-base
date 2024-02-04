import { TestBed } from '@angular/core/testing';

import { BulkUploadRestService } from './bulk-upload-rest.service';

describe('BulkUploadRestService', () => {
  let service: BulkUploadRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkUploadRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
