import { CapitalizePipe } from './capitalize.pipe';
import { async } from '@angular/core/testing';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;
  beforeEach(async(() => {
    pipe = new CapitalizePipe();
  }));
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Testing Capitalize with args = true', () => {
    expect(pipe.transform('tEsTiNg cApiTALize with TrUe Arg', true)).toBe('Testing Capitalize With True Arg');
  });
  it('Testing Capitalize with argss = false', () => {
    expect(pipe.transform('tEsTiNg cApiTALize with False Arg', false)).toBe('TEsTiNg CApiTALize With False Arg');
  });
  it('Testing Capitalize without args', () => {
    expect(pipe.transform('tEsTiNg cApiTALize without Arg')).toBe('TEsTiNg CApiTALize Without Arg');
  });
  it('Testing Capitalize with numbers mixed between words ', () => {
    expect(pipe.transform('tEsTiNg 456 with TrUe 234', true)).toBe('Testing 456 With True 234');
    expect(pipe.transform('tEsTiNg 456 with TrUe 234', false)).toBe('TEsTiNg 456 With TrUe 234');
  });
  it('Testing Capitalize with input = null', () => {
    expect(pipe.transform(null)).toBeNull();
  });
  it('Testing Capitalize with input = undefined', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });
});
