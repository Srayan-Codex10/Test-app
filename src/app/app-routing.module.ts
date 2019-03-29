import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NonteachComponent } from './nonteach/nonteach.component';
import { AssetComponent } from './asset/asset.component';

const routes: Routes = [
  {path: 'student' , component: StudentComponent},
  {path: 'teacher' , component: TeacherComponent},
  {path: 'nonteach', component: NonteachComponent},
  {path: 'asset' , component: AssetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
