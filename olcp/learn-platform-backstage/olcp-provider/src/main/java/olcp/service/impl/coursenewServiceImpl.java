package olcp.service.impl;

import olcp.dao.coursenewDao;
import olcp.entity.coursenew;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import olcp.service.coursenewService;

import java.util.List;


@Service
public class coursenewServiceImpl implements coursenewService {
    @Autowired
    private coursenewDao coursedao;

    @Override
    public coursenew findBycoursenewid(int coursenewid) {
        return coursedao.getOne(coursenewid);
    }

    @Override
    public coursenew findBycoursetailnum(String coursetailnum) {
        return coursedao.findBycoursetailnum(coursetailnum);
    }

    @Override
    public List<coursenew> findAll() { return coursedao.findAll(); }

    @Override
    public void update(coursenew course) {
        coursedao.save(course);
    }

    @Override
    public int create(coursenew course) {
        return coursedao.save(course).getCoursenewid();
    }

    @Override
    public void delBycoursenewid(int coursenewid) {
        coursedao.delete(coursenewid);
    }

    @Override
    public void save(coursenew course) {
        coursedao.save(course);
    }
}
