import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { InterviewerSkillService } from 'src/app/service/interviewer-skill.service';
import { OrganisationService } from 'src/app/service/organisation.service';
import { RestDataSource } from 'src/app/service/restdataSource';
import { StateArrayService } from 'src/app/service/state-array.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  public studentForm!: FormGroup;
  public submitType: string = 'save';
  public selectedDate!: any;
  public years: string[] = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ];

  constructor(
    private dialogRef: MatDialogRef<StudentFormComponent>,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private organisationService: OrganisationService,
    private studentService: StudentService,
    private stateArrayService: StateArrayService,
    private restData: RestDataSource,
    private router: Router,
    private interviewerSkillService: InterviewerSkillService,
    @Inject(MAT_DIALOG_DATA) private studentData: Student
  ) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      studentId: ['', Validators.required],
      studentName: ['', Validators.required],
      studentGender: ['', Validators.required],
      studentMobileNumber: ['', Validators.required],
      studentEmail: ['', [Validators.required, Validators.email]],
      studentAadharNumber: ['', Validators.required],
      studentDob: [this.selectedDate],
      interviewFinalResult: [],
      address: this.formBuilder.group({
        addressId: ['', Validators.required],
        doorNo: [''],
        street: ['', Validators.required],
        locality: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
      organisation: this.formBuilder.group({
        organisationId: [''],
      }),
      studentEducationDetail: this.formBuilder.group({
        studentEducationDetailId: [''],
        degree: [''],
        degreeStream: [''],
        tenthAggregate: [],
        twelthAggregate: [],
        diplomaAggregate: [],
        degreeAggregate: [],
        mastersAggregate: [''],
        yearOfPassout: [],
        otherSkills: [''],
        primarySkill: this.formBuilder.group({
          interviewerSkillId: ['', Validators.required],
        }),
        secondarySkill: this.formBuilder.group({
          interviewerSkillId: ['', Validators.required],
        }),
      }),
    });
    if (this.studentData) {
      this.submitType = 'update';
      this.selectedDate = this.studentData.studentDob;
      console.log(this.studentData);
      this.studentForm.patchValue({
        studentId: this.studentData.studentId,
        studentName: this.studentData.studentName,
        studentAge: this.studentData.studentAge,
        studentGender: this.studentData.studentGender,
        studentMobileNumber: this.studentData.studentMobileNumber,
        studentEmail: this.studentData.studentEmail,
        studentAadharNumber: this.studentData.studentAadharNumber,
        studentDob: this.studentData.studentDob,
        interviewFinalResult: this.studentData.interviewFinalResult,
        address: {
          addressId: this.studentData.address.addressId,
          doorNo: this.studentData.address.doorNo,
          street: this.studentData.address.street,
          city: this.studentData.address.city,
          pincode: this.studentData.address.pincode,
          locality: this.studentData.address.locality,
          state: this.studentData.address.state,
        },
        organisation: {
          organisationId: this.studentData.organisation.organisationId,
        },
        studentEducationDetail: {
          studentEducationDetailId:
            this.studentData.studentEducationDetail.studentEducationDetailId,
          degreeStream: this.studentData.studentEducationDetail.degreeStream,
          degree: this.studentData.studentEducationDetail.degree,
          tenthAggregate:
            this.studentData.studentEducationDetail.tenthAggregate,
          twelthAggregate:
            this.studentData.studentEducationDetail.twelthAggregate,
          diplomaAggregate:
            this.studentData.studentEducationDetail.diplomaAggregate,
          degreeAggregate:
            this.studentData.studentEducationDetail.degreeAggregate,
          mastersAggregate:
            this.studentData.studentEducationDetail.mastersAggregate,
          yearOfPassout: this.studentData.studentEducationDetail.yearOfPassout,
          otherSkills: this.studentData.studentEducationDetail.otherSkills,
          primarySkill: {
            interviewerSkillId:
              this.studentData.studentEducationDetail.primarySkill
                .interviewerSkillId,
          },
          secondarySkill: {
            interviewerSkillId:
              this.studentData.studentEducationDetail.secondarySkill
                .interviewerSkillId,
          },
        },
      });
    }
  }

  submitStudent(): void {
    // if (this.studentForm.invalid) {
    //   return;
    // }
    let formattedDate = this.datePipe.transform(
      this.selectedDate,
      'yyyy-MM-dd'
    );
    console.log(this.selectedDate);
    this.studentForm.patchValue({
      studentDob: formattedDate,
    });

    console.log(this.studentForm.value);
    this.restData.saveStudent(this.studentForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.dialogRef.close();
        this.studentForm.reset();
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/home/student']);
          });
      },
    });
  }

  getOrganisations() {
    return this.organisationService.getOrganisations();
  }

  getInterviewerSkills() {
    return this.interviewerSkillService.getInterviewerSkills();
  }

  getStates() {
    return this.stateArrayService.getStates();
  }
}
