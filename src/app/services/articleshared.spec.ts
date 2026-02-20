import { TestBed } from '@angular/core/testing';

import { Articleshared } from './articleshared';

describe('Articleshared', () => {
  let service: Articleshared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Articleshared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
