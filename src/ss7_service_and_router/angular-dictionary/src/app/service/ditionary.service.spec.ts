import { TestBed } from '@angular/core/testing';

import { DictionaryService } from './dictionary.service';

describe('DitionaryServiceService', () => {
  let service: DictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
