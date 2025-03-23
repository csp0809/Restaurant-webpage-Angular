import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string='';
  password: string= '';
  errorMessage: string='';

  constructor(private authSevice: AuthService, private router: Router){}

  login() {
    this.authSevice.login(this.username, this.password).subscribe((isValid) =>{
      if(isValid){
        this.router.navigate(['/about']);
      }
      else{
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
