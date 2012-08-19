<?php

/**
 * Table monde parallèle
 */
interface IAltWorlds
{
	/**
	 * Vérifie si le monde existe
	 * @param int $id Id du monde
	 */
	public function worldExists( $id );
	/**
	 * Charge un checkpoint
	 * @param  int $id Id du monde
	 * @return int     Le checkpoint
	 */
	public function loadGame( $id );
}

?>
