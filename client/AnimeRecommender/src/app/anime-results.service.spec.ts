import { TestBed } from '@angular/core/testing';

import { AnimeResultsService } from './anime-results.service';

describe('AnimeResultsService', () => {
  let service: AnimeResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
