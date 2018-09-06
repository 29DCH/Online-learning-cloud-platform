package olcp.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import olcp.entity.coursehot;

import java.util.List;

public interface coursehotService {
    /**
     * 根据课程尾号查询
     *
     * @param coursetailnum
     * @return
     */
    coursehot findBycoursetailnum(String coursetailnum);

    coursehot findBycoursehotid(int coursehotid);

    List<coursehot> findAll();


    /**
     * 更新
     *
     * @param course
     * @return
     */
    void update(coursehot course);

    /**
     * 创建
     *
     * @param course
     * @return
     */
    int create(coursehot course);

    /**
     * 根据课程尾号删除
     *
     * @param coursehotid
     * @return
     */
    void delBycoursehotid(int coursehotid);
    void save(coursehot course);
}
