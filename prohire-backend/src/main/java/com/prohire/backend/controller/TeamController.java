
package com.prohire.backend.controller;

import com.prohire.backend.entity.Team;
import com.prohire.backend.service.TeamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping
    public Team addTeam(@RequestBody Team team) {
        return teamService.addTeam(team);
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }
}
