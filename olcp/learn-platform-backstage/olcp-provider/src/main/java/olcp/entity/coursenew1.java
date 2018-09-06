package olcp.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "coursenew1")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" })
public class coursenew1 implements Serializable {
    /**
     * 课程序号
     */
    @Id
    @GeneratedValue  //(strategy = GenerationType.IDENTITY)
    @Column
    private Integer courseid1;
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
     * 课程难度
     */
    @Column
    private String coursedifficulty;
    /**
     * 学习人数
     */
    @Column
    private int coursestudypeople;
    /**
     * 课程名
     */
    @Column
    private String coursename;
    /**
     * 课程网址尾数
     */
    @Column
    private String coursetailnum;
    /**
     * 图片路径
     */
    @Column
    private String picturepath;
//    @Column
//    private double price;
//    /**
//     * 课程价格
//     */
    private static final long serialVersionUID = 1L;
    public coursenew1(Integer courseid1, String coursesummary, String coursetype, String coursedifficulty,int coursestudypeople, String coursename, String coursetailnum, String picturepath) {
        this.courseid1 = courseid1;
        this.coursesummary = coursesummary;
        this.coursetype = coursetype;
        this.coursedifficulty = coursedifficulty;
        this.coursestudypeople = coursestudypeople;
        this.coursename = coursename;
        this.coursetailnum = coursetailnum;
        this.picturepath = picturepath;
    }

    public coursenew1() {
        super();
    }

    public Integer getCourseid1() {
        return courseid1;
    }

    public void setCourseid1(Integer courseid1) {
        this.courseid1 = courseid1;
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

    public String getCoursedifficulty() {
        return coursedifficulty;
    }

    public void setCoursedifficulty(String coursedifficulty) {
        this.coursedifficulty = coursedifficulty;
    }

    public int getCoursestudypeople() {
        return coursestudypeople;
    }

    public void setCoursestudypeople(int coursestudypeople) {
        this.coursestudypeople = coursestudypeople;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename == null ? null : coursename.trim();
    }

    public String getCoursetailnum() {
        return coursetailnum;
    }

    public void setCoursetailnum(String coursetailnum) {
        this.coursetailnum = coursetailnum;
    }

    public String getPicturepath() {
        return picturepath;
    }

    public void setPicturepath(String picturepath) {
        this.picturepath = picturepath;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        coursenew1 other = (coursenew1) that;
        return (this.getCourseid1() == null ? other.getCourseid1() == null : this.getCourseid1().equals(other.getCourseid1()))
                && (this.getCoursesummary() == null ? other.getCoursesummary() == null : this.getCoursesummary().equals(other.getCoursesummary()))
                && (this.getCoursetype() == null ? other.getCoursetype() == null : this.getCoursetype().equals(other.getCoursetype()))
                && (this.getCoursedifficulty() == null ? other.getCoursedifficulty() == null : this.getCoursedifficulty().equals(other.getCoursedifficulty()))
                && (this.getCoursename() == null ? other.getCoursename() == null : this.getCoursename().equals(other.getCoursename()))
                && (this.getCoursetailnum() == null ? other.getCoursetailnum() == null : this.getCoursetailnum().equals(other.getCoursetailnum()))
                && (this.getPicturepath() == null ? other.getPicturepath() == null : this.getPicturepath().equals(other.getPicturepath()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getCourseid1() == null) ? 0 : getCourseid1().hashCode());
        result = prime * result + ((getCoursesummary() == null) ? 0 : getCoursesummary().hashCode());
        result = prime * result + ((getCoursetype() == null) ? 0 : getCoursetype().hashCode());
        result = prime * result + ((getCoursedifficulty() == null) ? 0 : getCoursedifficulty().hashCode());
        result = prime * result + ((getCoursename() == null) ? 0 : getCoursename().hashCode());
        result = prime * result + ((getCoursetailnum() == null) ? 0 : getCoursetailnum().hashCode());
        result = prime * result + ((getPicturepath() == null) ? 0 : getPicturepath().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", courseid1=").append(courseid1);
        sb.append(", coursesummary=").append(coursesummary);
        sb.append(", coursetype=").append(coursetype);
        sb.append(", coursedifficulty=").append(coursedifficulty);
        sb.append(", coursestudypeople=").append(coursestudypeople);
        sb.append(", coursename=").append(coursename);
        sb.append(", coursetailnum=").append(coursetailnum);
        sb.append(", picturepath=").append(picturepath);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}