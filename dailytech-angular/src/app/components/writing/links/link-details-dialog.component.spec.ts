import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { LinkDetailsDialogComponent } from './link-details-dialog.component';
import { WritingService } from '../writing.service';

describe('LinkDetailsDialogComponent', () => {
  let component: LinkDetailsDialogComponent;
  let fixture: ComponentFixture<LinkDetailsDialogComponent>;
  let writingService: jasmine.SpyObj<WritingService>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<LinkDetailsDialogComponent>>;

  const category = {
    cat3: 'Web Dev Affairs',
    categoryId: '10',
    durationGoal: 15
  };

  beforeEach(async () => {
    writingService = jasmine.createSpyObj('WritingService', ['getResearchNewsByCategory', 'getMyResearchNewsByCategory']);
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [LinkDetailsDialogComponent],
      providers: [
        { provide: WritingService, useValue: writingService },
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { category, privateOnly: false } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should load research urls on init', () => {
    writingService.getResearchNewsByCategory.and.returnValue(of([
      { id: '1', title: 'Example', url: 'https://example.com', categoryId: 10 }
    ] as any));

    fixture = TestBed.createComponent(LinkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(writingService.getResearchNewsByCategory).toHaveBeenCalledWith(10);
    expect(component.researchUrls.length).toBe(1);
    expect(component.isLoading).toBeFalse();
  });

  it('should expose an error state when the request fails', () => {
    writingService.getResearchNewsByCategory.and.returnValue(throwError(() => new Error('boom')));

    fixture = TestBed.createComponent(LinkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.errorMessage).toContain('Unable to load');
    expect(component.isLoading).toBeFalse();
  });

  it('should load private research urls when requested', () => {
    writingService.getResearchNewsByCategory.and.returnValue(of([]));
    writingService.getMyResearchNewsByCategory.and.returnValue(of([
      { id: '1', title: 'Mine', url: 'https://example.com/mine', categoryId: 10 }
    ] as any));
    TestBed.overrideProvider(MAT_DIALOG_DATA, { useValue: { category, privateOnly: true } });

    fixture = TestBed.createComponent(LinkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(writingService.getMyResearchNewsByCategory).toHaveBeenCalledWith(10);
    expect(component.researchUrls.length).toBe(1);
  });

  it('should close the dialog', () => {
    writingService.getResearchNewsByCategory.and.returnValue(of([]));
    fixture = TestBed.createComponent(LinkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.close();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
