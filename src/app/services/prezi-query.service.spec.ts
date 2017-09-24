import { TestBed, inject } from '@angular/core/testing';

import { PreziQueryService } from './prezi-query.service';

describe('PreziQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreziQueryService]
    });
  });

  it('should be created', inject([PreziQueryService], (service: PreziQueryService) => {
    expect(service).toBeTruthy();
  }));
});
