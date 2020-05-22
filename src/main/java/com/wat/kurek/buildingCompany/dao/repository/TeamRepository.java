package com.wat.kurek.buildingCompany.dao.repository;

import com.wat.kurek.buildingCompany.dao.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {
}
