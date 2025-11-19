import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeListComponent } from './modules/employees/employee-list.component';
import { ApplicantListComponent } from './modules/applications/applicant-list.component';
import { DepartmentListComponent } from './modules/departments/department-list.component';
import { LoginComponent } from './modules/auth/login.component';

import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { FilterByNamePipe } from './shared/filter-by-name.pipe';
import { ApiService } from './core/api.service';
import { LogoutComponent } from './modules/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterByNamePipe,
    DashboardComponent,
    EmployeeListComponent,
    ApplicantListComponent,
    DepartmentListComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
      { path: 'applicants', component: ApplicantListComponent, canActivate: [AuthGuard] },
      { path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [AuthService, AuthGuard, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
