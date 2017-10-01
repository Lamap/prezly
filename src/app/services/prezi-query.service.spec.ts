import { TestBed, inject } from '@angular/core/testing';

import { PrezliQueryService } from './prezi-query.service';
import {HttpModule} from "@angular/http";

describe('PreziQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PrezliQueryService]
    });
  });

  it('should be created', inject([PrezliQueryService], (service: PrezliQueryService) => {
    expect(service).toBeTruthy();
  }));
});
