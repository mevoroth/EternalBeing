/**
 * 
 */
/**
 * @param {Object} needle
 */
/*
Array.prototype.contains = function ( needle )
{
	for (i in this)
	{
		if (this[i] == needle)
		{
			return true;
		}
	}
	return false;
}
*/
/**
 * Signe du nombre
 * @param {Object} n
 */
Math.signum = function( n )
{
	if ( isNaN(n) )
	{
		// Erreur
	}
	if ( n > 0 )
	{
		return 1;
	}
	else if ( n < 0 )
	{
		return -1;
	}
	else
	{
		return 0;
	}
};



function include( file )
{
	dojo.require('dojo.io.script');
	dojo.io.script.get({
		url : "js/" + file + ".js"
	});
}
