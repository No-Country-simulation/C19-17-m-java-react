package com.timekeeper.security.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class SetRoleRequest {

	@NotEmpty(message = "Username must not be empty")
	private String username;

	private LocalDate birthday;

	@NotEmpty(message = "Roles must not be empty")
	private Set<String> role;

}
