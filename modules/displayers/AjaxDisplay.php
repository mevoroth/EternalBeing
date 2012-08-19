<?php

require_once _DISPLAYERS_PATH_ . '/IDisplayable.php';

/** 
 * @author skana
 * 
 * 
 */
class AjaxDisplay implements IDisplayable
{
	/**
	 * @var int Code non connecté (Code général)
	 */
	const CODE_NOT_CONNECTED			= 0xFFFFFFFF;
	/**
	 * @var int Code Aucun monde sélectionné (Code général)
	 */
	const CODE_WORLD_NOT_SELECTED		= 0xFFFFFFFE;
	/**
	 * @var int Code Aucun personnage sélectionné (Code général)
	 */
	const CODE_CHARACTER_NOT_SELECTED	= 0xFFFFFFFD;
	/**
	 * @var int Code Connecté (Code général)
	 */
	const CODE_CONNECTED				= 0xFFFFFFFC;
	/**
	 * @var int Code Monde sélectionné (Code général)
	 */
	const CODE_WORLD_SELECTED			= 0xFFFFFFFB;
	/**
	 * @var int Code Personnage sélectionné (Code général)
	 */
	const CODE_CHARACTER_SELECTED		= 0xFFFFFFFA;
	
	/**
	 * @var array Paramètres
	 */
	private $_params = array();
	/**
	 * @param  string $key
	 * @param  mixed $value
	 * @see IDisplayable::set()
	 */
	public function set( $key, $value )
	{
		$this->_params[$key] = $value;
	}
	/**
	 * @see IDisplayable::display()
	 */
	public function display()
	{
		//header('Content-Type: application/json');
		return json_encode($this->_params, JSON_FORCE_OBJECT);
	}
}

?>
