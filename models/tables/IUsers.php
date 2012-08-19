<?php

/**
 * Table utilisateur
 */
interface IUsers
{
	/**
	 * Lit une ligne à partir du login
	 * @param string $login
	 * @return array
	 */
	public function readUserFromLogin( $login );
	/**
	 * Crée un utilisateur
	 * @param string $login
	 * @param string $password
	 */
	public function createUser( $login, $password );
}

?>
