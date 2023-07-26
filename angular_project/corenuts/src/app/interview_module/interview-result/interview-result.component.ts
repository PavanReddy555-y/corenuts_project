import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model/student';
import { RestDataSource } from 'src/app/service/restdataSource';

@Component({
  selector: 'app-interview-result',
  templateUrl: './interview-result.component.html',
  styleUrls: ['./interview-result.component.css'],
})
export class InterviewResultComponent implements OnInit, AfterViewInit {
  students!: Student[];
  selected: string = 'selected';
  displayedColumns: string[] = [
    'studentId',
    'studentName',
    'studentAadharNumber',
    'organisation',
    'action',
  ];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private restData: RestDataSource) {
    this.getStudents();
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStudents() {
    this.restData.getStudentsByInterviewFinalResult(this.selected).subscribe({
      next: (data) => {
        console.log(data)
        , (this.students = data);
        this.dataSource.data = data;
      },
    });
  }
}
