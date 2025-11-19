// import { Component } from '@angular/core';

// @Component({
//   selector: 'logout',
//   templateUrl: './logout.component.html',
//   styleUrls: ['./logout.component.css']
// })
// export class LogoutComponent {

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.doLogout();   // on load logout
  }

  doLogout() {
    this.auth.logout();          // clear rm_user
    this.router.navigate(['/login']);   // redirect
  }
}

