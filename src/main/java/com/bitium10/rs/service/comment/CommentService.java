package com.bitium10.rs.service.comment;

import com.bitium10.rs.common.persistence.Page;
import com.bitium10.rs.dao.CommentDao;
import com.bitium10.rs.domain.comment.Comment;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <b>项目名</b>： rs <br>
 * <b>包名称</b>： com.bitium10.rs.service.comment <br>
 * <b>类名称</b>： CommentService <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:wylipengming@chinabank.com.cn">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/11/3 14:51
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Service("commentService")
public class CommentService {
    private static Logger logger = LoggerFactory.getLogger(CommentService.class);
    @Autowired
    private CommentDao commentDao;

    public Comment get(Long id) {
        return commentDao.findOne(id);
    }

    public Page<Comment> find(Page<Comment> page, Comment comment) {
        DetachedCriteria dc = commentDao.createDetachedCriteria();
        if (StringUtils.isNotEmpty(comment.getModule())){
            dc.add(Restrictions.eq("module", comment.getModule()));
        }
        if (comment.getContentId()!=null && comment.getContentId()>0){
            dc.add(Restrictions.eq("contentId", comment.getContentId()));
        }
        if (StringUtils.isNotEmpty(comment.getTitle())){
            dc.add(Restrictions.like("title", "%"+comment.getTitle()+"%"));
        }
        dc.add(Restrictions.eq("status", comment.getStatus()));
        dc.addOrder(Order.desc("id"));
        return commentDao.find(page, dc);
    }

    @Transactional(readOnly = false)
    public void save(Comment comment) {
        commentDao.save(comment);
    }

    @Transactional(readOnly = false)
    public void delete(Long id, Boolean isRe) {
        commentDao.updateStatus(id, isRe!=null&&isRe?Comment.STATUS_AUDIT:Comment.STATUS_DELETE);
    }
}
