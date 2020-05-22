package com.wat.kurek.buildingCompany.dao.model;

import com.wat.kurek.buildingCompany.auth.model.User;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String projectName;
    private String projectStatus;

    @ManyToOne
    @NotNull
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Team team;

    @ManyToOne
    @NotNull
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User user;

}
