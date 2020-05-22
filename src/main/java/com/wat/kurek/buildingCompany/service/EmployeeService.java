package com.wat.kurek.buildingCompany.service;

import com.wat.kurek.buildingCompany.dao.model.Employee;
import com.wat.kurek.buildingCompany.dao.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Iterable<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> findById(Long id) {

        return employeeRepository.findById(id);

    }

    public Iterable<Employee> findAllByTeamId(Long userId) {
        return employeeRepository.findAllByTeamId(userId);
    }

    public Employee save(Employee employee) {

        return employeeRepository.save(employee);

    }

    public void deleteById(Long id) {
        employeeRepository.deleteById(id);
    }

    public void delete(Employee employee) {

        employeeRepository.delete(employee);

    }


}
