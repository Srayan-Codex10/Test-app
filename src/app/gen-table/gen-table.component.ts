import { Component, OnInit } from '@angular/core';
import { TableData } from '../table-data';

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {

  public genList: Array<TableData> = [];
  test() {
    this.genList.push({id: '34', name: 'Srayan', desc: 'Student'});
    console.log(this.genList);
  }
  constructor() { }

  ngOnInit() {
  }

}
