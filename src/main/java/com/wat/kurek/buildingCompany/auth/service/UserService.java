package com.wat.kurek.buildingCompany.auth.service;

import com.wat.kurek.buildingCompany.auth.model.User;
import java.util.List;

public interface UserService {

    User saveUser(User user);

    User findByUsername(String username);

    List<User> findAllUsers();

}
