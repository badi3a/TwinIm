import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentificationGuard } from './authentification.guard';

describe('authentificationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
