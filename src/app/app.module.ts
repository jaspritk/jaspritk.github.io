import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { FinalYearComponent } from './components/final-year/final-year.component';
import { InternshipComponent } from './components/internship/internship.component';
import { NpmPackagesComponent } from './components/npm-packages/npm-packages.component';
import { MeanStackComponent } from './components/mean-stack/mean-stack.component';
import { FreelancingComponent } from './components/freelancing/freelancing.component';
import { ArtsComponent } from './components/arts/arts.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { SeoComponent } from './components/seo/seo.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    DataAnalysisComponent,
    CaseStudiesComponent,
    WebinarsComponent,
    FinalYearComponent,
    InternshipComponent,
    NpmPackagesComponent,
    MeanStackComponent,
    FreelancingComponent,
    ArtsComponent,
    WorkComponent,
    AboutComponent,
    SeoComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
