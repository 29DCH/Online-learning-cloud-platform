package olcp.service.impl;

import olcp.dao.coursenew1Dao;
import olcp.entity.coursenew1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import olcp.service.coursenew1Service;

import java.util.List;


@Service
public class coursenew1ServiceImpl implements coursenew1Service {

    @Autowired
    private coursenew1Dao coursedao;

    @Override
    public coursenew1 findBycourseid1(int courseid1) {
        return coursedao.getOne(courseid1);
    }

    @Override
    public List<coursenew1> findAll() { return coursedao.findAll(); }

    @Override
    public Page<coursenew1> findAll(Pageable pageable) {
        return coursedao.findAll(pageable);
    }

    @Override
    public void update(coursenew1 course) {
        coursedao.save(course);
    }

    @Override
    public int create(coursenew1 course) {
        return coursedao.save(course).getCourseid1();
    }

    @Override
    public void delBycourseid1(int courseid1) {
        coursedao.delete(courseid1);
    }

    @Override
    public void save(coursenew1 course) {
        coursedao.save(course);
    }
}
