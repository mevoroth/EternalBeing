<?php

require_once _CONTROLLERS_PATH_ . '/Controller.php';
require_once _DISPLAYERS_PATH_ . '/ajax/ScriptDisplay.php';

/** 
 * @author skana
 * 
 * 
 */
class ScriptController extends Controller implements Iterator
{
	function __construct()
	{
		$this->_addAction( 'next' );
		$this->_addAction( 'current' );
	}
	/**
	 * Récupère la prochaine instruction du script
	 */
	public function next()
	{
		$this->_getSession()->nextScript();
		return $this->current();
	}
	/**
	 * Récupère l'instruction courante du script
	 */
	public function current()
	{
		$display = new ScriptDisplay();
		$display->set( 'code', ScriptDisplay::CODE_CURRENT_SUCCESS );
		$display->set( 'script', $this->_getSession()->currentScript() );
		return $display;
	}
	/**
	 * @see Iterator::key()
	 * @todo Commentaires + Exception
	 */
	public function key()
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see Iterator::valid()
	 * @todo Commentaires + Exception
	 */
	public function valid()
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see Iterator::rewind()
	 * @todo Commentaires + Exception
	 */
	public function rewind()
	{
		// TODO Auto-generated method stub
		
	}
}

?>
