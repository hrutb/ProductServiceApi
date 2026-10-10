import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Iproduct } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private _productService:ProductServiceService){}

  productArr :Iproduct[] =[];

  ngOnInit(): void {

  }


}
