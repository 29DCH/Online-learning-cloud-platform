package olcp.dao;

import olcp.entity.courseclassification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface courseclassificationDao extends PagingAndSortingRepository<courseclassification, String> {

    //查询对应方向的全部课程
    @Query("select c.coursename,c.difficulty,c.coursetailnum,c.people,c.coursesummary,c.coursetype,c.picturepath from courseclassification c where c.direction = ?1")
    Page<courseclassification> findBydirection(@Param("direction") String direction, Pageable pageable);

    //查询对应方向对应难度的全部课程
    @Query("select c.coursename,c.difficulty,c.coursetailnum,c.people,c.coursesummary,c.coursetype,c.picturepath from courseclassification c where c.direction = ?1 and c.difficulty= ?2")
    Page<courseclassification> findBydirectionAnddifficulty(@Param("direction") String direction, @Param
            ("difficulty") String difficulty, Pageable pageable);

}
