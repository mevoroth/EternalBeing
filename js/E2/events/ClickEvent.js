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
E2.events.ClickEvent = function( id, callback )
{
	E2.events.Event.call( this, id, callback );
	$( "#" + this._id ).click( callback );
};

E2.events.ClickEvent.prototype = new E2.events.Event();
E2.events.ClickEvent.prototype.constructor = E2.events.ClickEvent;
