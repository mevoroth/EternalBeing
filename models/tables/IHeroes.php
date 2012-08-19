<?php

/**
 * Table personnage
 */
interface IHeroes
{
	/**
	 * Vérifie si le personnage existe dans un monde
	 * @param $wid int Id du monde
	 * @param $cid int Id du personnage
	 */
	public function characterExists( $wid, $cid );
}

?>
