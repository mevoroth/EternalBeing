<?php

/**
 * @file /ext/Filter/SecuredPassFilter.php
 * @version 1.0 30 mai 2010
 * @author Daniel "Skana" Quach
 * Filtre de mot de passe sécurisé
 */

require_once _EXT_PATH_ . '/Filter/modules/IFilter.php';

/**
 * Filtre de mot de passe sécurisé
 */
class SecuredPassFilter implements IFilter
{
	/**
	 * @todo Non complet
	 * @see IFilter::filter($string)
	 */
	public function filter($string)
	{
		
	}
	/**
	 * No param
	 * @todo Non complet
	 * @see IFilter::filter($string)
	 */
	public function setParam($name, $value)
	{
		return true;
	}
	/**
	 * @todo Non complet
	 * @see IFilter::getError()
	 */
	public function getError()
	{
		// TODO Auto-generated method stub
		
	}

}

?>
