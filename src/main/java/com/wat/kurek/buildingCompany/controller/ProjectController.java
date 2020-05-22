package com.wat.kurek.buildingCompany.controller;

import com.wat.kurek.buildingCompany.dao.model.Project;
import com.wat.kurek.buildingCompany.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/user/projects")
    public ResponseEntity<Iterable<Project>> getAllProjects() {
        Iterable<Project> projectList = projectService.findAll();
        return ResponseEntity.ok().body(projectList);
    }

    @GetMapping("/user/projects/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable(value = "projectId") Long projectId) {
        Optional<Project> optionalProject = projectService.findById(projectId);
        if (optionalProject.isPresent()) {
            return new ResponseEntity<>(optionalProject.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/user/projects/userId/{userId}")
    public ResponseEntity<Iterable<Project>> getProjectsByUserId(@PathVariable(value = "userId") Long userId) {
        Iterable<Project> projectsById = projectService.findAllByUserId(userId);
        return ResponseEntity.ok().body(projectsById);
    }

    @PostMapping("/admin/projects")
    public ResponseEntity<Project> createProject(@Valid @RequestBody Project project) {
        return new ResponseEntity<>(projectService.save(project), HttpStatus.OK);
    }

    @PutMapping("/admin/projects/{projectId}")
    public ResponseEntity<Project> updateProject(@PathVariable(value = "projectId") Long projectId,
                                                 @Valid @RequestBody Project project) {
        Optional<Project> projectOptional = projectService.findById(projectId);
        if (projectOptional != null) {
            projectOptional.get().setId(project.getId());
            projectOptional.get().setProjectName(project.getProjectName());
            projectOptional.get().setProjectStatus(project.getProjectStatus());
            projectOptional.get().setUser(project.getUser());
            projectOptional.get().setTeam(project.getTeam());
            return new ResponseEntity<>(projectService.save(projectOptional.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/projects/{projectId}")
    public ResponseEntity<Project> deleteProject(@PathVariable(value = "projectId") Long projectId) {
        Optional<Project> optionalProject = projectService.findById(projectId);
        if (optionalProject.isPresent()) {
            projectService.delete(optionalProject.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
