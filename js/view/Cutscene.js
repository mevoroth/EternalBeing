/**
 * @author skana
 */
window.view = window.view || {};

view.Cutscene = function( controller )
{
	view.View.call( this, controller );
	this._engine = new E2.Graphic(
		"body"
	);
	this._cutscene = new E2.graphic.component.Cutscene(
		"map",
		new E2.structs.Point(0, 0),
		new E2.structs.Size(
			E2.Graphic.SCREEN_WIDTH,
			E2.Graphic.SCREEN_HEIGHT
		),
		{}
	);
	this._engine.load(
		this._cutscene
	);
};
view.Cutscene.prototype = new view.View();
view.Cutscene.prototype.constructor = view.Cutscene;

view.Cutscene.prototype.render = function()
{
	view.View.prototype.render( this );
	this._engine.render();
};
view.Cutscene.prototype.clear = function()
{
	view.View.prototype.clear( this );
};
/**
 * Animer un personnage
 * @param  {String} id          Id
 * @param  {Function} animation Animation
 * @return {void}
 */
view.Cutscene.prototype.animate = function( id, animation )
{
	console.assert(false, "Not implemented");
};
/**
 * Faire parler un personnage
 * @param  {String} id      Id
 * @param  {Object} context Contexte pour le dialogue
 * @return {void}
 */
view.Cutscene.prototype.talk = function( id, context )
{
	var buffer = '';
	for (var i in context)
	{
		buffer += context[i].text + '\n';
	}
	this._cutscene.talk( id, buffer );
};
/**
 * Impacter un décor
 * @param  {String} id          Id
 * @param  {Function} animation Animation
 * @return {void}
 */
view.Cutscene.prototype.impact = function( id, animation )
{
	console.assert(false, "Not implemented");
};
/**
 * Choisir
 * @param  {Object} context Contexte pour le choix
 * @return {Number}         Choix
 */
view.Cutscene.prototype.choose = function( context )
{
	console.assert(false, "Not implemented");
};
/**
 * Animation du layout
 * @param  {E2.graphic.Animation} animation Animation
 * @param  {Object}               context   Contexte
 * @return {void}
 */
view.Cutscene.prototype.layout = function( animation, context )
{
	animation.setContext( context );
	animation.setResource( context.resource );
	this._cutscene.layout( animation );
};
