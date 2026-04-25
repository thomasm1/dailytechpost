import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { MyLinksComponent } from './my-links.component';
import { WritingService } from '../writing.service';
import { LinkDetailsDialogComponent } from './link-details-dialog.component';
import { CategoryMod } from '../../../models/category-mods.model';

describe('MyLinksComponent', () => {
  let component: MyLinksComponent;
  let fixture: ComponentFixture<MyLinksComponent>;
  let writingService: jasmine.SpyObj<WritingService>;
  let dialog: jasmine.SpyObj<MatDialog>;

  const categories: CategoryMod[] = [
    { cat3: 'Web Dev Affairs', categoryId: '10', durationGoal: 15 },
    { cat3: 'Quantum Data', categoryId: '11', durationGoal: 15 }
  ];

  beforeEach(async () => {
    writingService = jasmine.createSpyObj('WritingService', ['getCategories', 'addResearchNewsForCategory']);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MyLinksComponent],
      providers: [
        { provide: WritingService, useValue: writingService },
        { provide: MatDialog, useValue: dialog },
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
        categoryId: '10',
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
      categories[0],
      'Example',
      'https://example.com'
    );
    expect(form.resetForm).toHaveBeenCalled();
    expect(component.isSaving).toBeFalse();
  });
});
