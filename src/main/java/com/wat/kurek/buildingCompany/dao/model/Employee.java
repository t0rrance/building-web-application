package com.wat.kurek.buildingCompany.dao.model;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String address;
    @ManyToOne
    @NotNull
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Team team;

}

