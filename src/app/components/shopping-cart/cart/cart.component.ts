import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
   // {id:1, productId:1 ,productName:'test 1', qty: 2 , price:100},
   // {id:2, productId:1 ,productName:'test 2', qty: 1 , price:200},
   // {id:3, productId:1 , productName:'test 3',qty: 3 , price:300},
    //{id:4, productId:1 , productName:'test 4',qty: 4 , price:150}
  ];
   cartTotal = 0 

  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((Product:Product)=> {
      this.addProductToCart(Product)
      
      
      })
    }
      addProductToCart(product: Product){

        let productExists = false

        for(let i in this.cartItems){
          if(this.cartItems[i].productId===product.id){
            this.cartItems[i].qty++
            productExists = true
            break;
          }
        }
         if(!productExists){
          this.cartItems.push({
            productId: product.id,
            productName: Product.name,
            qty:1,
            price: product.price
        
          })
         }
         this.cartTotal = 0
         this.cartItems.forEach(item =>{
           this.cartTotal += (item.qty * item.price)
       })

      }
      
    
  }
  
 