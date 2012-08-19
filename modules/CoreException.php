<?php

/** 
 * @author skana
 * 
 * 
 */
class CoreException extends Exception
{
	const MODULE_NOT_FOUND = 0;
	const NOT_A_MODULE = 1;
	const ACTION_NOT_RUNNABLE = 2;
	const INVALID_CONTROLLER_DIR = 3;
	/**
	 * Crée une CoreException
	 */
	public function __construct( $error )
	{
		//parent::__construct( $message, $code, $previous );
	}
}

?>
