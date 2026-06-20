package com.spartanvz.devmatch.entity;

import com.spartanvz.devmatch.enums.JobStatus;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String requirements;

    @Column(nullable = false)
    private String location;

    private BigDecimal salary;

    @Enumerated(EnumType.STRING)
    private JobStatus status;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
