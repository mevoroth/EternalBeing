<?php

interface IDb
{
	const DRIVER_PDO_MYSQL = 'pdo';
	const DRIVER_MYSQL = 'mysql';
	/**
	 * Ouvre une connexion
	 * @param string $host
	 * @param string $user
	 * @param string $pass
	 * @param string $base
	 */
	public function open( $host, $user, $pass, $base );
	/**
	 * Effectue une requête SQL
	 * @param string $sql
	 * @param array $params
	 */
	public function query( $sql, array $params );
	/**
	 * Fetch le résultat de la requête
	 * @param IFetch $fetch
	 * @return mixed
	 */
	public function fetch( IFetch $fetch );
	/**
	 * Retourne le driver
	 * @return string
	 */
	public function getDriver();
	/**
	 * Ferme la connexion
	 */
	public function close();
}

?>
