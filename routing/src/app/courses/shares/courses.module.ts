import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from '../courses.component';
import { CourseEditComponent } from './../course-edit/course-edit.component';
import { CourseDetailsComponent } from './../course-details/course-details.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ], 
  exports: [
    CoursesComponent,
    CourseDetailsComponent,
    CourseEditComponent
  ]
})
export class CoursesModule { }
