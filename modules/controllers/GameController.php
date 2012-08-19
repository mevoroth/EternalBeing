<?php

if ( !defined('_CONTROLLERS_PATH_') )
{
	die();
}

require_once _EXT_PATH_ . '/Filter/Filter.php';
require_once _CONTROLLERS_PATH_ . '/Controller.php';
require_once _DISPLAYERS_PATH_ . '/ajax/GameDisplay.php';
require_once _DISPLAYERS_PATH_ . '/html/DefaultLayoutDisplay.php';

/**
 * Contrôleur de l'écran de jeu
 */
class GameController extends Controller
{
	const MODULE_NAME = 'Game';
	
	function __construct()
	{
		parent::__construct();
		
		$this->_addAction( 'create' );
		$this->_addAction( 'load' );
		$this->_addAction( 'loaded' );
		$this->_addAction( 'worldSelected' );
		$this->_addAction( 'characterSelected' );
		$this->_addAction( 'showCharacters' );
		$this->_addAction( 'createCharacter' );
		$this->_addAction( 'selectCharacter' );
		$this->_addAction( 'showWorlds' );
		$this->_addAction( 'createWorld' );
		$this->_addAction( 'selectWorld' );
		$this->_addAction( 'config' );
	}
	/**
	 * Vérifie si le joueur a chargé sa partie
	 * @return IDisplayable
	 */
	public function loaded()
	{
		$display = new GameDisplay();
		$display->set(
			'code',
			$this->_getSession()->logged()
				? AjaxDisplay::CODE_CONNECTED
				: AjaxDisplay::CODE_NOT_CONNECTED
		);
		return $display;
	}
	/**
	 * Vérifie si le joueur a choisi un monde
	 * @return IDisplayable
	 */
	public function worldSelected()
	{
		$display = new GameDisplay();
		$display->set(
			'code',
			$this->_getSession()->worldSelected()
				? AjaxDisplay::CODE_WORLD_SELECTED
				: AjaxDisplay::CODE_WORLD_NOT_SELECTED
		);
		return $display;
	}
	/**
	 * Vérifie si le joueur a choisi son personnage
	 * @return IDisplayable
	 */
	public function characterSelected()
	{
		$display = new GameDisplay();
		$display->set(
			'code',
			$this->_getSession()->characterSelected()
				? AjaxDisplay::CODE_CHARACTER_SELECTED
				: AjaxDisplay::CODE_CHARACTER_NOT_SELECTED
		);
		return $display;
	}

