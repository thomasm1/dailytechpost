import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { BlogsService } from './blogs.service';
import { AwsBlogPublisherService } from './aws-blog-publisher.service';

describe('AwsBlogPublisherService', () => {
  let service: AwsBlogPublisherService;
  let httpMock: HttpTestingController;
  let blogsService: jasmine.SpyObj<BlogsService>;

  beforeEach(() => {
    blogsService = jasmine.createSpyObj<BlogsService>('BlogsService', ['clearCache']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AwsBlogPublisherService,
        { provide: BlogsService, useValue: blogsService }
      ]
    });

    service = TestBed.inject(AwsBlogPublisherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('posts the compatible AWS payload and clears the public blog cache', () => {
    service.publish({
      title: 'A title',
      post: '<p>Three useful words</p>',
      cat3: 'Web Dev Affairs',
      author: 'by Thomas Maestas, MA',
      blogcite: '<p>Footnote</p>',
      did: '26-05-29',
      date: new Date(2026, 4, 29)
    }).subscribe();

    const request = httpMock.expectOne(`${environment.awsUrlDevId}/dev/post`);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      title: 'A title',
      post: '<p>Three useful words</p>',
      cat3: 'Web Dev Affairs',
      author: 'by Thomas Maestas, MA',
      blogcite: '<p>Footnote</p>',
      did: '26-05-29',
      date: 'May 29th, 2026',
      wordCount: 3
    });

    request.flush({});
    expect(blogsService.clearCache).toHaveBeenCalled();
  });
});
