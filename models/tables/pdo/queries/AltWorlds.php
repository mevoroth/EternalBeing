<?php

/**
 * @var string Vérifie l'existence du monde
 */
define(
	'Q_ALTWORLDS_R_WORLD_EXISTS',
	'SELECT ' . "\n" .
		'IF (COUNT(`alt_worlds`.`idalt_worlds`) > 0,' .
			'1,' .
			'0) AS world_exists' . "\n" .
	'FROM `alt_worlds`' . "\n" .
	'WHERE `alt_worlds`.`idalt_worlds`=:id'
);
/**
 * @var string Récupère le checkpoint
 */
define(
	'Q_ALTWORLDS_R_CHECKPOINT',
	'SELECT `alt_worlds`.`checkpoint`' . "\n" .
	'FROM `alt_worlds`' . "\n" .
	'WHERE `alt_worlds`.`idalt_worlds`=:id'
);

?>
