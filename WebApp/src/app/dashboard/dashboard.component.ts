import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Data } from '../models/Data'
@Component({
  selector: "app-dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  _data: Data[];
  total_teachers;
  present_teachers;
  absent_teachers;
  total_students;
  present_students;
  absent_students;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  constructor(private _service: CommonService) {

  }

  ngOnInit() {
    //this._service.GetData().subscribe(res => this._data = res);
    this.total_teachers = 30;
    this.absent_teachers = 4;
    this.present_teachers = this.total_teachers - this.absent_teachers;
    this.total_students = 50;
    this.absent_students = 12;
    this.present_students = this.total_students - this.absent_students;
  }
  redirect(d) {
    location.href = "#/"+d;
  }

}
