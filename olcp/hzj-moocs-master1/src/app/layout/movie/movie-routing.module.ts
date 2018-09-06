import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './movie.component';
import {MovieMainComponent} from './movie-main/movie-main.component';
import {FreeCourseComponent} from './free-course/free-course.component';
import {SearchHomeComponent} from './search/search-home/search-home.component';
import {PersonalHomeComponent} from './personal/personal-home/personal-home.component';
import {PersonalBindInfoComponent} from './personal/personal-bind-info/personal-bind-info.component';
import {PersonalInfoComponent} from './personal/personal-info/personal-info.component';
import {PersonalOperateRecordComponent} from './personal/personal-operate-record/personal-operate-record.component';
import {PersonalNameAttestComponent} from './personal/personal-name-attest/personal-name-attest.component';
import {PersonalStudentAttestComponent} from './personal/personal-student-attest/personal-student-attest.component';
import {PersonalReceiveAddressComponent} from './personal/personal-receive-address/personal-receive-address.component';
import {CourseHomeComponent} from './my-course/course-home/course-home.component';
import {MyCourseDynamicComponent} from './my-course/my-course-dynamic/my-course-dynamic.component';
import {StudyCourseComponent} from './my-course/study-course/study-course.component';
import {StudyRootComponent} from './my-course/study-root/study-root.component';
import {CourseActualCombatComponent} from './my-course/course-actual-combat/course-actual-combat.component';
import {CourseNotesComponent} from './my-course/course-notes/course-notes.component';
import {CourseProblemComponent} from './my-course/course-problem/course-problem.component';
import {CourseEssayComponent} from './my-course/course-essay/course-essay.component';
import {CourseDetailHomeComponent} from './course-detail/course-detail-home/course-detail-home.component';
import {VideoComponent} from './video/video.component';
import {DisscussComponent} from './course-detail/disscuss/disscuss.component';

const routes: Routes = [
  {path: '', component: MovieComponent, children: [
      {path: '', component: MovieMainComponent},
      {path: 'freeCourse', component: FreeCourseComponent},
      {path: 'search', component: SearchHomeComponent},
      {path: 'personal', component: PersonalHomeComponent, children: [
          {path: '', component: PersonalBindInfoComponent},
          {path: 'setprofile', component: PersonalInfoComponent},
          {path: 'oplog', component: PersonalOperateRecordComponent},
          {path: 'authenticate', component: PersonalNameAttestComponent},
          {path: 'certificate', component: PersonalStudentAttestComponent},
          {path: 'address', component: PersonalReceiveAddressComponent}
        ]},
      {path: 'mycourse', component: CourseHomeComponent, children: [
          {path: '', component: MyCourseDynamicComponent},
          {path: 'courses', component: StudyCourseComponent},
          {path: 'rout', component: StudyRootComponent},
          {path: 'szcourses', component: CourseActualCombatComponent},
          {path: 'notebook', component: CourseNotesComponent},
          {path: 'problem', component: CourseProblemComponent},
          {path: 'articles', component: CourseEssayComponent},
        ]},
      {path: 'learn/:id', component: CourseDetailHomeComponent},
      {path: 'video/:id', component: VideoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MovieRoutingModule { }
