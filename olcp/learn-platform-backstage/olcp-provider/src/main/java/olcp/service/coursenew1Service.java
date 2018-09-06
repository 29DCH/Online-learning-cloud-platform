package olcp.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import olcp.entity.coursenew1;

import java.util.List;

public interface coursenew1Service {
    /**
     * 根据课程尾号查询
     *
     * @param courseid1
     * @return
     */
    coursenew1 findBycourseid1(int courseid1);

    List<coursenew1> findAll();
    Page<coursenew1> findAll(Pageable pageable);

    /**
     * 更新
     *
     * @param course
     * @return
     */
    void update(coursenew1 course);

    /**
     * 创建
     *
     * @param course
     * @return
     */
    int create(coursenew1 course);

    /**
     * 根据课程尾号删除
     *
     * @param courseid1
     * @return
     */
    void delBycourseid1(int courseid1);
    void save(coursenew1 course);
}
