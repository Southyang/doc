---
title: springboot
date: 2022-03-25 16:38:18
permalink: /pages/be7c65/
categories: 
  - developmentdoc
  - projectdoc
  - Debug
tags: 
  - 
---


### bug1 : Error resolving template [home]……

- **报错：**`Error resolving template [home], template might not exist or might not be accessible by any of the ……`

- **原因：** 输出目录(target)中没有templates文件夹，因此无法找到对应的模板

- **解决办法：** 添加依赖（resources要写在build里）

  ```xml
   <!-- 配置将哪些资源文件(静态文件/模板文件/mapper文件)加载到输出目录里 -->
   <resources>
       <resource>
           <directory>src/main/java</directory><!--java文件的路径-->
           <includes>
               <include>**/*.*</include>
           </includes>
  <!-- <filtering>false</filtering>-->
       </resource>
       <resource>
           <directory>src/main/resources</directory><!--资源文件的路径-->
           <includes>
               <include>**/*.*</include>
           </includes>
  <!-- <filtering>false</filtering>-->
       </resource>
  </resources>
  ```

  

### bug2 : Error starting ApplicationContext ……

- **报错：** 

  ```
  Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
  Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.
  Reason: Failed to determine a suitable driver class
  ```

- **原因：** DataSourceAutoConfiguration.class会默认帮我们配置单数据源，而创建的项目中没有数据源，就会报错

- **解决办法：** 我使用了多数据源，通过 @SpringBootApplication(exclude={DataSourceAutoConfiguration.calss}) 注解，排除自动注入数据源的配置（取消数据库配置），在我们需要用到数据库的时候自己配置即可	



### bug3 ：Unknown column 'name' in 'field list'……
- **报错：**
```
Error updating database.  Cause: java.sql.SQLSyntaxErrorException: Unknown column 'name' in 'field list'
```
- **原因：** 产生这个报错的原因很多，最常见的就是字段和数据库的列名不匹配。如果在使用insert语句时报错，并且发现'name'是输入内容而不是想要的列名，检查一下是不是 table(name) values(#{value1}) 的table和(name)中间有空格
- **解决办法：** 修改字段使得字段和数据表中的列名匹配；或者把sql语句写对