<?php

require_once _DISPLAYERS_PATH_ . '/AjaxDisplay.php';

/** 
 * @author skana
 * 
 * 
 */
class GameDisplay extends AjaxDisplay
{
	const CODE_NEW_SUCCESS					= 0;
	const CODE_NEW_INVALID_PARAMS			= 1;
	const CODE_NEW_EMPTY_PARAMS				= 2;
	const CODE_LOAD_SUCCESS					= 3;
	const CODE_LOAD_LOGIN_FAILED			= 4;
	const CODE_LOAD_INVALID_PARAMS			= 5;
	const CODE_LOAD_EMPTY_PARAMS			= 6;
	const CODE_SELECT_WORLD_SUCCESS			= 7;
	const CODE_SELECT_WORLD_EMPTY_PARAMS	= 8;
	const CODE_SELECT_WORLD_INVALID_PARAMS	= 9;
	const CODE_SELECT_WORLD_FAILED			= 10;
	const CODE_SELECT_CHAR_SUCCESS			= 11;
	const CODE_SELECT_CHAR_EMPTY_PARAMS		= 12;
	const CODE_SELECT_CHAR_INVALID_PARAMS	= 13;
	const CODE_SELECT_CHAR_FAILED			= 14;
}

?>
