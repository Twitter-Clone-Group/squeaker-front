import { TestBed } from '@angular/core/testing';

import { SqueakService } from './squeak.service';

describe('SqueakService', () => {
  let service: SqueakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqueakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
