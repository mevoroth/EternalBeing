window.E2 = window.E2 || {};
E2.structs = E2.structs || {};

E2.structs.Point = function( x, y )
{
	this._x = x;
	this._y = y;
};
/**
 * @param {int} x Abscisse
 */
E2.structs.Point.prototype.setX = function( x )
{
	this._x = x;
};
/**
 * @param {int} y Ordonnée
 */
E2.structs.Point.prototype.setY = function( y )
{
	this._y = y;
};
/**
 * @return Abscisse
 */
E2.structs.Point.prototype.getX = function()
{
	return this._x;
};
/**
 * @return Ordonnée
 */
E2.structs.Point.prototype.getY = function()
{
	return this._y;
};
/**
 * @param {E2.structs.Point} p
 */
E2.structs.Point.prototype.equals = function( p )
{
	return this._x == p._x
		&& this._y == p._y;
}
