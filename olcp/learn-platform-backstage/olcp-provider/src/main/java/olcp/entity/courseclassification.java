package olcp.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "courseclassification")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" })
public class courseclassification implements Serializable{
    /**
     * id
     */
    @Id
    @GeneratedValue  //(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    /**
     * 方向
     */
    @Column
    private String direction;
    /**
     * 课程难度
     */
    @Column
    private String difficulty;
    /**
     * 课程尾号
     */
    @Column
    private String coursetailnum;
    /**
     * 课程学习人数
     */
    @Column
    private int people;
    /**
     * 课程描述
     */
    @Column
    private String coursesummary;
    /**
     * 课程类型
     */
    @Column
    private String coursetype;
    /**
     * 课程名
     */
    @Column
    private String coursename;
    /**
     * 图片路径
     */
    @Column
    private String picturepath;
    private static final long serialVersionUID = 1L;
    public courseclassification(int id,String direction,String difficulty,String coursetailnum,int people,String coursesummary,String coursetype,String coursename,String picturepath)
    {
        this.id=id;
        this.direction = direction;
        this.difficulty = difficulty;
        this.coursetailnum = coursetailnum;
        this.people=people;
        this.coursesummary = coursesummary;
        this.coursetype = coursetype;
        this.coursename = coursename;
        this.picturepath = picturepath;
    }
    public courseclassification(){super();}

    public int getId() { return id; }

    public void setId(int id) {
        this.id = id;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getCoursetailnum() {
        return coursetailnum;
    }

    public void setCoursetailnum(String coursetailnum) {
        this.coursetailnum = coursetailnum;
    }

    public int getPeople() {
        return people;
    }

    public void setPeople(int people) {
        this.people = people;
    }
    public String getCoursesummary() {
        return coursesummary;
    }

    public void setCoursesummary(String coursesummary) {
        this.coursesummary = coursesummary == null ? null : coursesummary.trim();
    }

    public String getCoursetype() {
        return coursetype;
    }

    public void setCoursetype(String coursetype) {
        this.coursetype = coursetype;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename == null ? null : coursename.trim();
    }

    public String getPicturepath() {
        return picturepath;
    }

    public void setPicturepath(String picturepath) {
        this.picturepath = picturepath;
    }
}
