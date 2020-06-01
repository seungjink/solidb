import { TestBed } from '@angular/core/testing';

import { SoliProviderService } from './soli-provider.service';

describe('SoliProviderService', () => {
  let service: SoliProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoliProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
