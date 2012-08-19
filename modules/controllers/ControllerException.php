<?php

/** 
 * @author skana
 * 
 * 
 */
class ControllerException extends Exception
{
	const MODULE_NAME_NOT_DEFINED = 0;
	/**
	 * Génère une exception module
	 */
	public function __construct( $error )
	{
		//parent::__construct( $message, $code, $previous );
	}
}
?>