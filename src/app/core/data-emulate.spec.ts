import { TestBed } from '@angular/core/testing';

import { DataEmulate } from './data-emulate';

describe('DataEmulate', () => {
  let service: DataEmulate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEmulate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
