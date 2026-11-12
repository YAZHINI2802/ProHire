
package com.prohire.backend.service.impl;

import com.prohire.backend.entity.Designation;
import com.prohire.backend.repository.DesignationRepository;
import com.prohire.backend.service.DesignationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignationServiceImpl implements DesignationService {

    private final DesignationRepository designationRepository;

    public DesignationServiceImpl(DesignationRepository designationRepository) {
        this.designationRepository = designationRepository;
    }

    @Override
    public Designation addDesignation(Designation designation) {

        if (designationRepository.existsByDesignationNameIgnoreCase(
                designation.getDesignationName())) {
            throw new RuntimeException("Designation already exists");
        }

        return designationRepository.save(designation);
    }

    @Override
    public List<Designation> getAllDesignations() {
        return designationRepository.findAll();
    }
}
