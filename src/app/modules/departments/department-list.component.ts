import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments:any[]=[];
  constructor(private api: ApiService){}
  ngOnInit(){ this.api.get('/departments').subscribe((r:any)=>this.departments=r); }
}
