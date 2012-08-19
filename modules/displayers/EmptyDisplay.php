<?php

require_once _DISPLAYERS_PATH_ . '/IDisplayable.php';

/** 
 * @author skana
 * 
 * 
 */
class EmptyDisplay implements IDisplayable
{
	/**
	 * @param string $key
	 * @param mixed $value
	 * @see IDisplayable::set()
	 */
	public function set( $key, $value )
	{
	}
	/**
	 * 
	 * @see IDisplayable::display()
	 */
	public function display()
	{
		//echo "test";
	}
}
?>