import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonService } from './common.service';
import { ClassesComponent } from './classes/classes.component';
import { FeeComponent } from './fee/fee.component';
import { DateSheetAndTimeTableComponent } from './date-sheet-and-time-table/date-sheet-and-time-table.component';
import { TemplatesComponent } from './templates/templates.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ClassesComponent,
    FeeComponent,
    DateSheetAndTimeTableComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
