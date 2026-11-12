
package com.prohire.backend.repository;

import com.prohire.backend.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {

    boolean existsByTeamNameIgnoreCase(String teamName);
}
