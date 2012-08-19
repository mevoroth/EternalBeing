<?php

/**
 * @file config.php
 * @version 1.0 13 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Script de configuration
 */

if( !defined('_ROOT_PATH_') )
{
	die();
}

/**
 * @var string Dossier de configuration
 */
define( '_CONFIG_PATH_', _ROOT_PATH_ . '/config' );
/**
 * @var string Dossier des bibliothèques externes
 */
define( '_LIBS_PATH_', _ROOT_PATH_ . '/libs' );
/**
 * @var string Dossier des modules
 */
define( '_MODULES_PATH_', _ROOT_PATH_ . '/modules' );
	/**
	 * @var string Dossier des contrôleurs
	 */
	define( '_CONTROLLERS_PATH_', _MODULES_PATH_ . '/controllers' );
	/**
	 * @var string Dossier des afficheurs
	 */
	define( '_DISPLAYERS_PATH_', _MODULES_PATH_ . '/displayers' );
	/**
	 * @var string Dossier du gestionnaire de base de données
	 */
	define( '_DATABASE_PATH_', _MODULES_PATH_ . '/database' );
		/**
		 * @var string Dossier des drivers de base de données
		 */
		define( '_DRIVERS_PATH_', _DATABASE_PATH_ . '/drivers' );
		/**
		 * @var string Dossier des modules de fetch
		 */
		define( '_FETCH_PATH_', _DATABASE_PATH_ . '/fetch' );
	/**
	 * @var string Dossier des extensions de session
	 */
	define( '_SESSION_PATH_', _MODULES_PATH_ . '/session' );
/**
 * @var string Dossier des patterns
 */
define( '_PATTERNS_PATH_', _ROOT_PATH_.'/patterns' );
/**
 * @var string Dossier des composants
 */
define( '_COMPONENTS_PATH_', _ROOT_PATH_.'/components' );
	/**
	 * @var string Structures de données algorithmiques
	 */
	define( '_DATASTRUCTS_PATH_',  _COMPONENTS_PATH_ . '/datastructures' );
	/**
	 * @var string Structures de données du jeu
	 */
	define( '_GAMESTRUCTS_PATH_',  _COMPONENTS_PATH_ . '/gamestructures' );
/**
 * @var string Dossier des extensions
 */
define( '_EXT_PATH_', _ROOT_PATH_ . '/ext' );
/**
 * @var string Dossier des modèles
 */
define( '_MODELS_PATH_', _ROOT_PATH_ . '/models' );
	/**
	 * @var string Dossier des tables
	 */
	define( '_TABLES_PATH_', _MODELS_PATH_ . '/tables' );
	/**
	 * @var string Dossier des scripts
	 */
	define( '_SCRIPTS_PATH_', _MODELS_PATH_ . '/scripts' );
/**
 * @var string Contenu
 */
define( '_CONTENT_PATH_', _ROOT_PATH_ . '/content' );

?>
