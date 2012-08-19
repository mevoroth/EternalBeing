/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.animation = E2.graphic.animation || {};

/**
 * Crée l'animation
 * @param {E2.graphic.component.Element} element Composant
 * @param {JSON} params Paramètres
 */
E2.graphic.animation.Animation = function( element, params )
{
	this._element	= element;
	this._params	= params; 
};
/**
 * Exécute l'animation
 */
E2.graphic.animation.Animation.prototype.execute = function() {};
