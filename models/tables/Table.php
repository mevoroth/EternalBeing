<?php

/** 
 * @author skana
 * 
 * 
 */
class Table
{
	/**
	 * Ressource de la base de données
	 * @var IDb
	 */
	private $_db;
	/**
	 * Crée une table
	 * @param IDb $db
	 */
	function __construct( IDb $db )
	{
		$this->_db = $db;
	}
	/**
	 * Retourne la ressource de la base de données
	 * @return IDb
	 */
	protected function getDb()
	{
		return $this->_db;
	}
}

?>
