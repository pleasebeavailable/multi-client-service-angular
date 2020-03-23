import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/Category';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent implements OnInit {

  categories: Category[] = [];
  @Input('category') categoryId: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

}
