package com.spartanvz.devmatch.repository;

import com.spartanvz.devmatch.entity.Job;
import com.spartanvz.devmatch.enums.JobStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface JobRepository extends JpaRepository<Job, UUID> {

    Page<Job> findByStatus(JobStatus status, Pageable pageable);

    Page<Job> findByLocationContainingIgnoreCase(
            String location,
            Pageable pageable
    );

    Page<Job> findByTitleContainingIgnoreCase(
            String title,
            Pageable pageable
    );
}