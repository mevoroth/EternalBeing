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
E2.events.SubmitEvent = function( id, callback )
{
	E2.events.Event.call( this, id, callback );
	$( "#" + this._id ).submit( callback );
	$( "#" + this._id ).attr( "action",
		"javascript:" +
			"E2.Events.inst().getEvent('" + this._id + "').trigger();" +
			"void(0);" );
};

E2.events.SubmitEvent.prototype = new E2.events.Event();
E2.events.SubmitEvent.prototype.constructor = E2.events.SubmitEvent;
