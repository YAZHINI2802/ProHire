package com.prohire.backend.service;

import com.prohire.backend.dto.LoginRequest;
import com.prohire.backend.dto.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);

}