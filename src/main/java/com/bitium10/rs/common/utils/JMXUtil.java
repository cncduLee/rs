package com.bitium10.rs.common.utils;

import javax.management.*;
import java.lang.management.ManagementFactory;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.common.utils <br>
 * <b>类名称</b>： JMXUtil <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 16:12
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class JMXUtil {
    /**
     * 在MBeanServer里注册MBean, 标识为ObjectName(com.bitium10.jmx:type=Echo)
     * @param name  注册的Bean对应的标识【如：com.bitium10.jmx:type=Echo】
     * @param mbean 注册的Bean
     * @return
     */
    public static ObjectName register(String name, Object mbean) {
        try {
            ObjectName objectName = new ObjectName(name);
            MBeanServer mbeanServer = getMBeanServer();
            try {
                mbeanServer.registerMBean(mbean, objectName);
            } catch (InstanceAlreadyExistsException ex) {
                mbeanServer.unregisterMBean(objectName);
                mbeanServer.registerMBean(mbean, objectName);
            }
            return objectName;
        } catch (JMException e) {
            throw new IllegalArgumentException(name, e);
        }
    }

    /**
     * 在MBeanServer里撤销名称为name的Bean注册
     * @param name
     */
    public static void unregister(String name) {
        try {
            MBeanServer mbeanServer = getMBeanServer();
            mbeanServer.unregisterMBean(new ObjectName(name));
        } catch (InstanceNotFoundException e) {

        } catch (JMException e) {
            throw new IllegalArgumentException(name, e);
        }
    }

    /**
     * 获取MBeanServer
     * @return
     */
    public static MBeanServer getMBeanServer(){
        return ManagementFactory.getPlatformMBeanServer();
    }
}
