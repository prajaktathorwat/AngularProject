import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []

  constructor(private productsService: ProductService) { }

  ngOnInit() 
  {
    this.productsService.getProduct().subscribe((product) =>{
      this.productList = product;

    })
  }

}
