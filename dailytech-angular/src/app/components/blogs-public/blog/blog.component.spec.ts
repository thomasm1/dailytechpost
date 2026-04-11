import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { BlogComponent } from './blog.component';
import { BlogsService } from '../blogs.service';

@Pipe({ name: 'safeHtml' })
class MockSafeHtmlPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let mockBlogsService: jasmine.SpyObj<BlogsService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    mockBlogsService = jasmine.createSpyObj('BlogsService', ['getBlog', 'hideBlog']);
    mockBlogsService.getBlog.and.returnValue(of({ id: '1', title: 't', post: 'p' } as any));
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ BlogComponent, MockSafeHtmlPipe ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '1' })
          }
        },
        { provide: Router, useValue: mockRouter },
        { provide: BlogsService, useValue: mockBlogsService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
