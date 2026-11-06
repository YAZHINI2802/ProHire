package com.prohire.service;

import com.prohire.dto.UserRequestDTO;
import com.prohire.dto.UserResponseDTO;
import com.prohire.entity.*;
import com.prohire.repository.*;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final DesignationRepository designationRepository;

    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    private final SecureRandom random = new SecureRandom();

    public UserService(
            UserRepository userRepository,
            TeamRepository teamRepository,
            DesignationRepository designationRepository) {

        this.userRepository = userRepository;
        this.teamRepository = teamRepository;
        this.designationRepository = designationRepository;
    }

    public UserResponseDTO createUser(UserRequestDTO request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        Team team = teamRepository.findById(request.getTeamId())
                .orElseThrow(() -> new RuntimeException("Team not found"));

        Designation designation =
                designationRepository.findById(request.getDesignationId())
                .orElseThrow(() ->
                        new RuntimeException("Designation not found"));

        String username = generateUsername(request.getEmployeeName());

        String temporaryPassword = generatePassword();

        User user = new User();

        user.setEmployeeName(request.getEmployeeName());
        user.setEmail(request.getEmail());
        user.setUsername(username);

        // Store encrypted password, never plain text
        user.setPassword(passwordEncoder.encode(temporaryPassword));

        user.setEmployeeCode("EMP" + System.currentTimeMillis());
        user.setTeam(team);
        user.setDesignation(designation);

        User savedUser = userRepository.save(user);

        // TODO: Send username and temporaryPassword to employee email
        // using an email service. Never return the password in the User DTO.

        return convertToDTO(savedUser);
    }

    public List<UserResponseDTO> getAllUsers() {

        return userRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    private String generateUsername(String employeeName) {

        String base = employeeName.toLowerCase()
                .trim()
                .replaceAll("\\s+", ".");

        String username = base;
        int count = 1;

        while (userRepository.existsByUsername(username)) {
            username = base + count;
            count++;
        }

        return username;
    }

    private String generatePassword() {

        String characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";

        StringBuilder password = new StringBuilder();

        for (int i = 0; i < 12; i++) {
            password.append(
                    characters.charAt(random.nextInt(characters.length()))
            );
        }

        return password.toString();
    }

    private UserResponseDTO convertToDTO(User user) {

        return new UserResponseDTO(
                user.getId(),
                user.getEmployeeCode(),
                user.getEmployeeName(),
                user.getUsername(),
                user.getEmail(),
                user.getTeam() != null
                        ? user.getTeam().getTeamName() : "",
                user.getDesignation() != null
                        ? user.getDesignation().getDesignationName() : "",
                user.getStatus()
        );
    }
}