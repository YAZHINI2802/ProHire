
package com.prohire.backend.repository;

import com.prohire.backend.entity.Designation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DesignationRepository extends JpaRepository<Designation, Long> {

    boolean existsByDesignationNameIgnoreCase(String designationName);
}
