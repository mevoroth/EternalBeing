/**
 * @author skana
 */ 
window.E2 = window.E2 || {};
E2.graphic = E2.graphic ||{};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.Canvas = function( cid, p, s, params )
{
	E2.graphic.component.Element.call( this, null, "canvas_" + cid, p, s,
		params );
	this._canvas = null;
};

E2.graphic.component.Canvas.prototype = new E2.graphic.component.Element();
E2.graphic.component.Canvas.prototype.constructor =
	E2.graphic.component.Canvas;

E2.graphic.component.Canvas.prototype._getCanvas = function()
{
	this._canvas = this._canvas ||
		document.getElementById( this.getId() ).getContext('2d');
	return this._canvas;
};

E2.graphic.component.Canvas.prototype.render = function()
{
	var container = $( "<canvas></canvas>" );
	var size = this.getSize();
	container.attr( "id", this.getId() );
	container.css( "width", size.getWidth() );
	container.css( "height", size.getHeight() );
	$( "#" + this._parent ).append( container );
	E2.graphic.component.Element.prototype.render.call( this );
};
