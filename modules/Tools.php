<?php

/** 
 * @author skana
 * 
 * 
 */
class Tools
{
	/**
	 * @var string Sel pour hash
	 */
	const SALT = '$1$CVa4LYpv$P369AMiojeaq.XSgoNmjF1';
	/**
	 * Hashe une chaîne de caractères
	 * @param string $string La chaîne
	 * @return string
	 */
	public static function hash( $string )
	{
		return sha1( Tools::SALT . $string, true );
	}
	/**
	 * Convertit un entier 32 bits en binaire
	 * @param int $int32 L'entier
	 * @return string
	 */
	public static function int32ToBin( $int32 )
	{
		return chr(($int32 >> 24) & 0xFF)
			  .chr(($int32 >> 16) & 0xFF)
			  .chr(($int32 >> 8) & 0xFF)
			  .chr($int32 & 0xFF);
	}
}

?>
