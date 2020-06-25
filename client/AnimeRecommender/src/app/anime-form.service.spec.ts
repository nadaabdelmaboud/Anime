import { TestBed } from '@angular/core/testing';

import { AnimeFormService } from './anime-form.service';

describe('AnimeFormService', () => {
  let service: AnimeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
