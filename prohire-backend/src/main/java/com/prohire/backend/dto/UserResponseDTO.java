package com.prohire.prohirebackend.dto;

import com.prohire.prohirebackend.entity.User;

public class UserResponseDTO {

    private Long id;
    private String employeeCode;
    private String employeeName;
    private String email;
    private String username;
    private String status;
    private String teamName;
    private String designationName;

    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.employeeCode = user.getEmployeeCode();
        this.employeeName = user.getEmployeeName();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.status = user.getStatus();
        this.teamName = user.getTeam().getTeamName();
        this.designationName =
                user.getDesignation().getDesignationName();
    }

    public Long getId() {
        return id;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getStatus() {
        return status;
    }

    public String getTeamName() {
        return teamName;
    }

    public String getDesignationName() {
        return designationName;
    }
}