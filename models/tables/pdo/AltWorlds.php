<?php

require_once _TABLES_PATH_ . '/Table.php';
require_once _TABLES_PATH_ . '/IAltWorlds.php';

require_once  _FETCH_PATH_ . '/FetchPdoAssoc.php';

require_once _TABLES_PATH_ . '/pdo/queries/AltWorlds.php';

/**
 * @author skana
 *
 */
class AltWorlds extends Table implements IAltWorlds
{
	/**
	 * @see IAltWorlds::worldExists()
	 */
	public function worldExists( $id )
	{
		$this->getDb()->query(
			Q_ALTWORLDS_R_WORLD_EXISTS,
			array(
				':id' => $id
			)
		);
		$exists = $this->getDb()->fetch( new FetchPdoAssoc() );
		return $exists[0]['world_exists'];
	}
	/**
	 * @see IAltWorlds::loadGame()
	 */
	public function loadGame( $id )
	{
		$this->getDb()->query(
			Q_ALTWORLDS_R_CHECKPOINT,
			array(
				':id' => $id
			)
		);
		$exists = $this->getDb()->fetch( new FetchPdoAssoc() );
		return $exists[0]['checkpoint'];
	}
}

?>
