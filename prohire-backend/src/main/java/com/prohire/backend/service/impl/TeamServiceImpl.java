
package com.prohire.backend.service.impl;

import com.prohire.backend.entity.Team;
import com.prohire.backend.repository.TeamRepository;
import com.prohire.backend.service.TeamService;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;

    // Constructor Injection
    public TeamServiceImpl(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    // Add new team
    @Override
    public Team addTeam(Team team) {

        if (teamRepository.existsByTeamNameIgnoreCase(team.getTeamName())) {
            throw new RuntimeException("Team already exists");
        }

        return teamRepository.save(team);
    }

    // Get all teams
    @Override
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }
}
