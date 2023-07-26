import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interviewer } from '../model/Interviewer';
import { Organizer } from '../model/organizer';
import { Organisation } from '../model/organisation';
import { InterviewerSkill } from '../model/interviewerSkill';
import { InterviewSchedule } from '../model/interviewSchedule';
import { Student } from '../model/student';
import { InterviewRound } from '../model/interviewRound';
import { InterviewSkill } from '../model/interviewSkill';
import { StudentExamMark } from '../model/studentExamMark';
import { InterviewRatingPoint } from '../model/interviewRatingPoint';
import { Admin } from '../model/admin';

@Injectable()
export class RestDataSource {
  url: string = 'http://localhost:7777/';
  constructor(private http: HttpClient) {}

  getInterviewRounds(): Observable<InterviewRound[]> {
    return this.http.get<InterviewRound[]>(`${this.url}interviewround/`);
  }

  getInterviewRoundById(interviewRoundId: number): Observable<InterviewRound> {
    return this.http.get<InterviewRound>(
      `${this.url}interviewround/id/${interviewRoundId}`
    );
  }

  saveInterviewRound(interviewRound: InterviewRound) {
    return this.http.post(`${this.url}interviewround/`, interviewRound);
  }

  deleteInterviewRoundById(interviewRoundId: number) {
    return this.http.delete(`${this.url}interviewround/id/${interviewRoundId}`);
  }
  getInterviewRoundsByStudentId(
    studentId: number
  ): Observable<InterviewRound[]> {
    return this.http.get<InterviewRound[]>(
      `${this.url}interviewround/bystudentid/${studentId}`
    );
  }

  //Interviewer
  getInterviewers(): Observable<Interviewer[]> {
    return this.http.get<Interviewer[]>(`${this.url}interviewer/`);
  }

  getInterviewerById(interviewerId: number): Observable<Interviewer> {
    return this.http.get<Interviewer>(
      `${this.url}interviewer/id/${interviewerId}`
    );
  }

  getInterviewerByInterviewerEmail(
    interviewerEmail: string
  ): Observable<Interviewer> {
    return this.http.get<Interviewer>(
      `${this.url}interviewer/intervieweremail/${interviewerEmail}`
    );
  }

  saveInterviewer(interviewer: Interviewer) {
    return this.http.post(`${this.url}interviewer/`, interviewer);
  }

  deleteInterviewerById(interviewerId: number) {
    return this.http.delete(`${this.url}interviewer/id/${interviewerId}`);
  }

  //InterviewerSkill
  getInterviewerSkills(): Observable<InterviewerSkill[]> {
    return this.http.get<InterviewerSkill[]>(`${this.url}interviewerskill/`);
  }

  getInterviewerSkillById(
    interviewerSkillId: number
  ): Observable<InterviewerSkill> {
    return this.http.get<InterviewerSkill>(
      `${this.url}interviewerskill/id/${interviewerSkillId}`
    );
  }

  saveInterviewerSkill(interviewerSkill: InterviewerSkill) {
    return this.http.post(`${this.url}interviewerskill/`, interviewerSkill);
  }

  deleteInterviewerSkillById(interviewerSkillId: number) {
    return this.http.delete(
      `${this.url}interviewerskill/id/${interviewerSkillId}`
    );
  }

  getInterviewSkills(): Observable<InterviewSkill[]> {
    return this.http.get<InterviewSkill[]>(`${this.url}interviewskill/`);
  }

  getInterviewSkillById(interviewSkillId: number): Observable<InterviewSkill> {
    return this.http.get<InterviewSkill>(
      `${this.url}interviewskill/id/${interviewSkillId}`
    );
  }

  saveInterviewSkill(interviewSkill: InterviewSkill) {
    return this.http.post(`${this.url}interviewskill/`, interviewSkill);
  }

  deleteInterviewSkillById(interviewSkillId: number) {
    return this.http.delete(`${this.url}interviewskill/id/${interviewSkillId}`);
  }

