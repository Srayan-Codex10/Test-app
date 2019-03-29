import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public genTable = false;
  public count = 0;

  displayTable() {
    if (this.count === 0) {
      this.genTable = true;
      this.count = 1;
    } else {
      this.genTable = false;
      this.count = 0;
    }

  }
}
