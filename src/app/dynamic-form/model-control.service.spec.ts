import { TestBed } from '@angular/core/testing';

import { ModelControlService } from './model-control.service';

describe('ModelControlService', () => {
  let service: ModelControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
