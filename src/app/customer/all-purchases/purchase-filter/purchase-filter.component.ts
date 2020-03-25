import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../shared/models/Category';
import {CategoryService} from '../../../shared/services/category.service';

@Component({
  selector: 'app-purchase-filter',
  templateUrl: './purchase-filter.component.html',
  styleUrls: ['./purchase-filter.component.css']
})
export class PurchaseFilterComponent implements OnInit {
  categories: Category[] = [];
  @Input('category') categoryId: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

}
