package olcp.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import olcp.entity.courseclassification;

import java.util.List;

public interface courseclassificationService {

    Page<courseclassification> findBydirectionAnddifficulty(String direction, String difficulty, Pageable pageable);
    Page<courseclassification> findBydirection(String direction, Pageable pageable);
    /**
     * 更新
     *
     * @param type
     * @return
     */
    void update(courseclassification type);

    /**
     * 创建
     *
     * @param type
     * @return
     */
    String create(courseclassification type);

    /**
     * 根据课程方向删除
     *
     * @param direction
     * @return
     */
    void delBydirection(String direction);

    //保存分类
    void save(courseclassification type);
}
