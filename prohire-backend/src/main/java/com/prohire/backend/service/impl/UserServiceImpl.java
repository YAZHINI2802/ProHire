
package com.prohire.backend.service.impl;

import com.prohire.backend.dto.UserResponse;
import com.prohire.backend.entity.User;
import com.prohire.backend.repository.UserRepository;
import com.prohire.backend.service.UserService;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Constructor Injection
    public UserServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Add new user
    @Override
    public UserResponse addUser(User user) {

        // Generate temporary password
        String temporaryPassword =
                "Pro@" + UUID.randomUUID().toString().substring(0, 8);

        // Encrypt password using BCrypt
        user.setPassword(passwordEncoder.encode(temporaryPassword));

        // Save user in database
        User savedUser = userRepository.save(user);

        // Convert Entity to DTO
        UserResponse response = convertToResponse(savedUser);

        // Return temporary password only in Add User response
        response.setTemporaryPassword(temporaryPassword);

        return response;
    }

    // Get all users
    @Override
    public List<UserResponse> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    // Convert User Entity to UserResponse
    private UserResponse convertToResponse(User user) {

        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setEmployeeId(user.getEmployeeId());
        response.setEmployeeName(user.getEmployeeName());
        response.setEmail(user.getEmail());
        response.setTeam(user.getTeam());
        response.setDesignation(user.getDesignation());

        return response;
    }
}
