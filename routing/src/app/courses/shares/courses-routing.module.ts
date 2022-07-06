import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './../courses.component';
import { CourseDetailsComponent } from './../course-details/course-details.component';
import { CourseEditComponent } from './../course-edit/course-edit.component';


const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:course/course-details', component: CourseDetailsComponent},
  {path: 'courses/:id/course-edit', component: CourseEditComponent},
];


// const routes: Routes = [
//   {path: 'courses', component: CoursesComponent, children: [
//     {path: ':id/course-details', component: CourseDetailsComponent},
//     {path: ':id/course-edit', component: CourseEditComponent}
//   ]}
// ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
