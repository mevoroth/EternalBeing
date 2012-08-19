window.tools = window.tools || {};

tools.Observable = function()
{
	this._observers = [];
	this._changed = false;
};
/**
 * Ajouter un observeur
 * @param {tools.Observer} o Observer
 */
tools.Observable.prototype.addObserver = function( o )
{
	this._observers.push(o);
};
tools.Observable.prototype.clearChanged = function()
{
	this._changed = false;
};
tools.Observable.prototype.countObservers = function()
{
	return this._observers.length;
};
tools.Observable.prototype.deleteObserver = function( o )
{
	console.assert(false, "Not implemented");
};
tools.Observable.prototype.deleteObservers = function()
{
	delete this._observers;
	this._observers = [];
};
tools.Observable.prototype.hasChanged = function()
{
	return this._changed;
};
tools.Observable.prototype.notifyObservers = function()
{
	for (var i = 0, c = this._observers.length; i < c; ++i)
	{
		this.notifyObserver( this._observers[i] );
	}
};
tools.Observable.prototype.setChanged = function()
{
	this._changed = true;
};
tools.Observable.prototype.notifyObserver = function( o )
{
	o.update( this, {} );
};
