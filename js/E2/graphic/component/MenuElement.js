/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.MenuElement = function( cid, p, s, params )
{
	E2.graphic.component.Element.call( this, null, "menuElement_" + cid, p, s,
		params );
};
E2.graphic.component.MenuElement.prototype =
	new E2.graphic.component.Element();
E2.graphic.component.MenuElement.prototype.constructor =
	E2.graphic.component.MenuElement;

E2.graphic.component.MenuElement.prototype.render = function()
{
	var container = $( "<div></div>" );
	container.attr( "id", this.getId() );
	
	var link = $( "<a></a>" );
	link.attr( "href", "javascript:void(0);" );
	link.click( this._params.link );
	link.append( this._params.label );
	
	container.append( link );
	
	$( "#" + this._parent ).append( container );
	E2.graphic.component.Element.prototype.render.call( this );
};
