import { TestBed } from '@angular/core/testing';

import { AnatomicalStructuresService } from './anatomical-structures.service';

describe('AnatomicalStructuresService', () => {
  let service: AnatomicalStructuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnatomicalStructuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
