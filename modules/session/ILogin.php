<?php

/**
 *
 */
interface ILogin
{
	/**
	 * Connexion
	 * @param string $user
	 * @param string $pass
	 */
	public function login( $user, $pass );
	/**
	 * Déconnexion
	 */
	public function logout();
	/**
	 * Vérifie si l'utilisateur est connecté
	 */
	public function logged();
}

?>
