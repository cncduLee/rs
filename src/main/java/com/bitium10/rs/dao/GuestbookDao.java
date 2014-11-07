package com.bitium10.rs.dao;

import com.bitium10.rs.dao.impl.BaseDaoImpl;
import com.bitium10.rs.domain.comment.Guestbook;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


public interface GuestbookDao extends GuestbookDaoCustom, CrudRepository<Guestbook, Long> {

	@Modifying
	@Query("update Guestbook set status=?2 where id = ?1")
	public int updateStatus(Long id, String status);
	
}

interface GuestbookDaoCustom extends BaseDao<Guestbook> {

}

@Component
class GuestbookDaoImpl extends BaseDaoImpl<Guestbook> implements GuestbookDaoCustom {

}
