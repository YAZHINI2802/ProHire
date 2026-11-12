
package com.prohire.backend.controller;

import com.prohire.backend.entity.Designation;
import com.prohire.backend.service.DesignationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/designations")
public class DesignationController {

    private final DesignationService designationService;

    public DesignationController(DesignationService designationService) {
        this.designationService = designationService;
    }

    @PostMapping
    public Designation addDesignation(@RequestBody Designation designation) {
        return designationService.addDesignation(designation);
    }

    @GetMapping
    public List<Designation> getAllDesignations() {
        return designationService.getAllDesignations();
    }
}
