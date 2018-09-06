//热门课程详细页面
package olcp.dao;

import olcp.entity.coursehot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface coursehotDao extends JpaRepository<coursehot, Integer> {

    coursehot findBycoursehotid(int coursehotid);
    List<coursehot> findAll();
    //查询对应尾号的课程
    @Query(value = "select * from coursehot where coursehot.coursetailnum = ?1",nativeQuery = true)
    coursehot findBycoursetailnum(@Param("coursetailnum") String coursetailnum);
}
