/**
 * @author skana
 */
window.view = window.view || {};

view.View = function( controller )
{
	this._controller = controller;
};

view.View.prototype.render = function() {};
view.View.prototype.clear = function() {};
