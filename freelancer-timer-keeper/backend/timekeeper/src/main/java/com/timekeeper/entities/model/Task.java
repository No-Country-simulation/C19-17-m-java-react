//package com.timekeeper.entities.model;
//
//
//import com.timekeeper.security.model.User;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//
//import java.time.Duration;
//import java.time.LocalDate;
//
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//
//@Entity
//public class Task {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private Projects project;
//    private String name;
//    private LocalDate startDate;
//    private LocalDate finalDate;
//    private Duration dedicatedTime;
//    @Enumerated(EnumType.STRING)
//    private State state;
//
//
//}
