import { Component, OnInit } from '@angular/core';
import { DataService } from "@services/data.service";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse:any = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.data.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01').subscribe((result: any) => {
      this.listCourse = result;
    })
  }

}
