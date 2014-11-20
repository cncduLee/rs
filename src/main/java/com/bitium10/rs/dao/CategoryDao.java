package com.bitium10.rs.dao;

import com.bitium10.rs.common.persistence.Page;
import com.bitium10.rs.dao.impl.BaseDaoImpl;
import com.bitium10.rs.domain.cms.Category;
import com.bitium10.rs.domain.customer.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;


public interface CategoryDao extends CategoryDaoCustom, CrudRepository<Category, Long> {

	@Modifying
	@Query("update Category set delFlag='" + Category.DEL_FLAG_DELETE + "' where id = ?1 or parentIds like ?2")
	public int deleteById(Long id, String likeParentIds);
	
	public List<Category> findByParentIdsLike(String parentIds);

//	@Query("from Category where delFlag='" + Category.DEL_FLAG_NORMAL + "' order by site.id, sort")
//	public List<Category> findAllList();
//
//	@Query("from Category where delFlag='" + Category.DEL_FLAG_NORMAL + "' and (module='' or module=?1) order by site.id, sort")
//	public List<Category> findByModule(String module);
//
//	@Query("from Category where delFlag='" + Category.DEL_FLAG_NORMAL + "' and parent.id=?1 and site.id=?2 order by site.id, sort")
//	public List<Category> findByParentId(Long parentId, Long siteId);
//
//	@Query("from Category where delFlag='" + Category.DEL_FLAG_NORMAL + "' and parent.id=:parentId order by site.id, sort")
//	public Page<Category> findByParentId(@Param("parentId") Long parentId, Pageable pageable);
//
//	@Query("from Category where delFlag='" + Category.DEL_FLAG_NORMAL + "' and parent.id=?1 and inMenu=?2 order by site.id, sort")
//	public List<Category> findByParentId(Long parentId, String isMenu);
}

interface CategoryDaoCustom extends BaseDao<Category> {

}

@Component
class CategoryDaoImpl extends BaseDaoImpl<Category> implements CategoryDaoCustom {

}
