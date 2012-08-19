<?php

require_once _PATTERNS_PATH_ . '/Singleton.php';

class ScriptEngine extends Singleton
{
	/**
	 * Charger un script à partir d'un checkpoint
	 * @param  int $checkpoint Checkpoint
	 * @return array
	 */
	public function load( $checkpoint )
	{
		return json_decode(
			file_get_contents(
				_CONTENT_PATH_ . '/scripts/' . $checkpoint . '.json'
			),
			true
		);
	}
}

?>
