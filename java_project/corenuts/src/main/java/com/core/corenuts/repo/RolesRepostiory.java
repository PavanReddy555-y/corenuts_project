package com.core.corenuts.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.corenuts.entity.ERole;
import com.core.corenuts.entity.Role;

public interface RolesRepostiory extends JpaRepository<Role, Integer> {
	
	Optional<Role> findByName(ERole name);

}
