import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { LinksComponent } from './links.component';
import { WritingService } from '../writing.service';
import { LinkDetailsDialogComponent } from './link-details-dialog.component';
import { CategoryMod } from '../../../models/category-mods.model';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;
  let writingService: jasmine.SpyObj<WritingService>;
  let dialog: jasmine.SpyObj<MatDialog>;

  const categories: CategoryMod[] = [
    { cat3: 'Web Dev Affairs', categoryId: '10', durationGoal: 15 },
    { cat3: 'Quantum Data', categoryId: '11', durationGoal: 15 }
  ];

  beforeEach(async () => {
    writingService = jasmine.createSpyObj('WritingService', ['getCategories']);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [LinksComponent],
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

    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
  });

  it('should load categories on init', () => {
    fixture.detectChanges();

    expect(writingService.getCategories).toHaveBeenCalled();
  });

  it('should open the link details dialog for public links', () => {
    const category = categories[0];

    component.openLinkCategory(category);

    expect(dialog.open).toHaveBeenCalledWith(LinkDetailsDialogComponent, jasmine.objectContaining({
      data: {
        category,
        privateOnly: false
      }
    }));
  });
});
