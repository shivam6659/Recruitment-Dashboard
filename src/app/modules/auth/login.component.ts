import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  err = '';
  constructor(private auth: AuthService, private router: Router){}
  doLogin(e:any){
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    this.auth.login(username,password).then(u=>{
      this.router.navigate(['/dashboard']);
    }).catch(err=>{
      this.err = err.message || 'Login failed';
    });
  }
}
