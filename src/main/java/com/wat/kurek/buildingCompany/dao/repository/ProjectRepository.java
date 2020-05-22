package com.wat.kurek.buildingCompany.dao.repository;

import com.wat.kurek.buildingCompany.dao.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    Iterable<Project> findAllByUserId(Long userId);
}
