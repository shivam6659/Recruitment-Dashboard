import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stats: any;
  constructor(private api: ApiService){}
  ngOnInit(){
    Promise.all([
      this.api.get('/employees').toPromise(),
      this.api.get('/applicants').toPromise(),
      this.api.get('/departments').toPromise()
    ]).then(([e,a,d])=>{
      this.stats = { employees: (e as any[]).length, applicants: (a as any[]).length, departments: (d as any[]).length };
    });
  }
}
