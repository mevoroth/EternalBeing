<?php

if ( !defined('_CONTROLLERS_PATH_') )
{
	die();
}

require_once _CONTROLLERS_PATH_ . '/Controller.php';
require_once _DISPLAYERS_PATH_ . '/ajax/PlayerDisplay.php';

class PlayerController extends Controller implements Iterator
{
	const MODULE_NAME = 'Player';
	
	function __construct()
	{
		parent::__construct();
		
		$this->_addAction( 'route' );
		$this->_addAction( 'next' );
		$this->_addAction( 'current' );
	}
	public function route()
	{
		$display = new PlayerDisplay();
		$display->set(
			'code',
			$this->_route(
				$this->_getSession()->load()
			)
		);
		return $display;
	}
	/**
	 * Route le joueur suivant son checkpoint
	 * @param  int $checkpoint	Checkpoint
	 * @return PlayerDisplay	Code de routage
	 */
	private function _route( $checkpoint )
	{
		return PlayerDisplay::CODE_ROUTE_CUTSCENE;
	}

	/**
	 * Récupère la prochaine instruction du script
	 */
	public function next()
	{
		//$this->_getSession()->nextScript();
		$this->_getSession()->next();
		$display = new PlayerDisplay();
		$display->set( 'code', PlayerDisplay::CODE_SCRIPT_NEXT_SUCCESS );
		return $display;
	}
	/**
	 * Reformate le code type de l'action
	 * @param  string $code Le code
	 * @return PlayerDisplay
	 */
	private function _protocol( $code )
	{
		$table = array(
			'ANIMATE'	=> PlayerDisplay::CODE_ANIMATE,
			'TALK'		=> PlayerDisplay::CODE_TALK,
			'IMPACT'	=> PlayerDisplay::CODE_IMPACT,
			'CHOOSE'	=> PlayerDisplay::CODE_CHOOSE,
			'LAYOUT'	=> PlayerDisplay::CODE_LAYOUT
		);
		return $table[$code];
	}
	/**
	 * Récupère l'instruction courante du script
	 */
	public function current()
	{
		$display = new PlayerDisplay();
		$script = $this->_getSession()->current();
		$display->set( 'code', $this->_protocol($script['code']) );
		unset($script['code']);
		foreach ($script as $param => $value) {
			$display->set( $param, $value );
		}
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
