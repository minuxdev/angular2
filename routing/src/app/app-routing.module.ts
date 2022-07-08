

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { CoursesModule } from './courses/shares/courses.module';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'courses', loadChildren: () => 
    import('./courses/courses.component')
    .then((module: any) => CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
