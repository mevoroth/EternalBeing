/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.Form = function( cid, p, s, params )
{
	E2.graphic.component.Element.call(
		this,
		null,
		"form_" + cid,
		p,
		s,
		params
	);
};
E2.graphic.component.Form.prototype = new E2.graphic.component.Element();
E2.graphic.component.Form.prototype.constructor =
	E2.graphic.component.Form;

E2.graphic.component.Form.prototype.render = function()
{
	var form = $( "<form></form>" );
	form.attr( "id", this.getId() );
	$( "#" + this._parent ).append( form );
	E2.graphic.component.Element.prototype.render.call( this );
}
