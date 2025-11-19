import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  applicants: any[] = [];
  constructor(private api: ApiService) { }
  ngOnInit() { this.api.get('/applicants').subscribe((r: any) => this.applicants = r); }
}

