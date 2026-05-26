import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';

import { MyLinksComponent } from './my-links.component';
import { WritingService } from '../../writing/writing.service';
import { LinkDetailsDialogComponent } from '../link-details-dialog/link-details-dialog.component';
import { AddLinkDialogComponent } from '../add-link-dialog/add-link-dialog.component';
import { CategoryMod } from '../../../models/category-mods.model';
import { FileService } from '../../../service/file.service';
import { UiService } from '../../../service/ui.service';
import { environment } from '../../../../environments/environment';

describe('MyLinksComponent', () => {
  let component: MyLinksComponent;
  let fixture: ComponentFixture<MyLinksComponent>;
  let writingService: jasmine.SpyObj<WritingService>;
  let dialog: jasmine.SpyObj<MatDialog>;
  let fileService: jasmine.SpyObj<FileService>;
  let uiService: jasmine.SpyObj<UiService>;

  const categories: CategoryMod[] = [
    {
      cat3: 'Web Dev Affairs',
      categoryId: '11',
      durationGoal: 15,
      children: [{ name: 'Developer', categoryId: '1101', parentId: '11', durationGoal: 15 }]
    },
    { cat3: 'Quantum Data', categoryId: '13', durationGoal: 15 }
  ];

  beforeEach(async () => {
    writingService = jasmine.createSpyObj('WritingService', [
      'getCategories',
      'addResearchNewsForCategory',
      'getFlattenedCategoryBuckets'
    ]);
    writingService.getFlattenedCategoryBuckets.and.returnValue([
      categories[0],
      categories[0].children![0],
      categories[1]
    ]);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    fileService = jasmine.createSpyObj<FileService>('FileService', ['uploadCsv']);
    uiService = jasmine.createSpyObj<UiService>('UiService', ['showSnackBar']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MyLinksComponent],
      providers: [
        { provide: WritingService, useValue: writingService },
        { provide: MatDialog, useValue: dialog },
        { provide: FileService, useValue: fileService },
        { provide: UiService, useValue: uiService },
        {
          provide: Store,
          useValue: {
            select: () => of(categories)
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLinksComponent);
    component = fixture.componentInstance;
  });

  it('should load categories on init', () => {
    fixture.detectChanges();

    expect(writingService.getCategories).toHaveBeenCalled();
  });

  it('should open the link details dialog for private links', () => {
    const category = categories[0];

    component.openLinkCategory(category);

    expect(dialog.open).toHaveBeenCalledWith(LinkDetailsDialogComponent, jasmine.objectContaining({
      data: {
        category,
        privateOnly: true
      }
    }));
  });

  it('should add a private link for the selected category', async () => {
    const form = {
      value: {
        categoryId: '11',
        title: 'Example',
        url: 'https://example.com',
        privateLink: true
      },
      resetForm: jasmine.createSpy('resetForm')
    } as any;
    writingService.addResearchNewsForCategory.and.returnValue(Promise.resolve({} as any));

    fixture.detectChanges();
    component.onAddLink(form);
    await Promise.resolve();

    expect(writingService.addResearchNewsForCategory).toHaveBeenCalledWith(
      categories[0],
      'Example',
      'https://example.com',
      false
    );
    expect(form.resetForm).toHaveBeenCalled();
    expect(component.isSaving).toBeFalse();
  });

  it('should open the add link dialog and save the returned link', async () => {
    writingService.addResearchNewsForCategory.and.returnValue(Promise.resolve({} as any));
    dialog.open.and.returnValue({
      afterClosed: () => of({
        categoryId: 1101,
        title: 'Dialog example',
        url: 'https://example.com/dialog',
        privateLink: false
      })
    } as any);

    fixture.detectChanges();
    component.openAddLinkDialog();
    await Promise.resolve();

    expect(dialog.open).toHaveBeenCalledWith(AddLinkDialogComponent, jasmine.objectContaining({
      data: jasmine.objectContaining({
        title: 'Add Link',
        categories
      })
    }));
    expect(writingService.addResearchNewsForCategory).toHaveBeenCalledWith(
      categories[0].children![0],
      'Dialog example',
      'https://example.com/dialog',
      true
    );
    expect(component.isSaving).toBeFalse();
  });

  it('should match category ids when Firestore returns them as numbers', async () => {
    const numericCategory = { cat3: 'Web Dev Affairs', categoryId: 11, durationGoal: 15 } as any;
    const form = {
      value: {
        categoryId: '11',
        title: 'Example',
        url: 'https://example.com',
        privateLink: true
      },
      resetForm: jasmine.createSpy('resetForm')
    } as any;
    writingService.addResearchNewsForCategory.and.returnValue(Promise.resolve({} as any));
    component.categoryBuckets = [numericCategory];

    component.onAddLink(form);
    await Promise.resolve();

    expect(writingService.addResearchNewsForCategory).toHaveBeenCalledWith(
      numericCategory,
      'Example',
      'https://example.com',
      false
    );
  });

  it('should add a public link unless private is checked', async () => {
    const form = {
      value: {
        categoryId: '1101',
        title: 'Example',
        url: 'https://example.com'
      },
      resetForm: jasmine.createSpy('resetForm')
    } as any;
    writingService.addResearchNewsForCategory.and.returnValue(Promise.resolve({} as any));

    fixture.detectChanges();
    component.onAddLink(form);
    await Promise.resolve();

    expect(writingService.addResearchNewsForCategory).toHaveBeenCalledWith(
      categories[0].children![0],
      'Example',
      'https://example.com',
      true
    );
  });

  it('should upload selected csv files to the links bulk endpoint', fakeAsync(() => {
    const file = new File(['url\nhttps://example.com'], 'links.csv', { type: 'text/csv' });
    const input = document.createElement('input');
    Object.defineProperty(input, 'files', { value: [file] });
    fileService.uploadCsv.and.returnValue(of([{ id: '1' }] as any));

    component.onCsvSelected({ target: input } as any);
    flushMicrotasks();

    expect(fileService.uploadCsv).toHaveBeenCalledWith(`${environment.API_URL}/links/bulk/csv`, file);
    expect(uiService.showSnackBar).toHaveBeenCalledWith('1 links imported', 'Close', 3000);
    expect(input.value).toBe('');
    expect(component.isUploadingCsv).toBeFalse();
  }));

  it('should show backend csv upload errors in the snackbar', fakeAsync(() => {
    const file = new File(['url\nnot-a-url'], 'links.csv', { type: 'text/csv' });
    const input = document.createElement('input');
    Object.defineProperty(input, 'files', { value: [file] });
    fileService.uploadCsv.and.returnValue(throwError(() => ({
      error: { message: 'CSV row 2 url is invalid' }
    })));
    spyOn(console, 'error');

    component.onCsvSelected({ target: input } as any);
    flushMicrotasks();

    expect(uiService.showSnackBar).toHaveBeenCalledWith('CSV row 2 url is invalid', 'Close', 5000);
    expect(input.value).toBe('');
    expect(component.isUploadingCsv).toBeFalse();
  }));
});
