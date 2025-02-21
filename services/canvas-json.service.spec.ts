import { TestBed } from '@angular/core/testing';

import { CanvasJsonService } from './canvas-json.service';

describe('CanvasJsonService', () => {
  let service: CanvasJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
