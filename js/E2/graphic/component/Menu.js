/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.Menu = function( cid, p, s )
{
	E2.graphic.component.Element.call( this, null, "menu_" + cid, p, s, {} );
};
E2.graphic.component.Menu.prototype = new E2.graphic.component.Element();
E2.graphic.component.Menu.prototype.constructor = E2.graphic.component.Menu;

E2.graphic.component.Menu.prototype.render = function()
{
	var container = $( "<div></div>" );
	container.attr( "id", this.getId() );
	$( "#" + this._parent ).append( container );
	E2.graphic.component.Element.prototype.render.call( this );
};
