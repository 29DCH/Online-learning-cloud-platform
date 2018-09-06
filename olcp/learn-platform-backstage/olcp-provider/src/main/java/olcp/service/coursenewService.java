package olcp.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import olcp.entity.coursenew;

import java.util.List;
public interface coursenewService {
    /**
     * 根据课程尾号查询
     *
     * @param coursetailnum
     * @return
     */
    coursenew findBycoursetailnum(String coursetailnum);

    coursenew findBycoursenewid(int coursenewid);

    List<coursenew> findAll();

    /**
     * 更新
     *
     * @param course
     * @return
     */
    void update(coursenew course);

    /**
     * 创建
     *
     * @param course
     * @return
     */
     int create(coursenew course);

    /**
     * 根据课程尾号删除
     *
     * @param coursenewid
     * @return
     */
    void delBycoursenewid(int coursenewid);
    void save(coursenew course);
}