	/**
	 * Créer une nouvelle partie
	 * @return IDisplayable
	 */
	public function create()
	{
		$display = new GameDisplay();
		$missing = Filter::missing( array(
			Filter::T_POST => array(
				'mail',
				'pass'
			)
		) );
		if ( !$missing )
		{
			$errors = Filter::invalids( array(
				Filter::T_POST => array(
					'mail' => array(
						array('filter' => FilterModules::getEmail()),
						array('filter' => FilterModules::getEmptyString())
					),
					'pass' => array(
						array('filter' => FilterModules::getEmptyString())
					)
				)
			) );
			if ( !$errors )
			{
				$this->_getModels()->createUser(
					$_POST['mail'],
					$_POST['pass']
				);
				$display->set( 'code', GameDisplay::CODE_NEW_SUCCESS );
			}
			else
			{
				$display->set( 'code',
					GameDisplay::CODE_NEW_INVALID_PARAMS );
				$display->set( 'errors', $errors );
			}
		}
		else
		{
			$display->set( 'code',
				GameDisplay::CODE_NEW_EMPTY_PARAMS );
			$display->set( 'errors', $missing );
		}
		return $display;
	}
	/**
	 * Continuer une partie
	 */
	public function load()
	{
		$missing = array(
			Filter::T_POST => array(
				'mail',
				'pass'
			)
		);
		
		$display = new GameDisplay();
		
		if ( !Filter::missing($missing) )
		{
			$errors = Filter::invalids( array(
				Filter::T_POST => array(
					'mail' => array(
						array('filter' => FilterModules::getEmail()),
						array('filter' => FilterModules::getEmptyString())
					)/*,
					'pass' => array(
						array('filter' => FilterModules::getEmptyString())
					)*/
					
				)
			) );
			if ( !$errors )
			{
				if ( $this->_getSession()->login($_POST['mail'],
					$_POST['pass']) )
				{
					$display->set( 'code', GameDisplay::CODE_LOAD_SUCCESS );
				}
				else
				{
					$display->set( 'code',
						GameDisplay::CODE_LOAD_LOGIN_FAILED );
				}
			}
			else
			{
				$display->set( 'code', GameDisplay::CODE_LOAD_INVALID_PARAMS );
				$display->set( 'errors', $errors );
			}
		}
		else
		{
			$display->set( 'code', GameDisplay::CODE_LOAD_EMPTY_PARAMS );
			$display->set( 'errors', $missing );
		}
		return $display;
	}
	public function createWorld()
	{
	}
	public function showWorlds()
	{
		$display = new GameDisplay();
		if ( $this->_getSession()->logged() )
		{
			
		}
		else
		{
			$display->set( 'code', AjaxDisplay::CODE_NOT_CONNECTED );
		}
		return $display;
	}
	public function selectWorld()
	{
		$display = new GameDisplay();
		if ( $this->_getSession()->logged() )
		{
			$missing = Filter::missing( array(
				Filter::T_POST => array(
					'id'
				)
			) );
			if ( !$missing )
			{
				$errors = Filter::invalids( array(
					Filter::T_POST => array(
						'id' => array(
							array('filter' => FilterModules::getInt())
						)
					)
				) );
				if ( !$errors )
				{
					if ( !$this->_getSession()->worldSelected()
						&& $this->_getSession()->selectWorld($_POST['id']) )
					{
						$display->set( 'code',
							GameDisplay::CODE_SELECT_WORLD_SUCCESS );
					}
					else
					{
						$display->set( 'code',
							GameDisplay::CODE_SELECT_WORLD_FAILED );
					}
				}
				else
				{
					$display->set( 'code',
						GameDisplay::CODE_SELECT_WORLD_INVALID_PARAMS );
					$display->set( 'errors', $errors );
				}
			}
			else
			{
				$display->set( 'code',
					GameDisplay::CODE_SELECT_WORLD_EMPTY_PARAMS );
				$display->set( 'errors', $missing );
			}
		}
		else
		{
			$display->set( 'code', AjaxDisplay::CODE_NOT_CONNECTED );
		}
		return $display;
	}
	public function createCharacter()
	{
	}
	public function showCharacters()
	{
		$display = new GameDisplay();
		if ( $this->_getSession()->logged() )
		{
			
		}
		else
		{
			
		}
	}
	public function selectCharacter()
	{
		$display = new GameDisplay();
		if ( $this->_getSession()->logged() )
		{
			if ( $this->_getSession()->worldSelected() )
			{
				$missing = Filter::missing( array(
					Filter::T_POST => array(
						'id'
					)
				) );
				if ( !$missing )
				{
					$errors = Filter::invalids( array(
						Filter::T_POST => array(
							'id' => array(
								array('filter' => FilterModules::getInt())
							)
						)
					) );
					if ( !$errors )
					{
						if ( !$this->_getSession()->characterSelected()
							&& $this->_getSession()->selectCharacter(
								$_POST['id']
							) )
						{
							$display->set( 'code',
								GameDisplay::CODE_SELECT_CHAR_SUCCESS );
						}
						else
						{
							$display->set( 'code',
								GameDisplay::CODE_SELECT_CHAR_FAILED );
						}
					}
					else
					{
						$display->set( 'code',
							GameDisplay::CODE_SELECT_CHAR_INVALID_PARAMS );
						$display->set( 'errors', $errors );
					}
				}
				else
				{
					$display->set( 'code',
						GameDisplay::CODE_SELECT_CHAR_EMPTY_PARAMS );
					$display->set( 'errors', $missing );
				}
			}
			else
			{
				$display->set( 'code', AjaxDisplay::CODE_WORLD_NOT_SELECTED );
			}
		}
		else
		{
			$display->set( 'code', AjaxDisplay::CODE_NOT_CONNECTED );
		}
		return $display;
	}
	/**
	 * Configurer les paramètres d'une partie
	 */
	public function configGame()
	{
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
