package com.bitium10.rs.service.comment;

import com.bitium10.rs.common.persistence.Page;
import com.bitium10.rs.dao.GuestbookDao;
import com.bitium10.rs.domain.comment.Guestbook;
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
 * <b>类名称</b>： GuestbookService <br>
 * <b>类描述</b>： <br>
 * <b>创建人</b>： <a href="mailto:shouli1990@gmail.com">李朋明</a> <br>
 * <b>修改人</b>： <br>
 * <b>创建时间</b>：2014/11/3 14:52
 * <b>修改时间</b>： <br>
 * <b>修改备注</b>： <br>
 *
 * @version 1.0.0 <br>
 */
@Transactional(readOnly = true)
@Service("guestbookService")
public class GuestbookService {
    @SuppressWarnings("unused")
    private static Logger logger = LoggerFactory.getLogger(GuestbookService.class);

    @Autowired
    private GuestbookDao guestbookDao;

    public Guestbook get(Long id) {
        return guestbookDao.findOne(id);
    }

    public Page<Guestbook> find(Page<Guestbook> page, Guestbook guestbook) {
        DetachedCriteria dc = guestbookDao.createDetachedCriteria();
        if (StringUtils.isNotEmpty(guestbook.getType())){
            dc.add(Restrictions.eq("type", guestbook.getType()));
        }
        if (StringUtils.isNotEmpty(guestbook.getContent())){
            dc.add(Restrictions.like("content", "%"+guestbook.getContent()+"%"));
        }
        dc.add(Restrictions.eq("status", guestbook.getStatus()));
        dc.addOrder(Order.desc("id"));
        return guestbookDao.find(page, dc);
    }

    @Transactional(readOnly = false)
    public void save(Guestbook guestbook) {
        guestbookDao.save(guestbook);
    }

    @Transactional(readOnly = false)
    public void delete(Long id, Boolean isRe) {
        guestbookDao.updateStatus(id, isRe!=null&&isRe?Guestbook.STATUS_AUDIT:Guestbook.STATUS_DELETE);
    }
}
