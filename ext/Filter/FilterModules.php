<?php

/** 
 * @author skana
 * 
 * 
 */
class FilterModules
{
	/**
	 * @var array La liste des modules de validation
	 */
	private static $_modules = array();
	/**
	 * Fabrique un module de validation d'email
	 * @param string $module Nom du module
	 * @return IFilter
	 */
	private static function _getModule( $module )
	{
		if ( empty(FilterModules::$_modules[$module]) )
		{
			$className = $module.'Filter';
			require_once _EXT_PATH_ . '/Filter/modules/' . $className . '.php';
			FilterModules::$_modules[$module] = new $className();
		}
		return FilterModules::$_modules[$module];
	}
	public static function getEmail()
	{
		return FilterModules::_getModule( 'Email' );
	}
	/**
	 * Fabrique un module de vérification 
	 * @param unknown_type $conf
	 * @todo Commentaires
	 */
	public static function getEquals( $conf )
	{
		$module = FilterModules::_getModule( 'Equals' );
		$module->setParam( 'to', $conf );
		return $module;
	}
	/**
	 * Fabrique un module de vérification 
	 * @param unknown_type $conf
	 * @todo Commentaires
	 */
	public static function getInt()
	{
		return FilterModules::_getModule( 'Int' );
	}
	/**
	 * Fabrique un module de vérification
	 * @todo Commentaires
	 */
	public static function getEmptyString()
	{
		return FilterModules::_getModule( 'EmptyString' );
	}
}

?>
