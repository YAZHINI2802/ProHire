
package com.prohire.backend.service;

import com.prohire.backend.entity.Designation;
import java.util.List;

public interface DesignationService {

    Designation addDesignation(Designation designation);

    List<Designation> getAllDesignations();
}
