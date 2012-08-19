<?php

/**
 * @file Rights.php
 * @version 1.0 17 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Gestion des droits
 */

if ( !defined('_MODULES_PATH_') )
{
	die();
}

load_config( 'Rights' );
require_once _PATTERNS_PATH_.'/Singleton.php';

class Rights extends Singleton
{
	/**
	 * @brief Instance unique de la classe
	 * @var Object
	 * @access protected
	 * @staticvar
	 */
	protected static $_inst;
	/**
	 * Les droits
	 * @var $_rights int
	 */
	protected $_rights;
	/**
	 * Modifier les droits
	 * @param int $right Le droit
	 * @param bool $enabled Activé ?
	 */
	public function set( $right, $enabled )
	{
		if ( $enabled )
		{
			$this->_rights |= $right;
		}
		else
		{
			$this->_rights &= ~$right;
		}
	}
	/**
	 * Retourne la possession du droit
	 * @param int $right Le droit
	 * @return bool Si on possède le droit
	 */
	public function is( $right )
	{
		return ( ($this->_rights & $right) != 0 );
	}
}

?>
