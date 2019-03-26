import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NonteachComponent } from './nonteach/nonteach.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AssetComponent } from './asset/asset.component';
import { GenTableComponent } from './gen-table/gen-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NonteachComponent,
    StudentComponent,
    TeacherComponent,
    AssetComponent,
    GenTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
