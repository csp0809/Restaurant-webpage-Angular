import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  orderForm: Orders = {
    id: '',
    name: '',
    price:0,
    quantity:0
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService:OrderService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = String(param.get('id'));
      this.getById(id);
    })
  }

  getById(id: string){
    this.orderService.getById(id).subscribe((data) =>{
      this.orderForm = data;
    })
  }
  update() {
    this.orderService.update(this.orderForm).subscribe({
      next:(data) => {
        this.router.navigate(["about"]);
      },
      error:(err) =>{
        console.log(err);
      }
    })
  }
}
