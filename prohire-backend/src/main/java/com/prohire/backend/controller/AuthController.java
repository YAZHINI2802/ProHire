
package com.prohire.backend.controller;

import com.prohire.backend.dto.LoginRequest;
import com.prohire.backend.dto.LoginResponse;
import com.prohire.backend.service.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    // Constructor Injection
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Login API
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request) {

        // Call Service method
        LoginResponse response = authService.login(request);

        // Check login result
        if (!response.isSuccess()) {

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(response);
        }

        // Login successful
        return ResponseEntity.ok(response);
    }
}
