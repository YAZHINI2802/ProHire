package com.prohire.backend.service.impl;

// DTO imports
import com.prohire.backend.dto.LoginRequest;
import com.prohire.backend.dto.LoginResponse;

// Entity import
import com.prohire.backend.entity.User;

// Repository import
import com.prohire.backend.repository.UserRepository;

// Service interface import
import com.prohire.backend.service.AuthService;

// Spring imports
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthServiceImpl implements AuthService {

    // Repository object
    private final UserRepository userRepository;

    // Password encoder object
    private final PasswordEncoder passwordEncoder;

    // Constructor Injection
    public AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Login business logic
    @Override
    public LoginResponse login(LoginRequest request) {

        // Step 1: Find user by email
        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        // Step 2: Check whether user exists
        if (user == null) {

            return new LoginResponse(
                    "Invalid email or password",
                    false
            );
        }

        // Step 3: Verify password
        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        // Step 4: Check password result
        if (!passwordMatches) {

            return new LoginResponse(
                    "Invalid email or password",
                    false
            );
        }

        // Step 5: Login successful
        return new LoginResponse(
                "Login successful",
                true
        );
    }
}