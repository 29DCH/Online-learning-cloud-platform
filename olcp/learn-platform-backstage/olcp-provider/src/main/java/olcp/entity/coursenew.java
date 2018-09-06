package olcp.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "coursenew")
@JsonIgnoreProperties({ "handler","hibernateLazyInitializer" })
public class coursenew implements Serializable{
    /**
     * 课程序号
     */
    @Id
    @GeneratedValue  //(strategy = GenerationType.IDENTITY)
    @Column
    private Integer coursenewid;
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
     * 课程时长
     */
    @Column
    private String coursetime;
    /**
     * 课程难度
     */
    @Column
    private String coursedifficulty;
    /**
     * 学习人数
     */
    @Column
    private String coursestudypeople;
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
     * 老师图片路径
     */
    @Column
    private String teacherpicturepath;
    /**
     * 老师名字
     */
    @Column
    private String teachername;
    /**
     * 老师职业方向
     */
    @Column
    private String teacherjob;
    /**
     * 问答评论数量
     */
    @Column
    private String qacommentnum;
    /**
     * 用户评论数量
     */
    @Column
    private String user_evaluationnum;
    /**
     * 课程须知
     */
    @Column
    private String coursenotes;
    /**
     * 老师告诉你能学到什么?
     */
    @Column
    private String learncontent;
    /**
     * 热门专题标签
     */
    @Column
    private String label;
    /**
     *　课程章节详细信息
     */
    @Column
    private String chapter;
    //    @Column
//    private double price;
//    /**
//     * 课程价格
//     */
    private static final long serialVersionUID = 1L;
    public coursenew(Integer coursenewid, String coursesummary, String coursetype,String coursetime, String coursedifficulty,String coursestudypeople, String coursename, String coursetailnum, String teacherpicturepath,String teachername,String teacherjob,String qacommentnum,String user_evaluationnum,String coursenotes,String learncontent,String label,String chapter) {
        this.coursenewid = coursenewid;
        this.coursesummary = coursesummary;
        this.coursetype = coursetype;
        this.coursetime=coursetime;
        this.coursedifficulty = coursedifficulty;
        this.coursestudypeople = coursestudypeople;
        this.coursename = coursename;
        this.coursetailnum = coursetailnum;
        this.teacherpicturepath = teacherpicturepath;
        this.teachername=teachername;
        this.teacherjob=teacherjob;
        this.qacommentnum=qacommentnum;
        this.user_evaluationnum=user_evaluationnum;
        this.coursenotes=coursenotes;
        this.learncontent=learncontent;
        this.label=label;
        this.chapter=chapter;
    }

    public coursenew() {
        super();
    }

    public Integer getCoursenewid() {
        return coursenewid;
    }

