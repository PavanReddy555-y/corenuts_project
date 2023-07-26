package com.core.corenuts.service;

import com.core.corenuts.entity.Student;
import com.core.corenuts.repo.StudentRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Slf4j
public class StudentService {
    @Autowired
    private StudentRepo studentRepo;

    public Student saveStudent(Student student) {
        Student savedStudent = studentRepo.save(student);
        log.info("Student successfully saved:{}", student);
        return savedStudent;
    }

    public void deleteStudentById(int studentId) {
        studentRepo.deleteById(studentId);
        log.info("student with id {} deleted successfully", studentId);
    }

    public List<Student> findStudents() {
        List<Student> students = studentRepo.findAll();
        log.info("students fetched successfully :{}", students);
        return students;
    }

    public Student findStudentById(int studentId) {
        Optional<Student> student = studentRepo.findById(studentId);
        if (student.isPresent()) {
            log.info("student with id {} fetched successfully:{}", studentId, student);
            return student.get();
        }
        return null;
    }

    public List<Student> findStudentsByInterviewFinalResult(String interviewFinalResult){
        List<Student> students = studentRepo.findByInterviewFinalResult(interviewFinalResult);
        log.info("students fetched successfully by interviewFinalResult {}:{}",interviewFinalResult, students);
        return students;
    }

    public List<Student> findStudentsByInterviewFinalResultISNull(){
        List<Student> students = studentRepo.findByInterviewFinalResultIsNull();
        log.info("students fetched successfully by interviewFinalResult as null :{}", students);
        return students;
    }
}
