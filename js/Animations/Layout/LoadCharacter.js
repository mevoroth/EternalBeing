window.Animations = window.Animations || {};
Animations.Layout = Animations.Layout || [];

Animations.Layout["LOAD_CHARACTER"] = function() {};

Animations.Layout["LOAD_CHARACTER"].prototype = new tools.Observable();
Animations.Layout["LOAD_CHARACTER"].prototype.constructor =
	Animations.Layout["LOAD_CHARACTER"];

Animations.Layout["LOAD_CHARACTER"].prototype.setCutscene = function( cutscene )
{
	this._cutscene = cutscene;
};
Animations.Layout["LOAD_CHARACTER"].prototype.setResource = function( resource )
{
	this._resource = resource;
};
Animations.Layout["LOAD_CHARACTER"].prototype.setContext = function( context )
{
	this._context = context;
};
Animations.Layout["LOAD_CHARACTER"].prototype.run = function()
{
	this._cutscene.loadCharacter(
		new E2.structs.game.Character(
			this._resource,
			new E2.structs.Point(this._context.point.x, this._context.point.y),
			E2.structs.Direction.EAST,
			this._resource + "_sprite",
			this._resource + "_avatar",
			this._context.name
		)
	);
	this._cutscene.render();
	this.setChanged();
	this.notifyObservers();
};
