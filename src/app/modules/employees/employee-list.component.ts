import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  q = '';
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.get('/employees').subscribe((r:any)=>this.employees=r); }
}
