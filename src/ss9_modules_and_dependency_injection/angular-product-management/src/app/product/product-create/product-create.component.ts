import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productFormCreate: FormGroup;

  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.productFormCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    });
  }

  submit() {
    const product = this.productFormCreate.value;
    product.id = this.productService.getLengthProducts() + 1;
    console.log(product.id);
    this.productService.saveProduct(product);
    this.productFormCreate.reset();
    this.route.navigateByUrl('/product/list');
  }

}
