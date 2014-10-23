package com.bitium10.rs.dao;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.Hibernate;
import org.hibernate.dialect.H2Dialect;
import org.hibernate.dialect.MySQL5InnoDBDialect;
import org.hibernate.dialect.Oracle10gDialect;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.dao <br>
 * <b>类名称</b>： Hibernates <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/10/23 11:08
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
public class Hibernates {
    /**
     * Initialize the lazy property value, eg.
     * Hibernates.initLazyProperty(user.getRoles());
     */
    public static void initLazyProperty(Object proxyedPropertyValue) {
        Hibernate.initialize(proxyedPropertyValue);
    }

    /**
     * 从DataSoure中取出connection, 根据connection的metadata中的jdbcUrl判断Dialect类型.
     */
    public static String getDialect(DataSource dataSource) {
        //从DataSource中取出jdbcUrl.
        String jdbcUrl = null;
        Connection connection = null;
        try {
            connection = dataSource.getConnection();
            if (connection == null) {
                throw new IllegalStateException("Connection returned by DataSource [" + dataSource + "] was null");
            }
            jdbcUrl = connection.getMetaData().getURL();
        } catch (SQLException e) {
            throw new RuntimeException("Could not get database url", e);
        } finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    connection = null;
                }
            }
        }
        //根据jdbc url判断dialect
        if (StringUtils.contains(jdbcUrl, ":h2:")) {
            return H2Dialect.class.getName();
        } else if (StringUtils.contains(jdbcUrl, ":mysql:")) {
            return MySQL5InnoDBDialect.class.getName();
        } else if (StringUtils.contains(jdbcUrl, ":oracle:")) {
            return Oracle10gDialect.class.getName();
        } else {
            throw new IllegalArgumentException("Unknown Database");
        }
    }
}
