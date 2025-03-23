import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Orders } from './order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }
  get(){
    return this.http.get<Orders[]>('http://localhost:3000/orders');
  }
  create(payload: Orders){
    return this.http.post<Orders>('http://localhost:3000/orders', payload);
  }
  getById(id: string){
    return this.http.get<Orders>(`http://localhost:3000/orders/${id}`);
  }
  update(payload:Orders){
    return this.http.put(`http://localhost:3000/orders/${payload.id}`,payload);
  }
  delete(id:string){
    return this.http.delete<Orders>(`http://localhost:3000/orders/${id}`);
  }
}
