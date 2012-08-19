<?php

/**
 * @file Session.php
 * @version 1.1 13 juin 2011
 * @author Daniel "Skana" Quach
 * @brief Module de Session
 */

if ( !defined('_MODULES_PATH_') )
{
	die();
}

require_once _MODULES_PATH_ . '/SessionException.php';

require_once _SESSION_PATH_ . '/ILogin.php';
require_once _SESSION_PATH_ . '/IGameContext.php';
require_once _SESSION_PATH_ . '/IPlayerContext.php';

require_once _MODULES_PATH_ . '/Tools.php';

class Session implements ILogin, IPlayerContext, IGameContext
{
	const NAME = 'eb';
	
	/**
	 * @var Models La base de données
	 */
	private $_models;
	
	function __construct( Models $models )
	{
		session_name( Session::NAME );
		session_start();
		$this->_models = $models;
		if (!isset($_SESSION['pointer']))
		{
			$_SESSION['pointer'] = 0;
		}
	}
	/**
	 * @see IGameContext::load()
	 * @todo A implémenter
	 */
	public function load()
	{
		$_SESSION['checkpoint'] = $this->_models->loadGame(
			$this->getWorld()
		);
		$_SESSION['pointer'] = 0;
		return $_SESSION['checkpoint'];
	}
	/**
	 * @see IGameContext::save()
	 * @todo A implémenter
	 */
	public function save()
	{
		// TODO Auto-generated method stub
		
	}
	public function current()
	{
		$script = $this->_models->script( $_SESSION['checkpoint'] );
		return $script[$_SESSION['pointer']];
	}
	public function next()
	{
		++$_SESSION['pointer'];
	}
	/**
	 * @see ILogin::login()
	 */
	public function login( $user, $pass )
	{
		$user = $this->_models->readUserFromLogin( $user );
		if ( !empty($user)
			&& Tools::hash($pass) === $user[0]['pass'] )
		{
			$_SESSION['uid'] = $user[0]['idusers'];
			
			return true;
		}
		return false;
	}
	/**
	 * @see ILogin::logout()
	 */
	public function logout()
	{
		session_unset();
		session_destroy();
	}
	/**
	 * @see ILogin::logged()
	 */
	public function logged()
	{
		return !empty($_SESSION['uid']);
	}
	/**
	 * @todo Commentaires
	 */
	public function selectWorld( $id )
	{
		if ( $this->_models->worldExists($id) )
		{
			$_SESSION['wid'] = $id;
			
			return true;
		}
		return false;
	}
	public function worldSelected()
	{
		return !empty($_SESSION['wid']);
	}
	public function selectCharacter( $id )
	{
		assert( $this->worldSelected() );
		if ( $this->_models->characterExists(
			$_SESSION['wid'],
			$id
		) )
		{
			$_SESSION['cid'] = $id;
			
			return true;
		}
		return false;
	}
	public function characterSelected()
	{
		return !empty($_SESSION['cid']);
	}
	public function getWorld()
	{
		if (!$this->worldSelected())
		{
			throw new SessionException(
				SessionException::WORLD_NOT_SELECTED
			);
		}
		return $_SESSION['wid'];
	}
}

?>
