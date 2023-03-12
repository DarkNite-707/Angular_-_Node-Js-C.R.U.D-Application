import { TestBed } from '@angular/core/testing';

import { FruitServiceService } from './fruit-service.service';

// This method was adapted from the IIE lab Guide (APDS7311) 2022
// The Independent Institute of Education. 2022. Application development security APDS7311 Lab Guide 2022 (First Edition:2021)

describe('FruitServiceService', () => {
  let service: FruitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
