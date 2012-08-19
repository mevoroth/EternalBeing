/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.DrawableElement = function( cid, p, s )
{
	E2.graphic.component.Element.call( this, null, cid, p, s );
};
E2.graphic.component.DrawableElement.prototype =
	new E2.graphic.component.Element();
E2.graphic.component.DrawableElement.prototype.constructor =
	E2.graphic.component.DrawableElement;

E2.graphic.component.DrawableElement.prototype.render = function()
{
	E2.graphic.component.Element.prototype.render.call( this );
};
