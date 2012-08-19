<?php

/**
 * @file Config.php
 * @version 1.0 13 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Script de configuration
 */

if ( !defined('_CONFIG_PATH_') )
{
	die();
}

require_once _PATTERNS_PATH_.'/Singleton.php';

class Config extends Singleton
{
	/**
	 * @brief Instance unique de la classe
	 * @var Object
	 * @access protected
	 * @staticvar
	 */
	protected static $_inst;
	/**
	 * La configuration
	 * @var $_config array
	 * @access protected
	 */
	protected $_config = array();
	
	/**
	 * Lit la configuration
	 * @param $key string La clé
	 * @return mixed L'information
	 * @access public
	 */
	public function get( $key )
	{
		$key = explode( '.', $key );
		$config = $this->_config;
		foreach ( $key as $node )
		{
			assert( isset($config[$node]) );
			if (!isset($config[$node])) {
				echo $node;
			}
			$config = $config[$node];
		}
		return $config;
	}
	/**
	 * Ecrit une configuration
	 * @param $key string La clé
	 * @param $value mixed L'information
	 * @access public
	 */
	public function set( $key, $value )
	{
		$key = explode( '.', $key );
		$config = &$this->_config;
		foreach ( $key as $node )
		{
			$config = &$config[$node];
		}
		$config = $value;
	}
}

/**
 * Charger un fichier de configuration
 */
function load_config( $configfile )
{
	require_once _CONFIG_PATH_.'/'.$configfile.'.php';
}

?>