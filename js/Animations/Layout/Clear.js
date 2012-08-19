window.Animations = window.Animations || {};
Animations.Layout = Animations.Layout || [];

Animations.Layout["CLEAR"] = function() {};

Animations.Layout["CLEAR"].prototype = new tools.Observable();
Animations.Layout["CLEAR"].prototype.constructor =
	Animations.Layout["CLEAR"];

Animations.Layout["CLEAR"].prototype.setCutscene = function( cutscene )
{
	this._cutscene = cutscene;
};
Animations.Layout["CLEAR"].prototype.setResource = function( resource )
{
	this._resource = resource;
};
Animations.Layout["CLEAR"].prototype.setContext = function( context )
{
	this._context = context;
};
Animations.Layout["CLEAR"].prototype.run = function()
{
	this._cutscene.render();
	this.setChanged();
	this.notifyObservers();
};
