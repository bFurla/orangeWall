package ben.strava.controller;

import com.google.api.client.auth.openidconnect.IdToken.Payload;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {


    @GetMapping(value = "/me")
    public ResponseEntity<String> me(@RequestAttribute("principal") Payload payload) {
        return ResponseEntity.ok("Hello " + payload.get("name") + " !");
    }

    @GetMapping(value = "/me2")
    public ResponseEntity<Object> me2(@RequestAttribute("principal") Payload payload) {
        return ResponseEntity.ok(payload);
    }

}
