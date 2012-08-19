<?php

/**
 * @file /ext/Filter/EmptyStringFilter.php
 * @version 1.0 14 octobre 2011
 * @author Daniel "Skana" Quach
 * Filtre de chaîne vide
 */

require_once _EXT_PATH_ . '/Filter/modules/IFilter.php';

/**
 * Filtre de chaîne vide
 */
class EmptyStringFilter implements IFilter
{
	/**
	 * @todo Non complet
	 * @see IFilter::filter($string)
	 */
	public function filter($string)
	{
		return $string === '';
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
