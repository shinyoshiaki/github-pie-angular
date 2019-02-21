/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubDataService } from './github-data.service';

describe('Service: GithubData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubDataService]
    });
  });

  it('should ...', inject([GithubDataService], (service: GithubDataService) => {
    expect(service).toBeTruthy();
  }));
});
