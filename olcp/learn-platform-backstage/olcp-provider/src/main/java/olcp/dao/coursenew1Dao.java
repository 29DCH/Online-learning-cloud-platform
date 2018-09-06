//最新课程免费页面
package olcp.dao;

import olcp.entity.coursenew1;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface coursenew1Dao extends JpaRepository<coursenew1, Integer>{
    coursenew1 findByCourseid1(int courseid1);
    Page<coursenew1> findAll(Pageable pageable);
}
