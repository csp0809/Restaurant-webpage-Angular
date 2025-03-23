import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contacts'

  constructor(private http: HttpClient) { }

  submitContact(contact: any): Observable<any>{
    return this.http.post(this.apiUrl, contact);
  }
}
