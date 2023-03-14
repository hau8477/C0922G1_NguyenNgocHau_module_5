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
      const product = this.findById(this.id);
      console.log(product);
      this.productFormDelete = new FormGroup({
        id: new FormControl(product?.id),
        name: new FormControl(product?.name),
        price: new FormControl(product?.price),
        description: new FormControl(product?.description),
      });
    });
  }

  findById(id: number): Product {
    return this.productService.findById(id);
  }

  delete() {
    const product = this.productFormDelete.value;
    this.productService.deleteProduct(this.id, product);
    this.route.navigateByUrl('/product/list');
  }
}
