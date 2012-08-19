<?php

/**
 * Contexte du joueur
 */
interface IPlayerContext
{
	/**
	 * Sélectionner le monde
	 * @param  int $id	Id du monde
	 * @return bool		Si le monde a bien été sélectionné
	 */
	public function selectWorld( $id );
	public function worldSelected();
	public function selectCharacter( $id );
	public function characterSelected();
	/**
	 * Retourne l'Id du monde
	 * @return int L'Id du monde
	 */
	public function getWorld();
}

?>
