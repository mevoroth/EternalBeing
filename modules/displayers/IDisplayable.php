<?php

/**
 * Interface permettant d'exécuter le moteur d'affichage
 * @author skana
 */
interface IDisplayable
{
	/**
	 * Paramétrer le moteur
	 * @param string $key
	 * @param mixed $value
	 */
	public function set( $key, $value );
	/**
	 * Afficher
	 */
	public function display();
}

?>
