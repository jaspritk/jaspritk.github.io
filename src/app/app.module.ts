import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { FinalYearComponent } from './components/final-year/final-year.component';
import { InternshipComponent } from './components/internship/internship.component';
import { NpmPackagesComponent } from './components/npm-packages/npm-packages.component';
import { MeanStackComponent } from './components/mean-stack/mean-stack.component';
import { FreelancingComponent } from './components/freelancing/freelancing.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    DataAnalysisComponent,
    CaseStudiesComponent,
    WebinarsComponent,
    FinalYearComponent,
    InternshipComponent,
    NpmPackagesComponent,
    MeanStackComponent,
    FreelancingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
