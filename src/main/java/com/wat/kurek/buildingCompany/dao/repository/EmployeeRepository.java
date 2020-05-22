package com.wat.kurek.buildingCompany.dao.repository;

import com.wat.kurek.buildingCompany.dao.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Iterable<Employee> findAllByTeamId(Long userId);
}



