package com.negretenico.heroforge.api.config.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/public")
public class DummyPublic {
    @GetMapping("/dummy")
    public ResponseEntity<String> ok() {
        return ResponseEntity.ok("Hello");
    }
}
