package com.spartanvz.devmatch.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

public record UpdateJobRequest(
        @NotBlank(message = "Título é obrigatório")
        String title,

        @NotBlank(message = "Descrição é obrigatória")
        String description,

        @NotBlank(message = "Requesitos são obrigatórios")
        String requirements,

        @NotBlank(message = "Localização é obrigatória")
        String location,

        @PositiveOrZero(message = "Salário deve ser maior ou igual a zero")
        BigDecimal salary
) {
}
