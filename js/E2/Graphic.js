/**
 * @author Skana
 */

/**
 * Eternal Graphic Engine
 */
window.E2 = window.E2 || {};

/**
 * Crée un écran
 * @param {String} Id de la div
 */
E2.Graphic = function( display )
{
	$( "body" ).css( "margin", 0 ); // Patch
	this._display = new E2.graphic.component.MainScreen( display );
	this._components = new Array();
};

E2.Graphic.SCREEN_WIDTH = window.innerWidth;
E2.Graphic.SCREEN_HEIGHT = window.innerHeight;

/**
 * Charge un composant
 * @param {E2.graphic.component.Element} component
 */
E2.Graphic.prototype.load = function( component )
{
	this._display.addChild( component );
};
/**
 * Décharge un composant
 * @param {String} key
 */
E2.Graphic.prototype.unload = function( key )
{
	this._display.removeChild( key );
};
E2.Graphic.prototype.unloadAll = function()
{
	this._display.removeChilds();
}
E2.Graphic.prototype.render = function()
{
	this._display.render();
};
