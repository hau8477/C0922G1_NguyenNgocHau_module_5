import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productFormEdit: FormGroup;
  id: number;
  categories: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.getProduct(this.id);
    });
    this.getListCategory();
  }

  getProduct(id: number) {
    this.productFormEdit = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('')
    });

    return this.productService.findById(id).subscribe(product => {
      if (product) {
        this.productFormEdit.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category.name
        });
      }
    });
  }

  update() {
    const product = this.productFormEdit.value;
    this.productService.updateProduct(this.id, product).subscribe(next => {
      this.productFormEdit.reset();
      alert('Cập nhật sản phẩm thành công');
      this.route.navigateByUrl('products/list');
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
