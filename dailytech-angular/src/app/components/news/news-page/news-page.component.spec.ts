import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { NewsPageComponent } from './news-page.component';
import { NewsService } from '../news.service';

@Pipe({ name: 'pipeCapitalizeCategory' })
class MockPipeCapitalizeCategoryPipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPageComponent, MockPipeCapitalizeCategoryPipe],
      imports: [NoopAnimationsModule, MatMenuModule, MatButtonModule],
      providers: [
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj<NewsService>('NewsService', {
            getArticles: of({ results: [] }),
          }),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
