
package com.prohire.backend.service;

import com.prohire.backend.entity.Team;
import java.util.List;

public interface TeamService {

    Team addTeam(Team team);

    List<Team> getAllTeams();
}
