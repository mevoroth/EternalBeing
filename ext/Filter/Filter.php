<?php

/**
 * @file /ext/Filter/Filter.php
 * @version 1.0 30 mai 2010
 * @author Daniel "Skana" Quach
 * Extension de filtre
 */

require_once _EXT_PATH_ . '/Filter/FilterException.php';
require_once _EXT_PATH_ . '/Filter/FilterModules.php';

/**
 * Extension de filtre
 */
class Filter
{
	const T_POST = 0;
	const T_GET = 1;
	const T_COOKIE = 2;
	
	/**
	 * Récupère la superglobale
	 * @param int $t_var
	 * @return array
	 */
	private static function _getVar( $t_var )
	{
		switch ( $t_var )
		{
			case Filter::T_POST :
				return $_POST;
			case Filter::T_GET :
				return $_GET;
			case Filter::T_COOKIE :
				return $_COOKIE;
			default :
				throw new FilterException( FilterException::UNKNOWN_VAR );
				break;
		}
	}
	
	/**
	 * Vérifie si les variables existent
	 * @param array La structure des variables
	 * @return array
	 */
	public static function missing( array $struct )
	{
		$missing = array(
			Filter::T_POST		=> array(),
			Filter::T_GET 		=> array(),
			Filter::T_COOKIE	=> array()
		);
		$error = false;
		foreach ( $struct as $t_var => $var_list )
		{
			$var = Filter::_getVar($t_var);
			foreach ( $var_list as $varname )
			{
				if ( !isset($var[$varname]) )
				{
					$missing[$t_var][] = $varname;
					$error = true;
				}
			}
		}
		if ( !$error )
		{
			return false;
		}
		return $missing;
	}
	/**
	 * Filtre la variable
	 * @param IFilter $filter
	 * @param string $var La superglobale
	 * @param string $key La clé
	 * @return bool Le résultat
	 */
	public static function invalid( IFilter $filter, $var, $key )
	{
		$string = Filter::_getVar($var);
		if ( !isset($string[$key]) )
		{
			throw new FilterException( FilterException::UNKNOWN_KEY );
		}
		return $filter->filter($string[$key]);
	}
	/**
	 * Filtre les variables entrées
	 * @param array La structure des variables
	 * @return array
	 */
	public static function invalids( array $struct )
	{
		$errors = array(
			Filter::T_POST		=> array(),
			Filter::T_GET 		=> array(),
			Filter::T_COOKIE	=> array()
		);
		$error = false;
		foreach ( $struct as $t_var => $var_list )
		{
			foreach ( $var_list as $key => $filters )
			{
				foreach ( $filters as $filter )
				{
					if ( Filter::invalid($filter['filter'], $t_var, $key) )
					{
						if ( empty($errors[$t_var][$key]) )
						{
							$errors[$t_var][$key] = array();
						}
						$errors[$t_var][$key][] = $filter['filter']->getError();
						$error = true;
					}
				}
			}
		}
		if ( !$error )
		{
			return false;
		}
		return $errors;
	}
}

?>
