import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productFormCreate: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.productFormCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.getListCategory();
  }

  submit() {
    const product = this.productFormCreate.value;
    console.log(product);
    this.productService.saveProduct(product).subscribe(next => {
      this.productFormCreate.reset();
      alert('Thêm mới thành công');
      this.route.navigateByUrl('/products/list');
    }, e => {
      console.log(e);
    });
  }

  getListCategory() {
    return this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
