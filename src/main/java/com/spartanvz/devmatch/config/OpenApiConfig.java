package com.spartanvz.devmatch.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {

        return new OpenAPI()
                .info(
                        new Info()
                                .title("SpartanvzDevMatch API")
                                .version("1.0")
                                .description("API para gerenciamento de vagas de desenvolvimento")
                                .contact(
                                        new Contact()
                                                .name("Spartanvz")
                                                .email("mspatricio.spartano@email.com")
                                )
                );
    }
}