<?php

/**
 * @file /ext/Filter/IFilter.php
 * @version 1.0 30 mai 2010
 * @author Daniel "Skana" Quach
 * Filtre
 */

/**
 * Filtre
 */
interface IFilter
{
	/**
	 * Filtre la chaîne
	 * @param string $string
	 * @return bool
	 */
	public function filter($string);
	/**
	 * Ajoute un paramètre spécifique
	 * @param string $name Le nom du paramètre
	 * @param mixed $value La valeur du paramètre
	 * @return bool Paramètre valide ?
	 */
	public function setParam($name, $value);
	/**
	 * @todo Faire le retour de la méthode
	 * Lit l'erreur
	 */
	public function getError();
}

?>
