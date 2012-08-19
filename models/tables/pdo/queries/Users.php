<?php

/**
 * @var string Lit l'enregistrement à partir du login
 */
define(
	'Q_USERS_R_USER_FROM_LOGIN',
	'SELECT `users`.`idusers`, `users`.`pass`' . "\n" .
	'FROM `users`' . "\n" .
	'WHERE `users`.`mail`=:mail' . "\n" .
	'LIMIT 1'
);
/**
 * @var string Crée un utilisateur
 */
define(
	'Q_USERS_C_USER',
	'INSERT INTO `users`(`mail`, `pass`)' . "\n" .
	'VALUES (:mail, :pass)'
);

?>
