package com.core.corenuts.repo;


import com.core.corenuts.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepo extends JpaRepository<Student, Integer> {
    List<Student> findByInterviewFinalResult(String interviewFinalResult);

    List<Student> findByInterviewFinalResultIsNull();


}
