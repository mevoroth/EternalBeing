<?php

require_once _DISPLAYERS_PATH_ . '/IDisplayable.php';
require_once _LIBS_PATH_ . '/Smarty/Smarty.class.php';

require_once _CONFIG_PATH_ . '/lang.php';

/** 
 * @author skana
 */
class HtmlDisplay implements IDisplayable
{
	/**
	 * @var array Paramètres
	 */
	private $_params = array();
	/**
	 * @var Smarty Smarty
	 */
	private $_engine;
	
	function __construct()
	{
		$this->_engine = new Smarty();
		$this->_engine->setTemplateDir( _ROOT_PATH_ . '/views/template' );
		$this->_engine->setCompileDir( _ROOT_PATH_ . '/views/template' );
		$this->_engine->setCacheDir( _ROOT_PATH_ . '/smarty' );
		$this->_engine->setConfigDir( _CONFIG_PATH_ . '/smarty/' . _LANG_ );
	}
	/**
	 * @param  string $key
	 * @param  mixed $value
	 * @see IDisplayable::set()
	 */
	public function set( $key, $value )
	{
		$this->_params[$key] = $value;
	}
	/**
	 * @see IDisplayable::display()
	 */
	public function display()
	{
		$this->_engine->assign( 'disp', $this->_params['disp'] );
		return $this->_engine->fetch( $this->_params['file'] );
	}
}

?>
