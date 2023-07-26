import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/service/common.service';
import { RestDataSource } from 'src/app/service/restdataSource';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
})
export class InterviewListComponent {
  students!: Student[];
  public role!: string;
  displayedColumns: string[] = [
    'studentId',
    'studentName',
    'studentAadharNumber',
    'organisation',
  ];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private studentService: StudentService,
    private restData: RestDataSource,
    private commonService: CommonService
  ) {
    this.dataSource = new MatTableDataSource();
    this.restData.getStudentsByInterviewFinalResultIsNull().subscribe({
      next: (resp) => {
        console.log(resp);
        this.students = resp;
        this.dataSource.data = resp;
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.role = this.commonService.getrole();
    if (this.isInterviewer()) {
      this.displayedColumns.push('action');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getStudents() {
    return this.studentService.getStudents();
  }

  isInterviewer() {
    return this.role === 'Interviewer';
  }
}
