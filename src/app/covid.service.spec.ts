import { TestBed } from '@angular/core/testing';

import { CovidDataService } from './covid.service';

describe('CovidDataService', () => {
  let service: CovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
