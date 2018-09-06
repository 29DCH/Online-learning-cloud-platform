//最新课程详细页面
package olcp.dao;

import olcp.entity.coursenew;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface coursenewDao extends JpaRepository<coursenew, Integer> {
    List<coursenew> findAll();
    coursenew findBycoursenewid(int coursenewid);

    //查询对应尾号的课程
    @Query(value = "select * from coursenew where coursenew.coursetailnum = ?1",nativeQuery = true)
    coursenew findBycoursetailnum(@Param("coursetailnum") String coursetailnum);
}
