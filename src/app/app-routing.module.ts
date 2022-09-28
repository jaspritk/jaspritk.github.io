import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from './components/work/work.component';
import { ArtsComponent } from './components/arts/arts.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'arts', component: ArtsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
