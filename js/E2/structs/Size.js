window.E2 = window.E2 || {};
E2.structs = E2.structs || {};

E2.structs.Size = function( width, height )
{
	this.setWidth( width );
	this.setHeight( height );
};

E2.structs.Size.prototype.setWidth = function( w )
{
	this._w = w;
};
E2.structs.Size.prototype.setHeight = function( h )
{
	this._h = h;
};
E2.structs.Size.prototype.getWidth = function()
{
	return this._w;
};
E2.structs.Size.prototype.getHeight = function()
{
	return this._h;
};
// E2.structs.Size.prototype.isometricHeightLimiting = function()
// {
// 	return this._h*2 <= this._w;
// };
// E2.structs.Size.prototype.isometricWidthLimiting = function()
// {
// 	return this._w <= this._h*2;
// };
