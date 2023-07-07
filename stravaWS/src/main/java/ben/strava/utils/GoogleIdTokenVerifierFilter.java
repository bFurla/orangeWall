package ben.strava.utils;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.security.GeneralSecurityException;

@AllArgsConstructor
public class GoogleIdTokenVerifierFilter implements Filter {

    private final GoogleIdTokenVerifier googleIdTokenVerifier;
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        try {
            final String token = ((HttpServletRequest) servletRequest).getHeader("Authorization").substring(7);
            final GoogleIdToken googleIdToken = googleIdTokenVerifier.verify(token);
            servletRequest.setAttribute("principal", googleIdToken.getPayload());
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (GeneralSecurityException e) {
            ((HttpServletResponse) servletResponse).sendError(HttpServletResponse.SC_UNAUTHORIZED, "The token is not valid.");
        }

    }
}
