package com.negretenico.heroforge.api.config.security;

import com.common.functionico.evaluation.Result;
import com.common.functionico.risky.Try;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Component
@Slf4j
public class FirebaseAuthenticationFilter extends OncePerRequestFilter {

    private final FirebaseAuth firebaseAuth;

    public FirebaseAuthenticationFilter(FirebaseAuth firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws IOException, ServletException {
        String header = request.getHeader("Authorization");
        if (Objects.isNull(header) || !header.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }
        String idToken = header.substring(7);
        Try<FirebaseToken> attempt =
                Try.of(() -> firebaseAuth.verifyIdToken(idToken));
        attempt.onSuccess((token) -> {
            String uid = token.getUid();
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                    uid, null, List.of() // or roles
            );
            SecurityContextHolder.getContext().setAuthentication(auth);
        }).onFailure((exception) -> {
            Try.of(() -> {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                        "Invalid Firebase token");
                return Result.success("SENT ERROR MSG");
            });
        });
        if (attempt.isFailure()) {
            return;
        }
        filterChain.doFilter(request, response);
    }
}
