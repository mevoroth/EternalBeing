/**
 * @author skana
 */
window.view = window.view || {};

view.Blank = function( controller )
{
	view.View.call( this, controller );
};
view.Blank.prototype = new view.View();
view.Blank.prototype.constructor = view.Blank;

view.Blank.prototype.render = function()
{
	view.View.prototype.render( this );
};
