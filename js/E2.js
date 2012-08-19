/**
 * @author Skana
 */

/**
 * E² (Eternal Engine)
 */
var E2 = Class.create
({
	initialize : function( display )
	{
		this._display = display;
		this._display_component = new E2.Component.Element(
			this._display,
			new E2.Point( 0, 0 ),
			new E2.Size( 640, 480 )
		);
		this._components = new Array();
	},
	/**
	 * @param {E2.Component} c Le composant affichable
	 */
	add : function( c )
	{
		if ( this._components.indexOf(c) )
		{
			throw _("Le composant est déjà chargé.");
		}
		this._components[c.getId()] = c;
	},
	remove : function( key )
	{
		if ( typeof(this._components[key]) === "undefined" )
		{
			throw _("Le composant n'a pas été chargé.");
		}
		delete this._components[key];
	},
	get : function( key )
	{
		if ( typeof(this._components[key]) === "undefined" )
		{
			throw _("Le composant n'a pas été chargé.");
		}
		return this._components[key];
	}
});
