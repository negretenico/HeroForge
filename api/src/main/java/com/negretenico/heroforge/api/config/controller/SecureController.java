package com.negretenico.heroforge.api.config.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = "/api/v1/secure")
public class SecureController {
    @GetMapping("/dummy")
    public ResponseEntity<String> test(Principal principal) {
        return ResponseEntity.ok("hello " + principal.getName());
    }
}
