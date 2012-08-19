/**
 * @author skana
 */

/**
 * Eternal Graphic Engine
 */
window.E2 = window.E2 || {};

/**
 * Crée le gestionnaire d'événement
 */
E2.Events = function()
{
	this._events = new Array();
};

E2.Events.prototype.addEvent = function( key, e )
{
	this._events[key] = e;
};

E2.Events.prototype.getEvent = function( key )
{
	return this._events[key];
};

E2.Events.inst = function()
{
	this.instance = this.instance || new E2.Events();
	return this.instance;
};