    public void setCoursenewid(Integer coursenewid) {
        this.coursenewid = coursenewid;
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

    public String getCoursetime() {
        return coursetime;
    }

    public void setCoursetime(String coursetime) {
        this.coursetime = coursetime;
    }

    public String getCoursedifficulty() {
        return coursedifficulty;
    }

    public void setCoursedifficulty(String coursedifficulty) {
        this.coursedifficulty = coursedifficulty;
    }

    public String getCoursestudypeople() {
        return coursestudypeople;
    }

    public void setCoursestudypeople(String coursestudypeople) {
        this.coursestudypeople = coursestudypeople == null ? null : coursestudypeople.trim();
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

    public String getTeacherpicturepath() {
        return teacherpicturepath;
    }

    public void setTeacherpicturepath(String teacherpicturepath) {
        this.teacherpicturepath = teacherpicturepath;
    }

    public String getTeachername() {
        return teachername;
    }

    public void setTeachername(String teachername) {
        this.teachername = teachername;
    }

    public String getTeacherjob() {
        return teacherjob;
    }

    public void setTeacherjob(String teacherjob) {
        this.teacherjob = teacherjob;
    }

    public String getQacommentnum() {
        return qacommentnum;
    }

    public void setQacommentnum(String qacommentnum) {
        this.qacommentnum = qacommentnum;
    }

    public String getUser_evaluationnum() {
        return user_evaluationnum;
    }

    public void setUser_evaluationnum(String user_evaluationnum) {
        this.user_evaluationnum = user_evaluationnum;
    }

    public String getCoursenotes() {
        return coursenotes;
    }

    public void setCoursenotes(String coursenotes) {
        this.coursenotes = coursenotes;
    }

    public String getLearncontent() {
        return learncontent;
    }

    public void setLearncontent(String learncontent) {
        this.learncontent = learncontent;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }
//    @Override
//    public boolean equals(Object that) {
//        if (this == that) {
//            return true;
//        }
//        if (that == null) {
//            return false;
//        }
//        if (getClass() != that.getClass()) {
//            return false;
//        }
//        coursenew other = (coursenew) that;
//        return (this.getCoursenewid() == null ? other.getCoursenewid() == null : this.getCoursenewid().equals(other.getCoursenewid()))
//                && (this.getCoursesummary() == null ? other.getCoursesummary() == null : this.getCoursesummary().equals(other.getCoursesummary()))
//                && (this.getCoursetype() == null ? other.getCoursetype() == null : this.getCoursetype().equals(other.getCoursetype()))
//                && (this.getCoursedifficulty() == null ? other.getCoursedifficulty() == null : this.getCoursedifficulty().equals(other.getCoursedifficulty()))
//                && (this.getCoursestudypeople() == null ? other.getCoursestudypeople() == null : this.getCoursestudypeople().equals(other.getCoursestudypeople()))
//                && (this.getCoursename() == null ? other.getCoursename() == null : this.getCoursename().equals(other.getCoursename()))
//                && (this.getCoursetailnum() == null ? other.getCoursetailnum() == null : this.getCoursetailnum().equals(other.getCoursetailnum()))
//                && (this.getPicturepath() == null ? other.getPicturepath() == null : this.getPicturepath().equals(other.getPicturepath()));
//    }
//
//    @Override
//    public int hashCode() {
//        final int prime = 31;
//        int result = 1;
//        result = prime * result + ((getCourseid1() == null) ? 0 : getCourseid1().hashCode());
//        result = prime * result + ((getCoursesummary() == null) ? 0 : getCoursesummary().hashCode());
//        result = prime * result + ((getCoursetype() == null) ? 0 : getCoursetype().hashCode());
//        result = prime * result + ((getCoursedifficulty() == null) ? 0 : getCoursedifficulty().hashCode());
//        result = prime * result + ((getCoursestudypeople() == null) ? 0 : getCoursestudypeople().hashCode());
//        result = prime * result + ((getCoursename() == null) ? 0 : getCoursename().hashCode());
//        result = prime * result + ((getCoursetailnum() == null) ? 0 : getCoursetailnum().hashCode());
//        result = prime * result + ((getPicturepath() == null) ? 0 : getPicturepath().hashCode());
//        return result;
//    }
//
//    @Override
//    public String toString() {
//        StringBuilder sb = new StringBuilder();
//        sb.append(getClass().getSimpleName());
//        sb.append(" [");
//        sb.append("Hash = ").append(hashCode());
//        sb.append(", courseid1=").append(courseid1);
//        sb.append(", coursesummary=").append(coursesummary);
//        sb.append(", coursetype=").append(coursetype);
//        sb.append(", coursedifficulty=").append(coursedifficulty);
//        sb.append(", coursestudypeople=").append(coursestudypeople);
//        sb.append(", coursename=").append(coursename);
//        sb.append(", coursetailnum=").append(coursetailnum);
//        sb.append(", picturepath=").append(picturepath);
//        sb.append(", serialVersionUID=").append(serialVersionUID);
//        sb.append("]");
//        return sb.toString();
//    }
}
