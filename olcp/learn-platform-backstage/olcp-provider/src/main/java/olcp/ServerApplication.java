package olcp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import olcp.handler.SpiderHandler;


/**
 * 程序启动入口
 *
 * @ServletComponentScan 设置启动时spring能够扫描到我们自己编写的servlet和filter, 用于Druid监控
 * @MapperScan("com.imlaidian.springbootdemo.dao") 扫描mybatis Mapper接口
 * @EnableScheduling 启用定时任务
 * @EnableTransactionManagement 开启事务
 * @PostConstruct 爬虫调度入口
 * @author LJQ
 */
@ServletComponentScan
@EnableConfigurationProperties
@EnableTransactionManagement
@SpringBootApplication
public class ServerApplication {
	@Autowired
	private SpiderHandler spiderHandler;
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
//	@PostConstruct
//	public void task() {
//       spiderHandler.spiderData();
//	}
}
