import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productFormEdit: FormGroup;
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
      this.productFormEdit = new FormGroup({
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

  update() {
    const product = this.productFormEdit.value;
    this.productService.updateProduct(this.id, product);
    this.route.navigateByUrl('/product/list');
  }
}
