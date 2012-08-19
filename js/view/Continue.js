/**
 * @author skana
 */
window.view = window.view || {};

view.Continue = function( controller )
{
	view.View.call( this, controller );
	this._engine = new E2.Graphic(
		"body"
	);
	// Formulaire
	var form = new E2.graphic.component.Form(
		"continue",
		new E2.structs.Point(0, 0),
		new E2.structs.Size(0, 0),
		{
			submit : this._controller.getInteraction("load")
		}
	);
		form.addChild(
			new E2.graphic.component.Input(
				"login",
				new E2.structs.Point(0, 0),
				new E2.structs.Size(100, 50),
				{
					label : "Adresse E-Mail",
				}
			)
		);
		form.addChild(
			new E2.graphic.component.Input(
				"pass",
				new E2.structs.Point(0, 50),
				new E2.structs.Size(100, 50),
				{
					label : "Mot de passe"
				}
			)
		);
	// Menu
	var menu = new E2.graphic.component.Menu(
		"continueMenu",
		new E2.structs.Point(0, 100),
		new E2.structs.Size(0, 0)
	);
		menu.addChild(
			new E2.graphic.component.MenuElement(
				"load",
				new E2.structs.Point(0, 100),
				new E2.structs.Size(100, 50),
				{
					label : "Continuer",
					link : this._controller.getInteraction("load")
				}
			)
		);
		menu.addChild(
			new E2.graphic.component.MenuElement(
				"back",
				new E2.structs.Point(0, 150),
				new E2.structs.Size(100, 50),
				{
					label : "Retour",
					link : this._controller.getInteraction("mainMenu")
				}
			)
		);
	this._engine.load( form );
	this._engine.load( menu );
};
view.Continue.prototype = new view.View();
view.Continue.prototype.constructor = view.Continue;

view.Continue.prototype.render = function()
{
	this._engine.render();
};

view.Continue.prototype.clear = function()
{
	this._engine.unloadAll();
};
