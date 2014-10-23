package com.bitium10.rs.dao;

import com.bitium10.rs.dao.impl.BaseDaoImpl;
import com.bitium10.rs.domain.cms.Site;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

public interface SiteDao extends SiteDaoCustom, CrudRepository<Site, Long> {
	
	@Modifying
	@Query("update Site set delFlag=?2 where id = ?1")
	public int updateDelFlag(Long id, String delFlag);
}

interface SiteDaoCustom extends BaseDao<Site> {

}

@Component
class SiteDaoImpl extends BaseDaoImpl<Site> implements SiteDaoCustom {

}
