import { TestBed } from '@angular/core/testing';

import { VenderServiceService } from './vender-service.service';

describe('VenderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenderServiceService = TestBed.get(VenderServiceService);
    expect(service).toBeTruthy();
  });
});
