

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'guide', component: GuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
