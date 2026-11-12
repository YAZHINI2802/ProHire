
package com.prohire.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

    private Long id;
    private String employeeId;
    private String employeeName;
    private String email;
    private String team;
    private String designation;
    private String temporaryPassword;
}
