import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef
} from '@angular/material/legacy-dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AddLinkDialogComponent } from './add-link-dialog.component';

describe('AddLinkDialogComponent', () => {
  let component: AddLinkDialogComponent;
  let fixture: ComponentFixture<AddLinkDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<AddLinkDialogComponent>>;

  beforeEach(async () => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [AddLinkDialogComponent],
      imports: [FormsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Add Research Link',
            selectedCategoryId: '11',
            categories: [
              {
                cat3: 'Web Dev Affairs',
                categoryId: '11',
                durationGoal: 15,
                children: [{ name: 'Developer', categoryId: '1101', parentId: '11', durationGoal: 15 }]
              }
            ]
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLinkDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close with the entered link data', () => {
    component.onSubmit({
      value: {
        categoryId: '1101',
        title: 'Example',
        url: 'https://example.com',
        privateLink: true
      }
    } as any);

    expect(dialogRef.close).toHaveBeenCalledWith({
      categoryId: 1101,
      title: 'Example',
      url: 'https://example.com',
      privateLink: true
    });
  });
});
