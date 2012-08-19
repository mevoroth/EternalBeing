<?php

/**
 * @file /ext/Filter/EqualsFilter.php
 * @version 1.0 30 mai 2010
 * @author Daniel "Skana" Quach
 * Filtre d'E-Mail
 */

require_once _EXT_PATH_ . '/Filter/modules/IFilter.php';

/**
 * Filtre d'E-Mail
 */
class EqualsFilter implements IFilter
{
	/**
	 * @todo Non complet
	 * @see IFilter::filter($string)
	 */
	public function filter($string)
	{
		
	}
	/**
	 * @todo Non complet
	 * @see IFilter::setParam()
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
