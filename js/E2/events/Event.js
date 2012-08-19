/**
 * @author skana
 */

/**
 * Eternal Graphic Engine
 */
window.E2 = window.E2 || {};
E2.events = E2.events || {};

/**
 * Crée l'événement
 */
E2.events.Event = function( id, callback )
{
	this._id = id;
	this._callback = callback;
};

E2.events.Event.prototype.trigger = function()
{
	this._callback();
	return false;
};
