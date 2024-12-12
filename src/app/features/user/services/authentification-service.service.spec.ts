import { TestBed } from '@angular/core/testing';

import { AuthentificationServiceService } from './authentification-service.service';

describe('AuthentificationServiceService', () => {
  let service: AuthentificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
