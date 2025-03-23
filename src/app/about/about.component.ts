import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order.service';
import { Orders } from '../order';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  allOrders: Orders [] = [];
  deleteModal: any;
  idTodelete: string = '';

  constructor(private authService: AuthService,
    private router: Router,
    private orderService: OrderService){}

  ngOnInit(): void {
      this.get();
  }
  get(){
    this.orderService.get().subscribe((data)=>{
      this.allOrders = data as Orders[];
    });
  }
  delete(id:string){
    this.orderService.delete(id).subscribe((data)=>{
      this.allOrders=this.allOrders.filter(a=>a.id!=id)
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
