<?php

/**
 * @file lang.php
 * @version 1.0 18 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Langue
 */

if ( !defined('_CONFIG_PATH_') )
{
	die();
}

load_config( 'lang' );
load_config( 'langfiles' );

/**
 * Vérifie si la langue est disponible
 * @param string $lang La langue
 */
function lang_is_available( $lang )
{
	return in_array( $lang, Config::inst()->get('lang.available') );
}
/**
 * Charge une langue
 * @param string $lang La langue
 */
function load_lang( $lang )
{
	assert( lang_is_available($lang) );
	Config::inst()->set( 'lang.current', _LANG_PATH_.'/'.$lang );
}
/**
 * Charge un fichier de langue
 * @param string $langfile
 */
function load_langfile( $langfile )
{
	require_once Config::inst()->get( 'lang.current' ).'/'.$langfile.'.php';
}
/**
 * Charge un fichier commun
 * @param string $commonfile
 */
function load_commonfile( $commonfile )
{
	require_once _LANG_COMMON_PATH_.'/'.$commonfile.'.php';
}

?>
