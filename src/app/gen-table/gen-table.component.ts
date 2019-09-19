import { Component, OnInit, Input } from '@angular/core';
import { TableData } from '../table-data';
import data from '../../assets/data.json' ;

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {
  public genList: TableData;
  keyArray = [];

  constructor() {
    this.genList = new TableData(data.student.id, data.student.name, data.student.desc);
    this.keyArray = Object.keys(this.genList);
    console.log(this.keyArray);

  }

  ngOnInit() {
  }

}
