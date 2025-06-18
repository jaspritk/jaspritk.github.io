import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from './components/work/work.component';
// import { ArtsComponent } from './components/arts/arts.component';
import { AboutComponent } from './components/about/about.component';
// import { BusinessComponent } from './components/business/business.component';


const routes: Routes = [
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  // { path: '', component: WorkComponent },
  { path: 'work', component: WorkComponent },
  // { path: 'business', component: BusinessComponent },
  // { path: 'arts', component: ArtsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/work', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
