import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Orders } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  orderForm: Orders = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
  };
  constructor(private orderService:OrderService,
    private router:Router){}

    ngOnInit(): void{}

    create(){
      this.orderService.create(this.orderForm).subscribe({
        next:(data) =>{
          this.router.navigate(["about"])
        },
        error:(err: any) =>{
          console.log(err);
        }
      })
    }
}
