package olcp.service.impl;


import olcp.dao.coursehotDao;
import olcp.entity.coursehot;
import olcp.service.coursehotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class coursehotServiceImpl implements coursehotService {

    @Autowired
    private coursehotDao coursedao;

    @Override
    public coursehot findBycoursetailnum(String coursetailnum) {
        return coursedao.findBycoursetailnum(coursetailnum);
    }

    @Override
    public coursehot findBycoursehotid(int coursehotid) {
        return coursedao.getOne(coursehotid);
    }

    @Override
    public List<coursehot> findAll() { return coursedao.findAll(); }

    @Override
    public void update(coursehot course) {
        coursedao.save(course);
    }

    @Override
    public int create(coursehot course) {
        return coursedao.save(course).getCoursehotid();
    }

    @Override
    public void delBycoursehotid(int coursehotid) {
        coursedao.delete(coursehotid);
    }

    @Override
    public void save(coursehot course) {
        coursedao.save(course);
    }
}
