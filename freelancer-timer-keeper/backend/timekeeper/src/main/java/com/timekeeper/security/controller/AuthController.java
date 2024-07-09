package com.timekeeper.security.controller;

import com.timekeeper.security.jwt.JwtUtils;
import com.timekeeper.security.model.ERole;
import com.timekeeper.security.model.Role;
import com.timekeeper.security.model.User;
import com.timekeeper.security.payload.JwtResponse;
import com.timekeeper.security.payload.MessageResponse;
import com.timekeeper.security.repository.RoleRepository;
import com.timekeeper.security.repository.UserRepository;
import com.timekeeper.security.request.LoginRequest;
import com.timekeeper.security.request.SetRoleRequest;
import com.timekeeper.security.request.SignupRequest;
import com.timekeeper.security.service.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(
				new JwtResponse(userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
	}


	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getFirstname(),  signUpRequest.getLastname(), signUpRequest.getUsername(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			for (String role : strRoles) {
				switch (role.toLowerCase()) {
					case "user":
						Role userRole = roleRepository.findByName(ERole.ROLE_USER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(userRole);
						break;
					case "freelancer":
						Role freelancerRole = roleRepository.findByName(ERole.ROLE_FREELANCER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(freelancerRole);
						break;
					default:
						return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid role specified!"));
				}
			}
		}

		user.setRoles(roles);

		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

	@PostMapping("/setrole")
	public ResponseEntity<?> setRole(@Valid @RequestBody SetRoleRequest setRoleRequest) {
		User user = userRepository.findByUsername(setRoleRequest.getUsername()).orElse(null);

		if (user == null) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username does not exist!"));
		}

		Set<String> strRoles = setRoleRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			for (String role : strRoles) {
				switch (role.toLowerCase()) {
					case "user":
						addRoleIfExists(ERole.ROLE_USER, roles);
						break;
					case "freelancer":
						addRoleIfExists(ERole.ROLE_FREELANCER, roles);
						break;
					default:
						return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalid role specified!"));
				}
			}
		}

		user.setRoles(roles);
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("User role added successfully!"));
	}

	private void addRoleIfExists(ERole roleName, Set<Role> roles) {
		Role role = roleRepository.findByName(roleName)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(role);
	}
}
