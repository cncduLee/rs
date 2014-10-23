package com.bitium10.common.utils.test;


import com.bitium10.rs.common.utils.PropertiesLoader;
import org.junit.Assert;
import org.junit.Test;

public class PropertiesLoaderTest {
    PropertiesLoader propertiesLoader = new PropertiesLoader();

    @Test
    public void testGetDouble() throws Exception {
        String value1 = propertiesLoader.getProperty("key");
        Assert.assertNotNull(value1);
        Assert.assertEquals("getTest",value1);
    }
}