package olcp.service.impl;

import olcp.dao.courseclassificationDao;
import olcp.entity.courseclassification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import olcp.service.courseclassificationService;

import java.util.List;


@Service
public class courseclassificationServiceImpl implements courseclassificationService {
    @Autowired
    private courseclassificationDao courseclassificationdao;

    @Override
    public Page<courseclassification> findBydirectionAnddifficulty(String direction,String difficulty,Pageable pageable) {
        return courseclassificationdao.findBydirectionAnddifficulty(direction,difficulty,pageable);
    }

    @Override
    public Page<courseclassification> findBydirection(String direction,Pageable pageable) {
        return courseclassificationdao.findBydirection(direction,pageable);
    }

    @Override
    public void update(courseclassification type) {
        courseclassificationdao.save(type);
    }

    @Override
    public String create(courseclassification type) {
        return courseclassificationdao.save(type).getDirection();
    }

    @Override
    public void delBydirection(String direction) {
        courseclassificationdao.delete(direction);
    }

    @Override
    public void save(courseclassification type) {
        courseclassificationdao.save(type);
    }
}
