import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productFormDelete: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.getProduct(this.id);
    });
  }

  getProduct(id: number) {
    this.productFormDelete = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl('')
    });

    return this.productService.findById(id).subscribe(product => {
      if (product) {
        this.productFormDelete.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category
        });
      }
    });
  }

  delete() {
    this.productService.deleteProduct(this.id).subscribe(next => {
      alert('Xóa thành công');
      this.route.navigateByUrl('products/list');
    }, e => {
      console.log(e);
    });
  }
}
