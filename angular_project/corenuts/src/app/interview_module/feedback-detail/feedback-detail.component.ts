import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/model/student';
import { FeedbackUpdateComponent } from '../feedback-update/feedback-update.component';
import { RestDataSource } from 'src/app/service/restdataSource';
import { InterviewRound } from 'src/app/model/interviewRound';
import { ReloadService } from 'src/app/service/reloadService';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css'],
})
export class FeedbackDetailComponent implements OnInit {
  studentId!: any;
  student!: Student;
  interviewRounds!: InterviewRound[];
  constructor(
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private restData: RestDataSource,
    private reloadService: ReloadService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.studentId = paramMap.get('studentId');
      console.log(this.studentId);
    });

    this.restData.getInterviewRoundsByStudentId(this.studentId).subscribe({
      next: (data) => {
        console.log(data);
        this.interviewRounds = data;
        this.student = this.interviewRounds[0].student;
        console.log(this.student);
      },
    });
  }

  updateFeedback(interviewround: any) {
    this.matDialog.open(FeedbackUpdateComponent, {
      data: interviewround,
    });
  }
}
