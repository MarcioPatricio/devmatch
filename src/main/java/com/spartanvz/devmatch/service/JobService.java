package com.spartanvz.devmatch.service;

import com.spartanvz.devmatch.dto.CreateJobRequest;
import com.spartanvz.devmatch.dto.JobResponse;
import com.spartanvz.devmatch.dto.UpdateJobRequest;
import com.spartanvz.devmatch.entity.Job;
import com.spartanvz.devmatch.enums.JobStatus;
import com.spartanvz.devmatch.exception.JobNotFoundException;
import com.spartanvz.devmatch.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

import java.util.UUID;



@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public JobResponse create(CreateJobRequest request) {

        Job job = Job.builder()
                .title(request.title())
                .description(request.description())
                .requirements(request.requirements())
                .location(request.location())
                .salary(request.salary())
                .status(JobStatus.OPEN)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        Job saved = jobRepository.save(job);

        return new JobResponse(
                saved.getId(),
                saved.getTitle(),
                saved.getDescription(),
                saved.getRequirements(),
                saved.getLocation(),
                saved.getSalary(),
                saved.getStatus(),
                saved.getCreatedAt(),
                saved.getUpdatedAt()
        );
    }

    public Page<JobResponse> findAll(Pageable pageable) {

        return jobRepository.findAll(pageable)
                .map(job -> new JobResponse(
                        job.getId(),
                        job.getTitle(),
                        job.getDescription(),
                        job.getRequirements(),
                        job.getLocation(),
                        job.getSalary(),
                        job.getStatus(),
                        job.getCreatedAt(),
                        job.getUpdatedAt()
                ));
    }

    public JobResponse findById(UUID id) {

        Job  job = jobRepository.findById(id).orElseThrow(() -> new JobNotFoundException("Vaga não encontrada!"));

        return new JobResponse(
                job.getId(),
                job.getTitle(),
                job.getDescription(),
                job.getRequirements(),
                job.getLocation(),
                job.getSalary(),
                job.getStatus(),
                job.getCreatedAt(),
                job.getUpdatedAt()
        );
    }

    public JobResponse update(UUID id, UpdateJobRequest request) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException("Vaga não encontrada"));
        job.setTitle(request.title());
        job.setDescription(request.description());
        job.setRequirements(request.requirements());
        job.setLocation(request.location());
        job.setSalary(request.salary());
        job.setUpdatedAt(LocalDateTime.now());

        Job updated = jobRepository.save(job);

        return new JobResponse(
                updated.getId(),
                updated.getTitle(),
                updated.getDescription(),
                updated.getRequirements(),
                updated.getLocation(),
                updated.getSalary(),
                updated.getStatus(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        );
    }

    public void delete(UUID id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(()->
                        new JobNotFoundException("Vaga não encontrada"));

        jobRepository.delete(job);
    }

    public Page<JobResponse> findByStatus(
            JobStatus status,
            Pageable pageable
    ) {

        return jobRepository.findByStatus(status, pageable)
                .map(job -> new JobResponse(
                        job.getId(),
                        job.getTitle(),
                        job.getDescription(),
                        job.getRequirements(),
                        job.getLocation(),
                        job.getSalary(),
                        job.getStatus(),
                        job.getCreatedAt(),
                        job.getUpdatedAt()
                ));
    }

    public Page<JobResponse> findByLocation(
            String location,
            Pageable pageable
    ) {

        return jobRepository.findByLocationContainingIgnoreCase(
                        location,
                        pageable
                )
                .map(job -> new JobResponse(
                        job.getId(),
                        job.getTitle(),
                        job.getDescription(),
                        job.getRequirements(),
                        job.getLocation(),
                        job.getSalary(),
                        job.getStatus(),
                        job.getCreatedAt(),
                        job.getUpdatedAt()
                ));
    }

    public Page<JobResponse> findByTitle(
            String title,
            Pageable pageable
    ) {

        return jobRepository.findByTitleContainingIgnoreCase(
                        title,
                        pageable
                )
                .map(job -> new JobResponse(
                        job.getId(),
                        job.getTitle(),
                        job.getDescription(),
                        job.getRequirements(),
                        job.getLocation(),
                        job.getSalary(),
                        job.getStatus(),
                        job.getCreatedAt(),
                        job.getUpdatedAt()
                ));
    }

    public JobResponse closedJob(UUID id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException("Vaga não encontrada"));

        job.setStatus(JobStatus.CLOSED);
        job.setUpdatedAt(LocalDateTime.now());

        Job updated = jobRepository.save(job);

        return new JobResponse(
                updated.getId(),
                updated.getTitle(),
                updated.getDescription(),
                updated.getRequirements(),
                updated.getLocation(),
                updated.getSalary(),
                updated.getStatus(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        );
    }

    public JobResponse pauseJob(UUID id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException("Vaga não encontrada"));

        job.setStatus(JobStatus.PAUSED);
        job.setUpdatedAt(LocalDateTime.now());

        Job updated = jobRepository.save(job);

        return new JobResponse(
                updated.getId(),
                updated.getTitle(),
                updated.getDescription(),
                updated.getRequirements(),
                updated.getLocation(),
                updated.getSalary(),
                updated.getStatus(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        );
    }

    public JobResponse openJob(UUID id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException("Vaga não encontrada"));

        job.setStatus(JobStatus.OPEN);
        job.setUpdatedAt(LocalDateTime.now());

        Job updated = jobRepository.save(job);

        return new JobResponse(
                updated.getId(),
                updated.getTitle(),
                updated.getDescription(),
                updated.getRequirements(),
                updated.getLocation(),
                updated.getSalary(),
                updated.getStatus(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        );
    }


}
