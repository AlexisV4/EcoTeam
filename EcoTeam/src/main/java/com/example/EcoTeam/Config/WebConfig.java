package com.example.EcoTeam.Config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Permite solicitudes desde el frontend en el puerto 4200
        registry.addMapping("/api/**").allowedOrigins("http://localhost:4200");
    }

}
