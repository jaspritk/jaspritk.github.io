import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';
// import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
// import { WebinarsComponent } from './components/webinars/webinars.component';
// import { FinalYearComponent } from './components/final-year/final-year.component';
// import { InternshipComponent } from './components/internship/internship.component';
// import { NpmPackagesComponent } from './components/npm-packages/npm-packages.component';
// import { MeanStackComponent } from './components/mean-stack/mean-stack.component';
// import { FreelancingComponent } from './components/freelancing/freelancing.component';
import { WorkComponent } from './components/work/work.component';
import { ArtsComponent } from './components/arts/arts.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  // { path: 'mean-stack-apps', component: MeanStackComponent },
  // { path: 'npm-packages', component: NpmPackagesComponent },
  // { path: 'internship-projects', component: InternshipComponent },
  // { path: 'freelance-projects', component: FreelancingComponent },
  // { path: 'final-year-projects', component: FinalYearComponent },
  // { path: 'webinars', component: WebinarsComponent },
  // { path: 'design-case-studies', component: CaseStudiesComponent },
  // { path: 'data-analysis', component: DataAnalysisComponent },
  { path: 'work', component: WorkComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'about', component: AboutComponent },


  // { path: 'home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
