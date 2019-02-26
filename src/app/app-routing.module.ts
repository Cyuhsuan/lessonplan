import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { SaleRecordComponent } from './sale-record/sale-record.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: 'daily-report',
    component: DailyReportComponent
  },

  {
    path: 'sale-record',
    component: SaleRecordComponent
  },

  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'sale-record',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
