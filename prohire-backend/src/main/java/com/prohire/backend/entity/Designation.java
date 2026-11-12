package com.prohire.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "designations")
@Getter
@Setter
public class Designation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "designation_name", nullable = false, unique = true)
    private String designationName;

    @Column(name = "status")
    private String status = "Active";
}