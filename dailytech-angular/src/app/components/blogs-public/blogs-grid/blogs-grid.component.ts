import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray } from '@angular/forms';
import { BlogsService } from '../../blogs-public/blogs.service';
import { MatCard, MatCardActions } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
 
  type Post = { 
    id: number,
    did?: string,
    date?: string,
    author?: string,
    monthOrder?: string,
    cat3?: string,
    title: string,
    post?: string,
    blogcite?: string,
    username?: string,
  }


@Component({ 
    selector: 'app-blogs-grid',
    templateUrl: './blogs-grid.component.html',
    styleUrls: ['./blogs-grid.component.scss']
  })
  
  export class BlogsGridComponent implements OnInit {
    categories: string[] = [];
    blogs: Post[] = []; 
    categoriesForm: UntypedFormGroup;
    fetchBlogsEnabled: boolean = false;
    

    constructor(private fb: UntypedFormBuilder, private blogsService: BlogsService) { 
        this.categoriesForm = this.fb.group({
            selectedCategories: this.fb.array([])
    });
    }

    ngOnInit(): void {
        console.log("... awaiting blogs categories selection");
        this.getCategories();
    }
    get selectedCategories() {
        return this.categoriesForm.get('selectedCategories') as UntypedFormArray;
    }
    getCategories() {
        this.blogsService.getCategories().subscribe((categories: string[]) => {
            this.categories = categories;
            // this.addCheckboxes();
        });
    }
    onCategoryChange(event: any): void {
        const selectedCategories = this.categoriesForm.value.selectedCategories as UntypedFormArray;
        if(event.target.checked) {
            selectedCategories.push(this.fb.control(event.target.value));
        } 
        else {
            const categoryIndex = selectedCategories.controls.findIndex(x => x.value === event.target.value);
            selectedCategories.removeAt(categoryIndex);
        }
        this.fetchBlogsEnabled = selectedCategories.length > 0;
    }

    fetchBlogs():void {
        const selectedCategories = this.categoriesForm.value.selectedCategories;
        this.blogsService.getBlogsByCategories(selectedCategories).subscribe((blogs: Post[]) => {
            this.blogs = blogs;
        });
    }


    // addCheckboxes() {
    //     this.categories.forEach(() => this.selectedCategories.push(this.fb.control(false)));
    // }
  }
