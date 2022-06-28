import { TestBed } from '@angular/core/testing';

import { GeneralserviceService } from './generalservice.service';

describe('GeneralserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralserviceService = TestBed.get(GeneralserviceService);
    expect(service).toBeTruthy();
  });
});
