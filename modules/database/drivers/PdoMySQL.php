<?php

require_once _DATABASE_PATH_ . '/IDb.php';

/** 
 * @author skana
 * 
 * 
 */
class PdoMySQL implements IDb
{
	/**
	 * @var PDO La ressource PDO
	 */
	private $_pdo;
	/**
	 * @var PDOStatement La dernière requête
	 */
	private $_statement;
	
	/**
	 * @return string
	 * @see IDb::getDriver()
	 */
	public function getDriver()
	{
		return IDb::DRIVER_PDO_MYSQL;
	}
	/**
	 * @param  IFetch $fetch
	 * @return  mixed
	 * @see IDb::fetch()
	 */
	public function fetch( IFetch $fetch )
	{
		return $fetch->fetch( $this->_statement );
	}
	/**
	 * @param  string $host
	 * @param  string $user
	 * @param  string $pass
	 * @param  string $base
	 * @see IDb::open()
	 */
	public function open( $host, $user, $pass, $base )
	{
		$this->_pdo = new PDO(
			'mysql:dbname=' . $base . ';host=' . $host,
			$user,
			$pass
		);
	}
	/**
	 * @param  string $sql
	 * @param  array $params
	 * @see IDb::query()
	 */
	public function query( $sql, array $params )
	{
		$this->_statement = $this->_pdo->prepare( $sql );
		$this->_statement->execute( $params );
	}
	/**
	 * 
	 * @see IDb::close()
	 */
	public function close()
	{
		$this->_pdo = null;
	}
}

?>
