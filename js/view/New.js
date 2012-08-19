/**
 * @author skana
 */
window.view = window.view || {};

view.New = function( controller )
{
	view.View.call( this, controller );
	this._engine = new E2.Graphic(
		"body"
	);
	// Formulaire
	var form = new E2.graphic.component.Form(
		"new",
		new E2.structs.Point(0, 0),
		new E2.structs.Size(0, 0),
		{
			submit : this._controller.getInteraction("create")
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
		form.addChild(
			new E2.graphic.component.Input(
				"confpass",
				new E2.structs.Point(0, 100),
				new E2.structs.Size(100, 50),
				{
					label : "Confirmation du mot de passe"
				}
			)
		);
	// Menu
	var menu = new E2.graphic.component.Menu(
		"newMenu",
		new E2.structs.Point(0, 150),
		new E2.structs.Size(0, 0)
	);
		menu.addChild(
			new E2.graphic.component.MenuElement(
				"new",
				new E2.structs.Point(0, 150),
				new E2.structs.Size(100, 50),
				{
					label : "Nouveau jeu",
					link : this._controller.getInteraction("create")
				}
			)
		);
		menu.addChild(
			new E2.graphic.component.MenuElement(
				"back",
				new E2.structs.Point(0, 200),
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
view.New.prototype = new view.View();
view.New.prototype.constructor = view.New;

view.New.prototype.render = function()
{
	this._engine.render();
};

view.New.prototype.clear = function()
{
	this._engine.unloadAll();
};

