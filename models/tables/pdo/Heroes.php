<?php

require_once _TABLES_PATH_ . '/Table.php';
require_once _TABLES_PATH_ . '/IHeroes.php';

require_once _FETCH_PATH_ . '/FetchPdoAssoc.php';

require_once _TABLES_PATH_ . '/pdo/queries/Heroes.php';

/**
 * @author skana
 *
 */
class Heroes extends Table implements IHeroes
{
	/**
	 * @see IHeroes::characterExists()
	 */
	public function characterExists( $wid, $cid )
	{
		$this->getDb()->query(
			Q_HEROES_R_CHARACTER_EXISTS,
			array(
				':wid' => $wid,
				':cid' => $cid
			)
		);
		$exists = $this->getDb()->fetch( new FetchPdoAssoc() );
		return $exists[0]['character_exists'];
	}
}

?>
