package com.bitium10.rs.service.cms;

import com.bitium10.BaseTestCase;
import com.bitium10.rs.dao.ArticleDao;
import com.bitium10.rs.dao.CategoryDao;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import javax.annotation.Resource;

import static org.junit.Assert.*;

public class ArticleServiceTest extends BaseTestCase {

    @InjectMocks
    ArticleService articleService;// 通过注解方式申明需要注入的对象

    @Mock
    ArticleDao articleDao;
    @Mock
    CategoryDao categoryDao;// 通过注解方式申明需要MOCK的对象

    @Test
    public void before(){
        MockitoAnnotations.initMocks(this);// 初始化
    }

    @Test
    public void testGet() throws Exception {

    }

    @Test
    public void testFind() throws Exception {

    }

    @Test
    public void testSave() throws Exception {

    }


    @Test
    public void tearDown(){

    }
}