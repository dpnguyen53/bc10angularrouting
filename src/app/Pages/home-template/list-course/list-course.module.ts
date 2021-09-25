import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCourseRoutingModule } from './list-course-routing.module';
import { ListCourseComponent } from './list-course.component';
import { CourseComponent } from './course/course.component';
import { PopupComponent } from './popup/popup.component';
import { ShareModuleModule } from 'src/app/_core/share/share-module/share-module.module';


@NgModule({
  declarations: [
    ListCourseComponent,
    CourseComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    ListCourseRoutingModule,
    ShareModuleModule
  ]
})
export class ListCourseModule { }