  //Student
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}student/`);
  }

  getStudentsByInterviewFinalResultIsNull(): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.url}student/byfinalinterviewresultisnull`
    );
  }

  getStudentsByInterviewFinalResult(
    interviewFinalResult: string
  ): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.url}student/byfinalinterviewresult/${interviewFinalResult}`
    );
  }

  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}student/id/${studentId}`);
  }

  saveStudent(student: Student) {
    return this.http.post(`${this.url}student/`, student);
  }

  deleteStudentById(studentId: number) {
    return this.http.delete(`${this.url}student/id/${studentId}`);
  }
  updateStudent(student: Student): Observable<Student[]> {
    return this.http.put<Student[]>(`${this.url}student/`, student);
  }

  //InterviewSchedule
  getInterviewSchedules(): Observable<InterviewSchedule[]> {
    return this.http.get<InterviewSchedule[]>(`${this.url}interviewschedule/`);
  }

  getInterviewScheduleById(
    interviewScheduleId: number
  ): Observable<InterviewSchedule> {
    return this.http.get<InterviewSchedule>(
      `${this.url}interviewschedule/id/${interviewScheduleId}`
    );
  }

  saveInterviewSchedule(interviewSchedule: InterviewSchedule) {
    return this.http.post(`${this.url}interviewschedule/`, interviewSchedule);
  }

  deleteInterviewScheduleById(interviewScheduleId: number) {
    return this.http.delete(
      `${this.url}interviewschedule/id/${interviewScheduleId}`
    );
  }

  //Organisation
  getOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.url}organisation/`);
  }

  getOrganisationById(organisationId: number): Observable<Organisation> {
    return this.http.get<Organisation>(
      `${this.url}organisation/id/${organisationId}`
    );
  }

  saveOrganisation(organisation: Organisation) {
    return this.http.post(`${this.url}organisation/`, organisation);
  }

  deleteOrganisationById(organisationId: number) {
    return this.http.delete(`${this.url}organisation/id/${organisationId}`);
  }

  //Organizer
  getOrganizers(): Observable<Organizer[]> {
    return this.http.get<Organizer[]>(`${this.url}organizer/`);
  }

  getOrganizerById(organizerId: number): Observable<Organizer> {
    return this.http.get<Organizer>(`${this.url}organizer/id/${organizerId}`);
  }

  saveOrganizer(organizer: Organizer) {
    return this.http.post(`${this.url}organizer/`, organizer);
  }

  deleteOrganizerById(organizerId: number) {
    return this.http.delete(`${this.url}organizer/id/${organizerId}`);
  }

  //InterviewRatingPoint
  getInterviewRatingPoints(): Observable<InterviewRatingPoint[]> {
    return this.http.get<InterviewRatingPoint[]>(
      `${this.url}interviewratingpoint/`
    );
  }

  getInterviewRatingPointById(
    InterviewRatingPointId: number
  ): Observable<InterviewRatingPoint> {
    return this.http.get<InterviewRatingPoint>(
      `${this.url}interviewratingpoint/id/${InterviewRatingPointId}`
    );
  }

  saveInterviewRatingPoint(InterviewRatingPoint: InterviewRatingPoint) {
    return this.http.post(
      `${this.url}interviewratingpoint/`,
      InterviewRatingPoint
    );
  }

  deleteInterviewRatingPointById(InterviewRatingPointId: number) {
    return this.http.delete(
      `${this.url}interviewratingpoint/id/${InterviewRatingPointId}`
    );
  }

  getStudentExamMarks(): Observable<StudentExamMark[]> {
    return this.http.get<StudentExamMark[]>(`${this.url}studentexammark/`);
  }

  getStudentExamMarkById(
    studentExamMarkId: number
  ): Observable<StudentExamMark> {
    return this.http.get<StudentExamMark>(
      `${this.url}studentexammark/id/${studentExamMarkId}`
    );
  }

  saveStudentExamMark(studentExamMark: StudentExamMark) {
    return this.http.post(`${this.url}studentexammark/`, studentExamMark);
  }

  deleteStudentExamMarkById(studentExamMarkId: number) {
    return this.http.delete(
      `${this.url}studentexammark/id/${studentExamMarkId}`
    );
  }

  getExamMarkByStudentId(studentId: number): Observable<StudentExamMark> {
    return this.http.get<StudentExamMark>(
      `${this.url}studentexammark/bystudentid/${studentId}`
    );
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.url}admin/`);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.url}admin/id/${adminId}`);
  }

  saveAdmin(admin: Admin) {
    return this.http.post(`${this.url}admin/`, admin);
  }

  deleteAdminById(adminId: number) {
    return this.http.delete(`${this.url}admin/id/${adminId}`);
  }
}
