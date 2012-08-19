<?php

/**
 * @file Core.php
 * @version 1.0 13 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Moteur
 */

if ( !defined('_MODULES_PATH_') )
{
	die();
}

require_once _EXT_PATH_ . '/Filter/Filter.php';
require_once _PATTERNS_PATH_ . '/Singleton.php';
require_once _MODULES_PATH_ . '/CoreException.php';
require_once _DATABASE_PATH_ . '/Drivers.php';
require_once _MODULES_PATH_ . '/ScriptEngine.php';
require_once _MODELS_PATH_ . '/Models.php';
require_once _MODULES_PATH_ . '/Session.php';

class Core extends Singleton
{
	/**
	 * Module par défaut
	 * @var string
	 */
	const DEFAULT_MODULE = 'Game';
	/**
	 * @brief Instance unique de la classe
	 * @var Object
	 * @access protected
	 * @staticvar
	 */
	//protected static $_inst;
	/**
	 * Données d'affichage
	 * @var mixed $_displaydata
	 * @access protected
	 */
	protected $_displaydata;
	/**
	 * Dossier des contrôleurs
	 * @var string
	 */
	protected $_controller_dir;
	/**
	 * Module à exécuter
	 * @var string
	 */
	protected $_module;
	/**
	 * Module à exécuter
	 * @var string
	 */
	protected $_action;
	/**
	 * @var Models Les modèles
	 */
	protected $_models;
	/**
	 * @var Session Le gestionnaire de session
	 */
	protected $_session;
	
	/**
	 * @brief Constructeur
	 * @access protected
	 */
	protected function __construct()
	{
		$db = Drivers::getPdoMySQL();
		$db->open( _DB_HOST_, _DB_USER_, _DB_PASS_, _DB_NAME_ );
		$this->_models = new Models( $db, ScriptEngine::inst() );
		$this->_session = new Session( $this->_models );
		/*
		// Droits
		require_once _MODULES_PATH_.'/Rights.php';
		Rights::inst()->set( _RIGHTS_GUEST_, !($_SESSION[_VAR_BANNED_] || $_SESSION[_VAR_LOGGED_]) );
		Rights::inst()->set( _RIGHTS_LOGGED_, $_SESSION[_VAR_LOGGED_] );
		*/
	}
	public function setControllerDir( $controller_dir )
	{
		if ( is_dir($controller_dir) )
		{
			$this->_controller_dir = $controller_dir;
		}
		else
		{
			throw new CoreException( CoreException::INVALID_CONTROLLER_DIR );
		}
	}
	/**
	 * Charge un module
	 * @param string $module
	 */
	private function _loadModule( $module )
	{
		if ( file_exists(
			$this->_controller_dir . '/' . $module . 'Controller.php'
		) )
		{
			require_once
				$this->_controller_dir . '/'. $module . 'Controller.php';
			if (
				class_exists($module.'Controller')
				&& get_parent_class($module.'Controller') == 'Controller'
			)
			{
				$this->_module = $module . 'Controller';
			}
			else
			{
				throw new CoreException( CoreException::NOT_A_MODULE );
			}
		}
		else
		{
			throw new CoreException( CoreException::MODULE_NOT_FOUND );
		}
	}
	/**
	 * Charge une action
	 * @param string $action
	 */
	private function _loadAction( $action )
	{
		try
		{
			$module = $this->_module;
			if ( $module::inst()->isRunnable($action) )
			{
				$this->_action = $action;
			}
			else
			{
				throw new CoreException( CoreException::ACTION_NOT_RUNNABLE );
			}
		}
		catch ( ControllerException $e )
		{
			throw $e;
		}
	}
	/**
	 * Executer le moteur
	 * @public
	 */
	public function run()
	{
		$missing = Filter::missing( array(
			Filter::T_GET => array('m', 'a')
		) );
		
		try
		{
			if ( !$missing 
				&& !isset($missing[Filter::T_GET]['m']) )
			{
				$this->_loadModule( $_GET['m'] );
			}
			else
			{
				throw new CoreException( CoreException::MODULE_NOT_FOUND );
			}
		}
		catch ( CoreException $e )
		{
			$this->_loadModule( Core::DEFAULT_MODULE );
		}
		try
		{
			if ( !$missing 
				&& !isset($missing[Filter::T_GET]['a']) )
			{
				$this->_loadAction( $_GET['a'] );
			}
			else
			{
				throw new CoreException( CoreException::ACTION_NOT_RUNNABLE );
			}
		}
		catch ( Exception $e )
		{
			$this->_loadAction( Controller::DEFAULT_ACTION );
		}
		
		$module = $this->_module;
		$action = $this->_action;
		
		$module::inst()->setModels( $this->_models );
		$module::inst()->setSession( $this->_session );
		$this->_display( $module::inst()->$action() );
	}
	/**
	 * Envoyer le résultat au navigateur
	 * @private
	 */
	private function _display( IDisplayable $displayable )
	{
		//ob_start('ob_gzhandler');
		echo $displayable->display();
		//ob_end_flush();
	}
}

?>
