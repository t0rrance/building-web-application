package com.wat.kurek.buildingCompany.service;

import com.wat.kurek.buildingCompany.dao.model.Project;
import com.wat.kurek.buildingCompany.dao.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Iterable<Project> findAll() {
        return projectRepository.findAll();
    }

    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    public Iterable<Project> findAllByUserId(Long userId) {
        return projectRepository.findAllByUserId(userId);
    }

    public Project save(Project project) {
        return projectRepository.save(project);
    }

    public void deleteById(Long id) {
        projectRepository.deleteById(id);
    }

    public void delete(Project project) {

        projectRepository.delete(project);

    }
}
