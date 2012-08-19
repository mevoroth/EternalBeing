<?php

/**
 * @file Singleton.php
 * @version 1.0 13 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Pattern Singleton
 */

if( !defined('_PATTERNS_PATH_') )
{
	die();
}

abstract class Singleton
{
	protected static $_inst;
	/**
	 * @brief Appel du constructeur interdit
	 * @access protected
	 */
	protected function __construct()
	{
	}
	/**
	 * @brief Clonage interdit
	 * @access protected
	 */
	protected function __clone()
	{
	}
	
	/**
	 * @brief Retourne l'instance
	 * @access public
	 * @static
	 */
	public static function inst()
	{
		if ( !(static::$_inst instanceof static) )
		{
			static::$_inst = new static();
		}
		
		return static::$_inst;
	}
}

?>
