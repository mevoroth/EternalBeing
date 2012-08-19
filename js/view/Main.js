/**
 * @author skana
 */
window.view = window.view || {};

view.Main = function( controller )
{
	view.View.call( this, controller );
	this._engine = new E2.Graphic(
		"body"
	);
	var menu = new E2.graphic.component.Menu(
		"mainMenu",
		new E2.structs.Point(0, 0),
		new E2.structs.Size(0, 0)
	);
	var buttonSize = new E2.structs.Size(100, 50);
	menu.addChild(
		new E2.graphic.component.MenuElement(
			"new",
			new E2.structs.Point(0, 0),
			buttonSize,
			{
				label : "Nouveau jeu",
				link : this._controller.getInteraction("new")
			}
		)
	);
	menu.addChild(
		new E2.graphic.component.MenuElement(
			"continue",
			new E2.structs.Point(0, 50),
			buttonSize,
			{
				label : "Continuer",
				link : this._controller.getInteraction("continue")
			}
		)
	);
	menu.addChild(
		new E2.graphic.component.MenuElement(
			"config",
			new E2.structs.Point(0, 100),
			buttonSize,
			{
				label : "Paramètres",
				link : this._controller.getInteraction("config")
			}
		)
	);
	this._engine.load( menu );
};
view.Main.prototype = new view.View();
view.Main.prototype.constructor = view.Main;

view.Main.prototype.render = function()
{
	view.View.prototype.render( this );
	this._engine.render();
};

view.Main.prototype.clear = function()
{
	view.View.prototype.clear( this );
	this._engine.unloadAll();
};
