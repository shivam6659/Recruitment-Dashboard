import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable()
export class AuthService {
  currentUser: any = null;
  constructor(private api: ApiService) {
    const raw = localStorage.getItem('rm_user');
    if (raw) this.currentUser = JSON.parse(raw);
  }
  login(username: string, password: string) {
    // mock login against /users in mock-db.json
    return this.api.get('/users?username=' + username).toPromise().then((res: any[])=>{
      const user = res.find(u=>u.password===password);
      if(user){
        this.currentUser = user;
        localStorage.setItem('rm_user', JSON.stringify(user));
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    });
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem('rm_user');
  }
  isAuthenticated() { return !!this.currentUser; }
  hasRole(role: string) { return this.currentUser && this.currentUser.role===role; }
}
