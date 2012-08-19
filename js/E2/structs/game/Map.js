/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.structs = E2.structs || {};
E2.structs.game = E2.structs.game || {};

/**
 * Map
 * @param {E2.structs.Point} camera Le point de la caméra
 */
E2.structs.game.Map = function( camera, mapinfo )
{
	this._camera = camera;
	this._settings = [];
	this._mapinfo = mapinfo;
	console.assert(false, "Faire les checks");
};
E2.structs.game.Map.prototype = new E2.structs.game.Renderable();
E2.structs.game.Map.prototype.constructor = E2.structs.game.Map;

/**
 * @param {E2.structs.game.Setting} setting Le décor
 */
E2.structs.game.Map.prototype.addSetting = function( setting )
{
	this._settings.push( setting );
};
E2.structs.game.Map.prototype.getCameraPoint = function()
{
	return this._camera;
};
E2.structs.game.Map.prototype.setContext = function( ctx )
{
	this._ctx = ctx;
};
E2.structs.game.Map.prototype.render = function()
{
	for (var i = 0, c = this._settings.length; i < c; ++i)
	{
		this._settings[i].render();
	}
};
