package com.timekeeper.security.request;

import jakarta.validation.constraints.NotEmpty;

import java.util.Set;

public class SetRoleRequest {

	  @NotEmpty(message = "Username must not be empty")
	  private String username;

	  @NotEmpty(message = "Roles must not be empty")
	  private Set<String> role;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Set<String> getRole() {
		return role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
	  
	  

}
