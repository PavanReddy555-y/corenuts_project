package com.core.corenuts.controller;

import com.core.corenuts.entity.Student;
import com.core.corenuts.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController()
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping()
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) {

        return ResponseEntity.ok()
                .body(studentService.saveStudent(student));
    }

    @GetMapping
    public ResponseEntity<List<Student>> findStudents() {
        List<Student> students = studentService.findStudents();
        return ResponseEntity.ok()
                .body(students);
    }

    @GetMapping("/id/{studentId}")
    public ResponseEntity<Student> findStudentById(@PathVariable int studentId) {
        Student student = studentService.findStudentById(studentId);
        return ResponseEntity.ok()
                .body(student);
    }

    @DeleteMapping("/id/{studentId}")
    public ResponseEntity<Integer> deleteStudentById(@PathVariable int studentId) {
        studentService.deleteStudentById(studentId);
        return ResponseEntity.ok()
                .body( studentId);
    }

    @PutMapping
    public ResponseEntity<Student> updateStudentById(@RequestBody Student student){
        Student studentById = studentService.findStudentById(student.getStudentId());
        studentById.setInterviewFinalResult(student.getInterviewFinalResult());
        return ResponseEntity.ok().body(studentService.saveStudent(studentById));
    }

    @GetMapping("/byfinalinterviewresult/{interviewFinalResult}")
    public ResponseEntity<List<Student>> findStudentsByInterviewFinalResult(@PathVariable String interviewFinalResult){
        return ResponseEntity.ok().body(studentService.findStudentsByInterviewFinalResult(interviewFinalResult));
    }

    @GetMapping("/byfinalinterviewresultisnull")
    public ResponseEntity<List<Student>> findStudentsByInterviewFinalResultIsNull(String interviewFinalResult){
        return ResponseEntity.ok().body(studentService.findStudentsByInterviewFinalResultISNull());
    }

}
