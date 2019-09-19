import { Component, OnInit, Input } from '@angular/core';
import { TableData } from '../table-data';
import data from '../../assets/data.json' ;

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {
  public studentList: TableData;
  public teacherList: TableData;
  public nonTeacherList: TableData;
  public genArray = [];
  keyArray = [];

  constructor() {
    this.studentList = new TableData(data.student[0].id, data.student[0].name, data.student[0].desc);
    this.genArray.push(this.studentList);
    this.teacherList = new TableData(data.teacher[0].id, data.teacher[0].name, data.teacher[0].desc);
    this.genArray.push(this.teacherList);
    this.nonTeacherList = new TableData(data['non-teacher'][0].id, data['non-teacher'][0].name, data['non-teacher'][0].desc);
    this.genArray.push(this.nonTeacherList);
    this.keyArray = Object.keys(this.studentList);
    }

  ngOnInit() {
  }

}
