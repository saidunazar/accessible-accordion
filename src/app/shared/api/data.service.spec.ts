import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Faqs } from '../models/faqs';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve faqs from the API via GET', () => {
    const dummyFaqs: Faqs[] = [
      {
        id: 1,
        question: 'TEST QUESTION 1',
        answer: 'TEST ANSWER 1',
      },
      {
        id: 2,
        question: 'TEST QUESTION 2',
        answer: 'TEST ANSWER 2',
      },
    ];
    service.getFaqs().subscribe((faqs) => {
      expect(faqs.length).toBe(2);
      expect(faqs).toEqual(dummyFaqs);
    });
    const request = httpMock.expectOne(service.endpoint);
    expect(request.request.method).toBe('GET');
    request.flush(dummyFaqs);
  });
});
