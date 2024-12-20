import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnatomicalStructuresService } from './anatomical-structures.service';

describe('AnatomicalStructuresService', () => {
  let service: AnatomicalStructuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Provide HttpClient for the service
    });
    service = TestBed.inject(AnatomicalStructuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
