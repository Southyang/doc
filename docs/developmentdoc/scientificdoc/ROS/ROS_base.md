---
title: ROS_base
date: 2022-07-14 13:53:05
permalink: /pages/137cca/
---
# 机器人操作系统ROS理论与实践

## 一、认识ROS

### 1.1 相关参考资料可查阅

- [ROS Wiki](https://wiki.ros.org/)
- [ROS Answers](https://answers.ros.org)
- [古月居](http://www.guyuehome.com)
- [Exbot易科机器人实验室](http://blog.exbot.net)

### 1.2 ROS总体设计的五个特点

- 点对点设计
- 多语言支持
- 架构精简、集成度高
- 组件化工具包丰富
  - 3D可视化工具 rviz
  - 物理仿真环境 gazebo
  - 数据记录工具 rosbag
  - Qt工具箱 rqt_*

- 免费并且开源

### 1.3 版本

#### ROS1

![](https://store.southyang.cn/robot/tutorial/ROS_base/ros1.png)

#### ROS2

![](https://store.southyang.cn/robot/tutorial/ROS_base/ros2.png)

### 1.4 基础指令

|       命令        |            作用            |
| :---------------: | :------------------------: |
|      roscore      |       启动ROS Master       |
| catkin_create_pkg |         创建功能包         |
|      rospack      |       获取功能包信息       |
|    catkin_make    |   编译工作空间中的功能包   |
|      rosdep       | 自动安装功能包依赖的其他包 |
|       roscd       |       功能包目录跳转       |
|       roscp       |     拷贝功能包中的文件     |
|       rosed       |     编辑功能包中的文件     |
|      rosrun       |  运行功能包中的可执行文件  |
|     roslaunch     |        运行启动文件        |
|     rostopic      |        查看话题信息        |
|      rosnode      |        查看节点信息        |

### 1.5 设置环境变量

- 直接使用`source setup.bash`，仅在当前窗口下生效
- 使用`echo "source setuo.bash" >> ./.bashrc`，再通过`source ./.bashrc`可全局生效



## 二、ROS基础

### 2.1 工作空间

工作空间是用于存放工程开发相关文件的文件夹

- src：代码空间
- build：编译空间
- devel：开发空间
- install：安装空间

### 2.2 ROS通信编程

- 话题编程

  - 创建发布者
  - 创建订阅者
  - 添加编译选项
  - 运行可执行程序

- 服务编程

  - 创建服务器
  - 创建客户端
  - 添加编译选项
  - 运行可执行文件

- 动作编程

  - 实现动作服务器

  - 实现动作客户端

  - 编译代码

  - 运行可执行文件

### 2.3 分布式通信

ROS是一种分布式软件框架，节点之间通过松耦合的方式进行组合

通过在从机端设置ROS_MASTER_URI，让从机找到ROS_MASTER，从而实现分布式多机通信

### 2.4 ROS中的关键组件

- launch文件
  - 可自动启动ROS Master
  - 注意多种标签的用途和含义
- TF坐标变换
  - 机器人位姿在两个坐标系下的坐标变换
- Qt工具箱
  - 日志输出工具 rqt_console
  - 计算图可视化工具 rqt_graph
  - 数据绘图工具 rqt_plot
  - 参数动态配置工具 rqt_reconfigure
- Rviz可视化平台
- Gazebo物理仿真环境



## 三、机器人系统设计

### 3.1 机器人系统构建

- 组装执行机构
- 搭建驱动系统
- 连接传感系统
- 实现控制系统

### 3.2 URDF机器人建模

- Unified Robot Description Format 统一机器人描述格式
- 使用xml格式描述机器人模型

**标签**

- `<link>`：描述某个刚体部分的外观和物理属性
  - `<visual>`：外观参数
  - `<inertial>`：惯性参数
  - `<collision>`：碰撞参数
- `<joint>`：描述机器人关节的运动学和动力学属性
  - `<calibration>`：关节的参考位置
  - `<dynamics>`：关节的物理属性
  - `<limit>`：运动的极限值
  - `<mimic>`：该关节与已有关节的关系
  - `<safety_controller>`：安全控制器参数
- `<robot>`：完整机器人模型的最顶层标签



## 四、机器人仿真

### 4.1 机器人模型优化

- URDF模型的进化版本——xacro模型文件

- 提供可编程接口

  - 常量 `<xacro:property name="M_PI" value="3.14159"/>`
  - 常量使用 `<origin xyz="0 0 0" rpy="${M_PI/2} 0 0"/>`
  - 数学计算 `<origin xyz="0 ${(motor_length + wheel_length) / 2} 0" rpy="0 0 0">`

- 精简模型代码

  - 宏定义

    ```
    <xacro:macro name="name" params="A B C">
    ...
    </xacro:macro>
    ```

  - 宏调用 `<name A="A_value" B="B_value" C="C_value" />`

  - 文件包含 `<xacro:include filename="$(find mbot_description)/urdf/xacro/mbot_base.xacro" />`

### 4.2 Gazebo物理仿真环境

- 配置机器人模型

- 创建仿真环境

- 开始仿真

- 其他内容

  - gazebo可实现多机器人，机器人名字需要不同

  - 实现四轮或履带式需要重写gazebo插件



## 五、机器视觉和机器语音

### 5.1 机器视觉

- ROS中的图像数据
- 摄像头标定
  - 摄像头对光学器件要求较高，为避免数据源造成的误差，需要针对摄像头参数进行标定
- ROS + OpenCV
  - 主要API
    - `imgmsg_to_cs2()`：将ROS图像消息转换为OpenCV图像数据
    - `cv2_to_imgmsg()`：将OpenCV格式的图像数据转换为ROS图像消息
  - 应用实例
    - 人脸识别
    - 物体跟踪
- 二维码识别
- 物体识别与机器学习

### 5.2 机器语音

- 科大讯飞SDK
  - 语音听写
  - 语音合成
  - 智能语音助手



## 六、机器人slam

### 6.1 机器人必备条件

- 硬件要求
- 深度信息
- 里程计信息
- 仿真环境

### 6.2 ROS SLAM功能包应用方法

- gmapping：输入激光雷达、里程计信息，输出二维栅格地图
- hector_slam：输入激光雷达信息，输出二维栅格地图
- cartographer：输入激光雷达信息，输出二维或三维地图
- ORB_SLAM：输入单目摄像头信息，输出三维点云地图

### 6.3 ROS中的导航框架

- move_base
  - 全局路径规划
    - Dijkstra或A*算法
  - 本地实施规划
    - 规划每个周期的参数，尽量符合全局最优
    - 实时避障
    - Trajectory Rollout和Dynamic Window Approaches算法
    - 选取最优路径
- amcl：二维概率定位
  - 估算机器人在地图坐标系/map下的位姿信息，提供/base、/odom、/map之间的TF变换

### 6.4 ROS机器人自主导航

- rviz + Arbotix的功能仿真
- gazebo环境下自主导航的仿真
- 导航过程中同步SLAM建图



## 七、MoveIt!

### 7.1 MoveIt!系统架构

Movelt!是一个被广泛应用的开源软件，可以用于机械臂操纵、运动规划、3D感知、运动学、控制以及导航等,它为开发先进的机器人提供了一个简单、实用、开放的平台。

**使用步骤**

- 组装：创建机器人URDF模型
- 配置：使用MoveIt! Setup Assistant工具生成配置文件
- 驱动：添加机器人控制器插件（controller）
- 控制：MoveIt!控制机器人运动（算法仿真、物理仿真）

### 7.2 创建机械臂模型与配置文件

- 创建模型：类似于创建机器人模型
- 配置文件：MoveIt! Setup Assistant

### 7.3 MoveIt!编程基础

- MoveIt!的核心节点——move_group

- 编程接口：python、cpp
- 编程方法
  - 关节空间规划
  - 工作空间规划
  - 笛卡尔路径规划
  - 避障规划

### 7.4 Gazebo机械臂仿真

- 配置关节轨迹控制器
  - 线性样条：位置连续，速度、加速度不连续
  - 三次样条：位置和速度连续，加速度不连续
  - 五次样条：位置、速度、加速度都连续
- 机械臂仿真



## 八、综合应用

### 8.1 ROS机器人综合应用

- PR2：基于ROS开发，功能丰富、强大
- TurtleBot：ROS社区中最流行的高性价比机器人平台
- Universal Robot：工业领域的协作工业机器人平台
- HRMRP：基于ARM + FPGA的异构实时移动机器人平台
- Kungfu Arm：基于ROS-I框架的机械臂控制系统

### 8.2 构建综合机器人平台

- mbot pro：添加了丰富的传感器和执行器
- marm pro：集成三维视觉，动态识别周围障碍物
- mbot + marm：移动底盘 + 机械臂



## 九、关于ROS2

[ROS2文档](https://docs.ros.org/en/foxy/index.html)
