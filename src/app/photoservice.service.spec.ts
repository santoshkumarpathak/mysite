import { TestBed } from '@angular/core/testing';

import { Photoservice } from './photoservice.service';

describe('PhotoserviceService', () => {
  let service: PhotoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
