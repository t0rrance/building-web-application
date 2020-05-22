package com.wat.kurek.buildingCompany.controller;

import com.wat.kurek.buildingCompany.dao.model.Team;
import com.wat.kurek.buildingCompany.service.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/user/teams") //???
    public ResponseEntity<Iterable<Team>> getAllTeams() {
        Iterable<Team> teamList = teamService.findAll();
        return ResponseEntity.ok().body(teamList);
    }

    @GetMapping("/user/teams/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable(value = "id") Long id) {
        Optional<Team> optionalTeam = teamService.findById(id);
        if (optionalTeam.isPresent()) {
            return new ResponseEntity<>(optionalTeam.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/admin/teams")
    public ResponseEntity<Team> createTeam(@Valid @RequestBody Team team) {
        return new ResponseEntity<>(teamService.save(team), HttpStatus.OK);
    }

    @PutMapping("/admin/teams/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable(value = "id") Long teamId,
                                           @Valid @RequestBody Team teamUpdate) {
        Optional<Team> teamOptional = teamService.findById(teamId);
        if (teamOptional != null) {
            teamOptional.get().setId(teamUpdate.getId());
            teamOptional.get().setTeamName(teamUpdate.getTeamName());
            teamOptional.get().setDescription(teamUpdate.getDescription());
            return new ResponseEntity<>(teamService.save(teamOptional.get()), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/admin/teams/{id}")
    public ResponseEntity<Team> deleteTeam(@PathVariable(value = "id") Long id) {
        Optional<Team> optionalTeam = teamService.findById(id);
        if (optionalTeam.isPresent()) {
            teamService.delete(optionalTeam.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
