package olcp.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import olcp.entity.coursehot1;

import java.util.List;
public interface coursehot1Service {
    /**
     * 根据课程尾号查询
     *
     * @param courseid2
     * @return
     */
    coursehot1 findBycourseid2(int courseid2);

    List<coursehot1> findAll();
    Page<coursehot1> findAll(Pageable pageable);

    /**
     * 更新
     *
     * @param course
     * @return
     */
    void update(coursehot1 course);

    /**
     * 创建
     *
     * @param course
     * @return
     */
    int create(coursehot1 course);

    /**
     * 根据课程尾号删除
     *
     * @param courseid2
     * @return
     */
    void delBycourseid2(int courseid2);
    void save(coursehot1 course);
}
