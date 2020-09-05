import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
// @ts-ignore
import { describe } from 'jasmine';
// @ts-ignore
import { beforeEach } from 'jasmine';
// @ts-ignore
import { it } from 'jasmine';
// @ts-ignore
import { expect } from 'jasmine';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
