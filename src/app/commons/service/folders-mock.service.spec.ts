import { TestBed } from '@angular/core/testing';

import { FoldersMockService } from './folders-mock.service';

describe('FoldersMockService', () => {
  let service: FoldersMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldersMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
