<?php

require_once _TABLES_PATH_ . '/IUsers.php';
require_once _TABLES_PATH_ . '/IAltWorlds.php';
require_once _TABLES_PATH_ . '/IHeroes.php';

require_once _SCRIPTS_PATH_ . '/IScript.php';

require_once _GAMESTRUCTS_PATH_ . '/Map/Map.php';

/** 
 * @author skana
 * 
 * 
 */
class Models implements IUsers, IAltWorlds, IHeroes, IScript
{
	private $_models = array();
	/**
	 * @var IDb Ressource de la base de données
	 */
	private $_db;
	/**
	 * @var ScriptEngine
	 */
	private $_scriptEngine;
	/**
	 * @var array Les tables
	 */
	private $_tables;

	function __construct( $db, $scriptEngine )
	{
		$this->_db = $db;
		$this->_scriptEngine = $scriptEngine;
	}
	/**
	 * Récupère la table
	 * @param string $table
	 * @return Table
	 */
	protected function _getTable( $table )
	{
		if ( empty($this->_tables[$table]) )
		{
			require_once _TABLES_PATH_ . '/' .
				$this->_db->getDriver() . '/' . $table . '.php';
			$this->_tables[$table] = new $table( $this->_db );
		}
		return $this->_tables[$table];
	}
	/**
	 * Récupère le moteur de script
	 * @return ScriptEngine
	 */
	protected function _getScriptEngine()
	{
		return $this->_scriptEngine;
	}
	/**
	 * @see IUsers::readUserFromLogin()
	 */
	public function readUserFromLogin( $login )
	{
		return $this->_getTable( 'Users' )->readUserFromLogin( $login );
	}
	/**
	 * @see IUsers::createUser()
	 */
	public function createUser( $login, $password )
	{
		$this->_getTable( 'Users' )->createUser( $login, $password );
	}
	/**
	 * @see IAltWorlds::worldExists()
	 */
	public function worldExists( $id )
	{
		return $this->_getTable( 'AltWorlds' )->worldExists( $id );
	}
	/**
	 * @see IAltWorlds::characterExists()
	 */
	public function characterExists( $wid, $cid )
	{
		return $this->_getTable( 'Heroes' )->characterExists( $wid, $cid );
	}
	/**
	 * @see IAltWorlds::loadGame()
	 */
	public function loadGame( $id )
	{
		return $this->_getTable( 'AltWorlds' )->loadGame( $id );
	}
	/**
	 * @see IScript::script()
	 */
	public function script( $id )
	{
		return $this->_getScriptEngine()->load( $id );
	}
	public function readFullMap( $mapName )
	{
		$map = new Map( $mapName );
		return $map;
	}
}

?>
