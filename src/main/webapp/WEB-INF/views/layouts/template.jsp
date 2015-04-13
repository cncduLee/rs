<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<!DOCTYPE html>
<html >
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width" />
    <meta name="keywords" content='' />
    <meta name="description" content='忆恒' />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="Cache-Control" content="no-store" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <title><sitemesh:title/> - 忆恒</title>
    <%@include file="/WEB-INF/views/include/script.jsp" %>
    <sitemesh:head/>
</head>
<body>
<%@include file="/WEB-INF/views/include/head.jsp" %>
<sitemesh:body/>
<%@include file="/WEB-INF/views/include/tail.jsp" %>
<%@include file="/WEB-INF/views/include/back2top.jsp" %>
</body>
</html>