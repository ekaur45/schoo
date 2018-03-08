import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalValues } from './models/GlobalValues';
import { ClassesComponent } from './classes/classes.component';
import { FeeComponent } from './fee/fee.component';
import { DateSheetAndTimeTableComponent } from './date-sheet-and-time-table/date-sheet-and-time-table.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'feeSchedual', component: FeeComponent },
  {
    path: 'timeSchedule', component: DateSheetAndTimeTableComponent  },
  { path: "**", component: PageNotFoundComponent }

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
