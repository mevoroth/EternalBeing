<?php

require_once _DISPLAYERS_PATH_ . '/AjaxDisplay.php';

/** 
 * @author skana
 * 
 * 
 */
class PlayerDisplay extends AjaxDisplay
{
	const CODE_ROUTE_BATTLE			= 0;
	const CODE_ROUTE_CUTSCENE		= 1;
	const CODE_ROUTE_MAP			= 2;
	
	const CODE_ANIMATE				= 10;
	const CODE_TALK					= 11;
	const CODE_IMPACT				= 12;
	const CODE_CHOOSE				= 13;
	const CODE_LAYOUT				= 14;

	const CODE_SCRIPT_NEXT_SUCCESS	= 100;
	const CODE_SCRIPT_NEXT_FAILED	= 101;
}

?>
