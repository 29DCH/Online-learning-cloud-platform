package olcp.handler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.FastDateFormat;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import olcp.common.HttpClientUtils;
import olcp.constant.SysConstant;
/**
 * 爬虫调度处理器
 */
@Component
public class SpiderHandler {
    //课程分类
    private static String HTTPS_PROTOCOL = "https:";
    String a[]={"nt","wff","blockchain","ethereum","ai","machine","deep","pcvision","datafxwj"
            ,"fe","html","javascript","vuejs","reactjs","angular","nodejs","jquery","bootstrap","sassless","webapp","fetool"
            ,"be","java","springboot","python","crawler","django","go","php","c","cplusplus","csharp","ruby"
            ,"mobile","android","ios","reactnative","weex"
            ,"algorithm","algorithmds","maths"
            , "cb","bigdata","hadoop","spark","hbase","storm","cloudcomputing","aws","docker","kubernetes"
            ,"op","dba","oma","linux","test","gntest","xntest","zdhtest","jktest","aqtest"
            ,"data","mysql","redis","mongodb","oracle","sqlserver"
            ,"photo","modelmaking","dxdh","uijc","uitool","uiapp","ixd"
            ,"game","unity3d","cocos2dx"};
    private static final Logger logger = LoggerFactory.getLogger(SpiderHandler.class);
    //存取数据
    public static void store(String direction,String difficulty,String coursetailnum,int people,String coursesummary,String coursetype,String coursename,String picturepath) {

        String driverClassName = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/online_learning_platform?useUnicode=true&characterEncoding=utf-8&useSSL=true&zeroDateTimeBehavior=convertToNull";
        String username = "root";
        String password = "19981028";
        Connection conn = null;
        // 加载驱动类
        try {
            Class.forName(driverClassName);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        try {
            conn = DriverManager.getConnection(url, username, password);
            // 创建sql语句模板
            String sql = "INSERT into courseclassification(direction,difficulty,coursetailnum,people,coursesummary,coursetype,coursename,picturepath) VALUES(?,?,?,?,?,?,?,?)";
            // 创建一个声明对象
            PreparedStatement pst = conn.prepareStatement(sql);
            // 用循环将数据添加到sql模板中
            pst.setString(1, direction);
            pst.setString(2, difficulty);
            pst.setString(3, coursetailnum);
            pst.setInt(4, people);
            pst.setString(5, coursesummary);
            pst.setString(6, coursetype);
            pst.setString(7, coursename);
            pst.setString(8, picturepath);
            pst.addBatch();
            // 将sql语句发送到mysql上
            int[] res = pst.executeBatch();
            System.out.println(res);
            pst.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void grib(String html)
    {
        Document document = Jsoup.parse(html);
        Elements elements = document.select("div[class=clearfix]").select("div[class=course-card-container]");
        for(Element element : elements) {
            String coursedifficulty = element.select("div[class=course-card-info]").select("span").text().split(" ")[0];
            String difficulty=null;
            if(coursedifficulty.equals("入门"))
                difficulty=String.valueOf(1);
            else if(coursedifficulty.equals("初级"))
            {
                difficulty=String.valueOf(2);
            }
            else if(coursedifficulty.equals("中级"))
            {
                difficulty=String.valueOf(3);
            }
            else if(coursedifficulty.equals("高级"))
            {
                difficulty=String.valueOf(4);
            }
            String courseStudyPeople =element.select("div[class=course-card-info]").select("span").text().split(" ")[1];
            int people = Integer.valueOf(courseStudyPeople).intValue();
            String tailnum[] = element.select("a").attr("href").replaceAll("\\\\", "/").split("/");
            String coursetailnum=tailnum[tailnum.length - 1];

            String coursesummary = element.select("div[class=clearfix course-card-bottom]").select("p[class=course-card-desc]").text();
            String coursetype = element.select("div[class=course-card-top]").select("div[class=course-label]").select("label").text();String courseDifficulty = element.select("div[class=course-card-info]").select("span").text().split(" ")[0];
            String picturepath = HTTPS_PROTOCOL+element.select("div[class=course-card-top]").select("img").attr("src");
            String coursename = element.select("div[class=course-card-content]").select("h3[class=course-card-name]").text();
            store(a[76],difficulty,coursetailnum,people,coursesummary,coursetype,coursename,picturepath);
        }
    }

    public void spiderData() {
        logger.info("爬虫开始....");
        Date startDate = new Date();
        // 使用现线程池提交任务
        ExecutorService executorService = Executors.newFixedThreadPool(8);
        //引入countDownLatch进行线程同步，使主线程等待线程池的所有任务结束，便于计时
        CountDownLatch countDownLatch = new CountDownLatch(100);
        for(int i=1;i<=1;i++) {
            String url = "https://www.imooc.com/course/list?c=" + a[76] + "&page=" + i;
            String html = HttpClientUtils.sendGet1(url, null);
            if (!StringUtils.isBlank(html)) {
                executorService.submit(() -> {
                    grib(html);
                    countDownLatch.countDown();
                });
            }
        }
            try {
                countDownLatch.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        executorService.shutdown();
        Date endDate = new Date();
        FastDateFormat fdf = FastDateFormat.getInstance(SysConstant.DEFAULT_DATE_FORMAT);
        logger.info("爬虫结束....");
        logger.info("[开始时间:" + fdf.format(startDate) + ",结束时间:" + fdf.format(endDate) + ",耗时:"
                + (endDate.getTime() - startDate.getTime()) + "ms]");

    }

}