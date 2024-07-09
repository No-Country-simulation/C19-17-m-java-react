package com.timekeeper.security.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
  private String type = "Bearer";
  private Long id;
  private String username;
  private String email;
  private List<String> roles;

  public JwtResponse(Long id, String username, String email, List<String> roles) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.roles = roles;
  }
}
