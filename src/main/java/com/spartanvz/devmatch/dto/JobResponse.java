package com.spartanvz.devmatch.dto;

import com.spartanvz.devmatch.enums.JobStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public record JobResponse(

        UUID id,
        String title,
        String description,
        String requirements,
        String location,
        BigDecimal salary,
        JobStatus status,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
