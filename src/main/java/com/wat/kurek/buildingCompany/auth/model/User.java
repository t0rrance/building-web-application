package com.wat.kurek.buildingCompany.auth.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Transient
    private String token;

    public User() {
    }

    public User(long id, String name, String username) {
        this.id = id;
        this.name = name;
        this.username = username;
    }

}
