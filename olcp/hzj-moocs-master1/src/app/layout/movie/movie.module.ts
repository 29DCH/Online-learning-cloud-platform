import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieMainComponent } from './movie-main/movie-main.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FreeCourseComponent } from './free-course/free-course.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchHomeComponent } from './search/search-home/search-home.component';
import { SearchBlogComponent } from './search/search-blog/search-blog.component';
import { SearchCourseComponent } from './search/search-course/search-course.component';
import { SearchProblemComponent } from './search/search-problem/search-problem.component';
import { PersonalHomeComponent } from './personal/personal-home/personal-home.component';
import { PersonalBindInfoComponent } from './personal/personal-bind-info/personal-bind-info.component';
import { PersonalInfoComponent } from './personal/personal-info/personal-info.component';
import { PersonalNameAttestComponent } from './personal/personal-name-attest/personal-name-attest.component';
import { PersonalOperateRecordComponent } from './personal/personal-operate-record/personal-operate-record.component';
import { PersonalReceiveAddressComponent } from './personal/personal-receive-address/personal-receive-address.component';
import { PersonalStudentAttestComponent } from './personal/personal-student-attest/personal-student-attest.component';
import { CourseHomeComponent } from './my-course/course-home/course-home.component';
import { CourseActualCombatComponent } from './my-course/course-actual-combat/course-actual-combat.component';
import { CourseEssayComponent } from './my-course/course-essay/course-essay.component';
import { CourseNotesComponent } from './my-course/course-notes/course-notes.component';
import { CourseProblemComponent } from './my-course/course-problem/course-problem.component';
import { MyCourseDynamicComponent } from './my-course/my-course-dynamic/my-course-dynamic.component';
import { StudyCourseComponent } from './my-course/study-course/study-course.component';
import { StudyRootComponent } from './my-course/study-root/study-root.component';
import { CourseDetailHomeComponent } from './course-detail/course-detail-home/course-detail-home.component';
import { AnswerCommentComponent } from './course-detail/answer-comment/answer-comment.component';
import { StudentNoteComponent } from './course-detail/student-note/student-note.component';
import { CourseAssessComponent } from './course-detail/course-assess/course-assess.component';
import { VideoComponent } from './video/video.component';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {SharedModule} from '../shared/shared.module';
import { DisscussComponent } from './course-detail/disscuss/disscuss.component';
import { NewCommentComponent } from './course-detail/new-comment/new-comment.component';
import { NewProblemComponent } from './course-detail/new-problem/new-problem.component';
import { ChoiceCommentComponent } from './course-detail/choice-comment/choice-comment.component';
import { StudentCommentComponent } from './course-detail/student-comment/student-comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MovieRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    MovieComponent,
    MovieMainComponent,
    CourseListComponent,
    FreeCourseComponent,
    PaginationComponent,
    SearchHomeComponent,
    SearchBlogComponent,
    SearchCourseComponent,
    SearchProblemComponent,
    PersonalHomeComponent,
    PersonalBindInfoComponent,
    PersonalInfoComponent,
    PersonalNameAttestComponent,
    PersonalOperateRecordComponent,
    PersonalReceiveAddressComponent,
    PersonalStudentAttestComponent,
    CourseHomeComponent,
    CourseActualCombatComponent,
    CourseEssayComponent,
    CourseNotesComponent,
    CourseProblemComponent,
    MyCourseDynamicComponent,
    StudyCourseComponent,
    StudyRootComponent,
    CourseDetailHomeComponent,
    AnswerCommentComponent,
    StudentNoteComponent,
    CourseAssessComponent,
    VideoComponent,
    DisscussComponent,
    NewCommentComponent,
    NewProblemComponent,
    ChoiceCommentComponent,
    StudentCommentComponent
  ],
  exports: [
  ],
  entryComponents: [
    NewCommentComponent,
    NewProblemComponent,
    ChoiceCommentComponent
  ]
})
export class MovieModule { }
