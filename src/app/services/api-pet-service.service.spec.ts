import { TestBed } from '@angular/core/testing';

import { ApiPetServiceService } from './api-pet-service.service';

describe('ApiPetServiceService', () => {
  let service: ApiPetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
