<?php

require_once _DATABASE_PATH_ . '/IFetch.php';

/** 
 * @author skana
 * 
 * 
 */
class FetchPdoAssoc implements IFetch
{
	/**
	 * @param mixed $query
	 * @return mixed
	 * @see IFetch::fetch()
	 */
	public function fetch( $query )
	{
		$result = array();
		while ( $row = $query->fetch(PDO::FETCH_ASSOC) )
		{
			$result[] = $row;
		}
		return $result;
	}
}

?>
