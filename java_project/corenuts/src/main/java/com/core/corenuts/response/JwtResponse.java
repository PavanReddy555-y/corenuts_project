package com.core.corenuts.response;

import java.util.Set;

import lombok.Data;
import lombok.NonNull;

@Data
public class JwtResponse {
	@NonNull
	private String token;
	private String type = "Bearer";
	@NonNull
	private Integer id;
	@NonNull
	private String username;
	@NonNull
	private String email;
	@NonNull
	private Set<String> roles;
}
