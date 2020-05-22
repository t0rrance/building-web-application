package com.wat.kurek.buildingCompany.service;

import com.wat.kurek.buildingCompany.dao.model.Register;
import com.wat.kurek.buildingCompany.dao.repository.RegisterRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisterService {

    private final RegisterRepository registerRepository;

    public RegisterService(RegisterRepository registerRepository) {
        this.registerRepository = registerRepository;
    }

    public Iterable<Register> findAll() {
        return registerRepository.findAll();
    }

    public Optional<Register> findById(Long id) {
        return registerRepository.findById(id);
    }

    public Register save(Register register) {
        return registerRepository.save(register);
    }

    public void deleteById(Long id) {
        registerRepository.deleteById(id);
    }

    public void delete(Register register) {

        registerRepository.delete(register);

    }
}
