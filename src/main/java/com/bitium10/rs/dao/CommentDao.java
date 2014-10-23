package com.bitium10.rs.dao;

import com.bitium10.rs.dao.impl.BaseDaoImpl;
import com.bitium10.rs.domain.comment.Comment;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

public interface CommentDao extends CommentDaoCustom, CrudRepository<Comment, Long> {

	@Modifying
	@Query("update Comment set status=?2 where id = ?1")
	public int updateStatus(Long id, String status);
	
}

interface CommentDaoCustom extends BaseDao<Comment> {

}

@Component
class CommentDaoImpl extends BaseDaoImpl<Comment> implements CommentDaoCustom {

}
