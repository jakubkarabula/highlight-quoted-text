import { TestBed, inject } from '@angular/core/testing';

import { PrepareTextService } from './prepare-text.service';

describe('PrepareTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrepareTextService]
    });
  });

  it('should be created', inject([PrepareTextService], (service: PrepareTextService) => {
    expect(service).toBeTruthy();
  }));

  it('should escape term and add white spaces', inject([PrepareTextService], (service: PrepareTextService) => {
    expect(service.escape('Will this test work?')).toEqual('Will\\s+this\\s+test\\s+work\\?');
  }));

  it('should create regex to find correct element', inject([PrepareTextService], (service: PrepareTextService) => {
    expect(service.findElementRegex('Hello world', 'i')).toEqual(/(^|>)([^<]*)(Hello\s+world)([^>]*)(<|$)/i);
  }));

  it('should create regex to find text in element', inject([PrepareTextService], (service: PrepareTextService) => {
    expect(service.findTextWithinElRegex('Hello world', 'i')).toEqual(/(Hello\s+world)/i);
  }));
});
