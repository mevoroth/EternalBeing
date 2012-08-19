<?php

/**
 * @file index.php
 * @version 1.0 13 juin 2010
 * @author Daniel "Skana" Quach
 * @brief Index
 */

/**
 * Dossier courant
 * @var string
 */
define( '_ROOT_PATH_', dirname(__FILE__) );

// Execution du script de configuration
require_once _ROOT_PATH_.'/config.php';

// Chargement du moteur
require_once _MODULES_PATH_.'/Core.php';

Core::inst()->setControllerDir( _CONTROLLERS_PATH_ );

// Executer le moteur
Core::inst()->run();

?>
