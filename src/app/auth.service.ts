import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl = 'http://localhost:3000/users'; // JSON Server URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean>{
    return this.http.get<any[]>(this.apiurl).pipe(
      map((users)=>{
        const user = users.find((u)=> u.username === username && u.password === password);
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }

  logout(): void{
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
