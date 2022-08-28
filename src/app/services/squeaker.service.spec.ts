import { TestBed } from '@angular/core/testing';

import { SqueakerService } from './squeaker.service';

describe('SqueakerService', () => {
  let service: SqueakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqueakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
