<?php

/**
 * @author Daniel "skana" Quach
 */
interface IGameContext
{
	/**
	 * Charge la partie
	 */
	public function load();
	/**
	 * Sauvegarde la partie
	 */
	public function save();
	/**
	 * Script actuel
	 * @return array
	 */
	public function current();
	/**
	 * Script suivant
	 * @return array
	 */
	public function next();
}

?>
