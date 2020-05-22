package com.wat.kurek.buildingCompany.service;

import com.wat.kurek.buildingCompany.dao.model.Team;
import com.wat.kurek.buildingCompany.dao.repository.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Iterable<Team> findAll() {
        return this.teamRepository.findAll();
    }

    public Optional<Team> findById(Long id) {
        return teamRepository.findById(id);
    }

    public Team save(Team team)
    {
        return teamRepository.save(team);
    }

    public void deleteById(Long id) {
         teamRepository.deleteById(id);
    }

    public void delete(Team team) {
        teamRepository.delete(team);
    }

}
