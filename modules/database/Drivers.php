<?php

require_once _DATABASE_PATH_ . '/drivers/PdoMySQL.php';

require_once _CONFIG_PATH_ . '/dbinfo.php';

/** 
 * @author skana
 * 
 * 
 */
class Drivers
{
	public static function getPdoMySQL()
	{
		return new PdoMySQL();
	}
}

?>
