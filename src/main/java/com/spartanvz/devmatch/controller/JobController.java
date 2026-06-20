package com.spartanvz.devmatch.controller;

import com.spartanvz.devmatch.dto.CreateJobRequest;
import com.spartanvz.devmatch.dto.JobResponse;
import com.spartanvz.devmatch.dto.UpdateJobRequest;
import com.spartanvz.devmatch.enums.JobStatus;
import com.spartanvz.devmatch.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;

import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService service;

    @Operation(summary = "Criar uma nova vaga")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public JobResponse create(
            @RequestBody @Valid CreateJobRequest request
    ) {
        return service.create(request);
    }

    @Operation(summary = "Listar todas as vagas")
    @GetMapping
    public Page<JobResponse> findAll(
            @Parameter(description = "Paginação")
            Pageable pageable
    ) {
        return (Page<JobResponse>) service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public JobResponse findById(@PathVariable UUID id){
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public JobResponse update(
            @PathVariable UUID id,
            @RequestBody UpdateJobRequest request

    ){
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(
            @PathVariable UUID id
    ){
        service.delete(id);
    }

    @GetMapping("/status/{status}")
    public Page<JobResponse> findByStatus(
            @PathVariable JobStatus status,
            Pageable pageable
    ) {
        return service.findByStatus(status, pageable);
    }

    @GetMapping("/location")
    public Page<JobResponse> findByLocation(
            @RequestParam String location,
            Pageable pageable
    ) {
        return service.findByLocation(location, pageable);
    }

    @GetMapping("/title")
    public Page<JobResponse> findByTitle(
            @RequestParam String title,
            Pageable pageable
    ) {
        return service.findByTitle(title, pageable);
    }

    @PatchMapping("/{id}/close")
    public JobResponse closedJob(@PathVariable UUID id){
        return service.closedJob(id);
    }

    @PatchMapping("/{id}/pause")
    public JobResponse pauseJob(
            @PathVariable UUID id
    ) {
        return service.pauseJob(id);
    }

    @PatchMapping("/{id}/open")
    public JobResponse openJob(
            @PathVariable UUID id
    ) {
        return service.openJob(id);
    }
}

