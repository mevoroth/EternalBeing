/**
 * @author skana
 */
window.view = window.view || {};

view.Map = function( controller )
{
	view.View.call( this, controller );
	this._engine = new E2.Graphic(
		"body"
	);
	this._engine.load(
		new E2.graphic.component.Cutscene(
			"map",
			new E2.structs.Point(0, 0),
			new E2.structs.Size(
				E2.Graphic.SCREEN_WIDTH,
				E2.Graphic.SCREEN_HEIGHT
			),
			{}
		)
	);
};
view.Map.prototype = new view.View();
view.Map.prototype.constructor = view.Map;

view.Map.prototype.render = function()
{
	view.View.prototype.render( this );
	this._engine.render();
};
view.Map.prototype.clear = function()
{
	view.View.prototype.clear( this );
};
