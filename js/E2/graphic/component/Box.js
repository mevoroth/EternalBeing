/**
 * @author skana
 */ 
window.E2 = window.E2 || {};
E2.graphic = E2.graphic ||{};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.Box = function( cid, p, s, params )
{
	E2.graphic.component.Element.call( this, null, "box_" + cid, p, s,
		params );
};

E2.graphic.component.Box.prototype = new E2.graphic.component.Element();
E2.graphic.component.Box.prototype.constructor = E2.graphic.component.Box;

/**
 * Id de la zone de contenu
 */
E2.graphic.component.Box.prototype.getContentArea = function()
{
	return this._cid + "_printable";
};

E2.graphic.component.Box.prototype.render = function()
{
	var container = $( "<div></div>" );
	container.attr( "id", this.getId() );
	var content = $( "<div></div>" );
	content.attr( "id", this.getContentArea() );
	container.append( content );
	$( "#body" ).append( container );
	E2.graphic.component.Element.prototype.render.call( this );
};
