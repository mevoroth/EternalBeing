<?php

if ( !defined('_CONTROLLERS_PATH_') )
{
	die();
}

require_once _DISPLAYERS_PATH_ . '/EmptyDisplay.php';

require_once _CONTROLLERS_PATH_ . '/Controller.php';

class TestController extends Controller
{
	const MODULE_NAME = 'Player';
	
	function __construct()
	{
		parent::__construct();
		
		$this->_addAction( 'test' );
	}
	public function test()
	{
		$_SESSION['pointer'] = 0;
		return new EmptyDisplay();
	}
}

?>
