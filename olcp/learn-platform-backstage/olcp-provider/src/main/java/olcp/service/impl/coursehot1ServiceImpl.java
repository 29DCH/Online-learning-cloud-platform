package olcp.service.impl;

import olcp.dao.coursehot1Dao;
import olcp.entity.coursehot1;
import olcp.service.coursehot1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class coursehot1ServiceImpl implements coursehot1Service {

    @Autowired
    private coursehot1Dao coursedao;

    @Override
    public coursehot1 findBycourseid2(int courseid2) {
        return coursedao.getOne(courseid2);
    }

    @Override
    public List<coursehot1> findAll() { return coursedao.findAll(); }

    @Override
    public Page<coursehot1> findAll(Pageable pageable) {
        return coursedao.findAll(pageable);
    }

    @Override
    public void update(coursehot1 course) {
        coursedao.save(course);
    }

    @Override
    public int create(coursehot1 course) {
        return coursedao.save(course).getCourseid2();
    }

    @Override
    public void delBycourseid2(int courseid2) {
        coursedao.delete(courseid2);
    }

    @Override
    public void save(coursehot1 course) {
        coursedao.save(course);
    }
}
