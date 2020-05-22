package com.wat.kurek.buildingCompany.controller;

import com.wat.kurek.buildingCompany.dao.model.Employee;
import com.wat.kurek.buildingCompany.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/user/employees")
    public ResponseEntity<Iterable<Employee>> getAllEmployees() {
        Iterable<Employee> employeesList = employeeService.findAll();
        return ResponseEntity.ok().body(employeesList);
    }


    @GetMapping("/user/employees/{employeeId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable(value = "employeeId") Long employeeId) {
        Optional<Employee> optionalEmployee = employeeService.findById(employeeId);
        if (optionalEmployee.isPresent()) {
            return new ResponseEntity<>(optionalEmployee.get(), HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/user/employees/teamId/{teamId}")
    public ResponseEntity<Iterable<Employee>> getEmployeesByTeamId(@PathVariable(value = "teamId") Long teamId) {
        Iterable<Employee> projectsById = employeeService.findAllByTeamId(teamId);
        return ResponseEntity.ok().body(projectsById);
    }

    @PostMapping("/admin/employees")
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.save(employee), HttpStatus.OK);
    }


    @PutMapping("/admin/employees/{employeeId}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "employeeId") Long employeeId,
                                                   @Valid @RequestBody Employee employee) {
        Optional<Employee> employeeOptional = employeeService.findById(employeeId);
        if (employeeOptional.isPresent()) {
            employeeOptional.get().setFirstName(employee.getFirstName());
            employeeOptional.get().setLastName(employee.getLastName());
            employeeOptional.get().setEmailId(employee.getEmailId());
            employeeOptional.get().setAddress(employee.getAddress());
            employeeOptional.get().setTeam(employee.getTeam());
            return new ResponseEntity<>(employeeService.save(employeeOptional.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/employees/{employeeId}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable(value = "employeeId") Long employeeId) {
        Optional<Employee> optionalEmployee = employeeService.findById(employeeId);
        if (optionalEmployee.isPresent()) {
            employeeService.delete(optionalEmployee.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
