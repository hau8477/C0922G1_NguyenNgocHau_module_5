import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  page = 1;
  totalPages = 1;
  limit = 5;
  nameSearch = '';
  categoryId = 0;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  getAll() {
    if (this.categoryId === 0) {
      this.productService.getAll(this.page, this.limit, this.nameSearch).subscribe(products => {
        this.products = products;
        this.totalPages = this.products.length;
      });
    } else {
      this.productService.getAllAndCategoryId(this.page, this.limit, this.nameSearch, this.categoryId)
        .subscribe(products => {
          this.products = products;
          this.totalPages = this.products.length;
        });
    }
  }

  nextSlide() {
    if (this.page < this.totalPages) {
      this.page++;
    }
    this.getAll();
  }

  prevSlide() {
    if (this.page > 1) {
      this.page--;
    }
    this.getAll();
  }
}
