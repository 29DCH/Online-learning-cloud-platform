//免费热门课程首页
package olcp.dao;
import olcp.entity.coursehot1;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface coursehot1Dao extends JpaRepository<coursehot1, Integer> {
    coursehot1 findByCourseid2(int courseid2);
    Page<coursehot1> findAll(Pageable pageable);
    //根据学习人数给课程排序
    @Query(value = "SELECT * FROM (SELECT * FROM coursehot1 ORDER BY coursestudypeople DESC) as hotcourse",nativeQuery = true)
    List<coursehot1> findAll();
}
