package com.wat.kurek.buildingCompany.controller;

import com.wat.kurek.buildingCompany.dao.model.Register;
import com.wat.kurek.buildingCompany.service.RegisterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    @GetMapping("/user/registers")
    public ResponseEntity<Iterable<Register>> getAllRegisters() {
        Iterable<Register> registerIterable = registerService.findAll();
        return ResponseEntity.ok().body(registerIterable);
    }

    @GetMapping("/user/registers/{registerId}")
    public ResponseEntity<Register> getRegisterById(@PathVariable(value = "registerId") Long registerId) {
        Optional<Register> registerOptional = registerService.findById(registerId);
        if (registerOptional.isPresent()) {
            return new ResponseEntity<>(registerOptional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/user/registers")
    public ResponseEntity<Register> createRegister(@Valid @RequestBody Register register) {
        return new ResponseEntity<>(registerService.save(register), HttpStatus.OK);
    }


    @PutMapping("/admin/registers/{registerId}")
    public ResponseEntity<Register> updateRegister(@PathVariable(value = "registerId") Long registerId,
                                                   @Valid @RequestBody Register register) {
        Optional<Register> optionalRegister = registerService.findById(registerId);
        if (optionalRegister != null) {
            optionalRegister.get().setId(register.getId());
            optionalRegister.get().setProject(register.getProject());
            optionalRegister.get().setEmployee(register.getEmployee());
            optionalRegister.get().setDate(register.getDate());
            optionalRegister.get().setWorkTime(register.getWorkTime());
            optionalRegister.get().setAbsence(register.getAbsence());
            return new ResponseEntity<>(registerService.save(optionalRegister.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/registers/{registerId}")
    public ResponseEntity<Register> deleteRegister(@PathVariable(value = "registerId") Long registerId) {
        Optional<Register> registerOptional = registerService.findById(registerId);
        if (registerOptional.isPresent()) {
            registerService.delete(registerOptional.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
