
package com.prohire.backend.controller;

import com.prohire.backend.dto.UserResponse;
import com.prohire.backend.entity.User;
import com.prohire.backend.service.UserService;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    // Constructor Injection
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Add new user
    @PostMapping
    public UserResponse addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    // Get all users
    @GetMapping
    public List<UserResponse> getAllUsers() {
        return userService.getAllUsers();
    }
}
