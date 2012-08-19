<?php

if ( !defined('_CONTROLLERS_PATH_') )
{
	die();
}

require_once _CONTROLLERS_PATH_ . '/Controller.php';
require_once _DISPLAYERS_PATH_ . '/ajax/MapDisplay.php';
require_once _DISPLAYERS_PATH_ . '/html/DefaultLayoutDisplay.php';

/**
 * Contrôleur de l'écran de jeu
 */
class MapController extends Controller
{
	const MODULE_NAME = 'Map';
	
	function __construct()
	{
		parent::__construct();
		
		$this->_addAction( 'getFullMap' );
		$this->_addAction( 'getDiff' );
	}
	/**
	 * Récupère la map totale
	 */
	public function getFullMap()
	{
		$display = new MapDisplay();
		$map = $this->_getModels()->readFullMap( _CONTENT_PATH_ . '/maps/test.xml' );
		$display->set( 'code', MapDisplay::CODE_FULLMAP_SUCCESS );
		$display->set( 'width', (int)$map->getWidth() );
		$display->set( 'height', (int)$map->getHeight() );
		var_dump( $map->serialize());
		$display->set( 'map', $map->serialize() );
		return $display;
	}
	/**
	 * Récupère les différences
	 */
	public function getDiff()
	{
		$display = new MapDisplay();
		$diff = $this->_getModels()->readMapDiff();
		$display->set( 'code', MapDisplay::CODE_DIFF_SUCCESS );
		return $display;
	}
	/**
	 * @see Controller::run()
	 */
	public function run()
	{
		return new DefaultLayoutDisplay();
	}
}

?>

