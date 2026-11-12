
package com.prohire.backend.service;

import com.prohire.backend.dto.UserResponse;
import com.prohire.backend.entity.User;

import java.util.List;

public interface UserService {

    UserResponse addUser(User user);

    List<UserResponse> getAllUsers();
}
