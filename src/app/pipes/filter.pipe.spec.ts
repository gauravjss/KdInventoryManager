import {async} from '@angular/core/testing';
import {FilterPipe} from './filter.pipe';


describe('FilterPipe', () => {
  let pipe: FilterPipe
  beforeEach(async(() => {
    pipe = new FilterPipe();
  }));
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
