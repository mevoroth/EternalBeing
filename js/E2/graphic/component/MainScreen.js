/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.MainScreen = function( cid )
{
	E2.graphic.component.Element.call(
		this,
		null,
		cid,
		new E2.structs.Point(0, 0),
		new E2.structs.Size(
			E2.Graphic.SCREEN_WIDTH,
			E2.Graphic.SCREEN_HEIGHT
		),
		{}
	);
};
E2.graphic.component.MainScreen.prototype = new E2.graphic.component.Element();
E2.graphic.component.MainScreen.prototype.constructor =
	E2.graphic.component.MainScreen;

E2.graphic.component.MainScreen.prototype.render = function()
{
	E2.graphic.component.Element.prototype.render.call( this );
};
