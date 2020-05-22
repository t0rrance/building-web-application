package com.wat.kurek.buildingCompany.dao.repository;

import com.wat.kurek.buildingCompany.dao.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {
}
