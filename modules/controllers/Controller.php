<?php

/**
 * @file Controller.php
 * @version 1.0 15 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Modèle abstrait de module
 */

if ( !defined('_MODULES_PATH_') )
{
	die();
}

require_once _CONTROLLERS_PATH_ . '/ControllerException.php';
require_once _PATTERNS_PATH_ . '/Singleton.php';
require_once _MODELS_PATH_ . '/Models.php';
require_once _DISPLAYERS_PATH_ . '/EmptyDisplay.php';

abstract class Controller extends Singleton
{
	/**
	 * Action par défaut
	 * @var string
	 */
	const DEFAULT_ACTION = 'run';
	/**
	 * Nom du module
	 * @var mixed
	 */
	const MODULE_NAME = null;
	
	/**
	 * Liste des actions
	 * @var array
	 */
	private $_actions = array(
		'run'
	);
	/**
	 * @var Models Requêtes
	 */
	private $_models;
	/**
	 * @var Session Gestionnaire de sessions
	 */
	private $_session;
	
	/**
	 * Ajouter une action
	 * @param string $action
	 */
	final protected function _addAction( $action )
	{
		$this->_actions[] = $action;
	}
	
	/**
	 * Requêtes
	 * @return Models
	 */
	final protected function _getModels()
	{
		return $this->_models;
	}
	/**
	 * Affecte le modèle au contrôleur
	 * @param Models $models
	 */
	final public function setModels( Models $models )
	{
		$this->_models = $models;
	}
	/**
	 * Gestionnaire de sessions
	 * @return Session
	 */
	final protected function _getSession()
	{
		return $this->_session;
	}
	/**
	 * Affecte le gestionnaire de sessions
	 * @param Session $session
	 */
	final public function setSession( Session $session )
	{
		$this->_session = $session;
	}
	/**
	 * Méthode par défaut d'un module
	 * @return IDisplayable
	 * @access public
	 */
	public function run()
	{
		return new EmptyDisplay();
	}
	/**
	 * Vérifie s'il s'agit d'une action légale
	 * @param string $action L'action
	 * @return bool
	 * @access public
	 */
	final public function isRunnable( $action )
	{
		if ( is_null(static::MODULE_NAME) ) 
		{
			throw new ControllerException(
				ControllerException::MODULE_NAME_NOT_DEFINED
			);
		}
		return in_array(
			$action,
			$this->_actions
		);
	}
}

?>
