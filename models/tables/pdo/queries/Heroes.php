<?php

/**
 * @var string Vérifie l'existence du personnage dans un monde
 */
define(
	'Q_HEROES_R_CHARACTER_EXISTS',
	'SELECT ' . "\n" .
		'IF(COUNT(`heroes`.`idheroes`) > 0,' .
			'1,' .
			'0) AS character_exists' . "\n" .
	'FROM `heroes`' . "\n" .
	'WHERE `heroes`.`idheroes`=:cid ' .
		'AND `heroes`.`alt_worlds_idalt_worlds`=:wid'
);

?>
