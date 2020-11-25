import { TestBed } from '@angular/core/testing';

import { NomeUserGuard } from './nome-user.guard';

describe('NomeUserGuard', () => {
  let guard: NomeUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NomeUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
