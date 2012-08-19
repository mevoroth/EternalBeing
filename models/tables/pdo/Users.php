<?php

require_once _TABLES_PATH_ . '/Table.php';
require_once _TABLES_PATH_ . '/IUsers.php';

require_once  _FETCH_PATH_ . '/FetchPdoAssoc.php';

require_once _TABLES_PATH_ . '/pdo/queries/Users.php';

require_once  _MODULES_PATH_ . '/Tools.php';

/**
 * @author skana
 *
 */
class Users extends Table implements IUsers
{
	/**
	 * @see IUsers::readUserFromLogin()
	 */
	public function readUserFromLogin( $login )
	{
		$this->getDb()->query(
			Q_USERS_R_USER_FROM_LOGIN,
			array(
				':mail' => $login
			)
		);
		return $this->getDb()->fetch( new FetchPdoAssoc() );
	}
	
	/**
	 * @see IUsers::createUser()
	 */
	public function createUser( $login, $password )
	{
		$this->getDb()->query(
			Q_USERS_C_USER,
			array(
				':mail' => $login,
				':pass' => Tools::hash($password)
			)
		);
	}
}

?>
