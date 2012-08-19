/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

/**
 * @param {String} parent Element père
 * @param {String} cid Id du composant
 * @param {E2.structs.Point} p Position du composant
 * @param {E2.structs.Size} s Taille du composant
 * @param {Array} params Paramètres optionnels
 */
E2.graphic.component.Element = function( parent, cid, p, s, params )
{
	this._parent = parent;
	this._cid = cid;
	this._p = p;
	this._s = s;
	this._childs = new Array();
	this._params = params;
};

E2.graphic.component.Element.prototype.setParent = function( parent )
{
	this._parent = parent;
};
E2.graphic.component.Element.prototype.getParent = function()
{
	return this._parent;
}
E2.graphic.component.Element.prototype.setPoint = function( p )
{
	var dx = p.getX() - this._p.getX();
	var dy = p.getY() - this._p.getY();
	for ( var i = 0; i < this._childs.length; ++i )
	{
		var child_p = this._childs[i].getPoint();
		this._childs[i].setPoint(
			new E2.structs.Point(
				dx + child_p.getX(),
				dy + child_p.getY()
			)
		);
	}
	this._p = p;
	$( "#" + this._cid ).css( "top", ~~(p.getY()) + "px" );
	$( "#" + this._cid ).css( "left", ~~(p.getX()) + "px" );
};

E2.graphic.component.Element.prototype.getPoint = function()
{
	return this._p;
};

E2.graphic.component.Element.prototype.setSize = function( s )
{
	this._s = s;
	$( "#" + this._cid ).css( "height", this._s.getHeight() + "px" );
	$( "#" + this._cid ).css( "width", this._s.getWidth() + "px" );
};

E2.graphic.component.Element.prototype.getSize = function()
{
	return this._s;
};

E2.graphic.component.Element.prototype.getId = function()
{
	return this._cid;
};
/**
 * @param {JSON} params
 */
E2.graphic.component.Element.prototype.setParams = function( params )
{
	this._params = params;
};
/**
 * @param {E2.graphic.component.Element} c
 */
E2.graphic.component.Element.prototype.addChild = function( c )
{
	c.setParent( this._cid );
	this._childs.push( c );
};

E2.graphic.component.Element.prototype.removeChild = function( c )
{
	for ( var i = 0; i < this._childs.length
		&& this._childs[i].getId() !== c; ++i );
	return i < this._childs.length
		&& this._childs[i].removeChilds();
};

E2.graphic.component.Element.prototype.removeChilds = function()
{
	for ( var i = 0; i < this._childs.length; ++i )
	{
		this._childs[i].removeChilds();
		$( "#" + this._childs[i].getId() ).remove();
		delete this._childs[i];
	}
	delete this._childs;
	return true;
};

E2.graphic.component.Element.prototype.render = function()
{
	for ( var i = 0; i < this._childs.length; ++i )
	{
		this._childs[i].render();
	}
	this.setPoint( this._p );
	this.setSize( this._s );
	$( "#" + this._cid ).css( "position", "relative" );
};
