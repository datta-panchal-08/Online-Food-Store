import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  foods!:Food;
  constructor(activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
        if(params.id){
          this.foods = foodService.getFoodById(params.id);
        }
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.foods);
    this.router.navigateByUrl('/cart-page');
  }

}
