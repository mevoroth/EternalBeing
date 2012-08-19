<?php

if ( !defined('_CONTROLLERS_PATH_') )
{
	die();
}

require_once _CONTROLLERS_PATH_ . '/Controller.php';

class BattleController extends Controller
{
	const MODULE_NAME = 'Battle';
	
	function __construct()
	{
		parent::__construct();
		
		$this->_addAction( 'act' );
	}
	
	/**
	 * Effectue une action
	 */
	public function act()
	{
		//$
	}
}

?>
