/**
 * @author skana
 */
window.controller = window.controller || {};

controller.Game = function()
{
	controller.Controller.call( this );
	/// @TODO remove that shit
	//this._view = new view.Blank( this );
	this._view = new view.Blank( this );
	//this._running = true;
};
controller.Game.prototype = new controller.Controller();
controller.Game.prototype.constructor = controller.Game;

controller.Game.prototype.update = function( observable, arg )
{
	var self = this;
	var codes = [];
	codes[ajaxCode("SCRIPT_NEXT_SUCCESS")] = function( data )
	{
		console.log("SCRIPT_NEXT_SUCCESS");
		console.log(data);
		self._cutscene();
	};
	codes[ajaxCode("SCRIPT_NEXT_FAILED")] = function( data )
	{
		console.log("SCRIPT_NEXT_FAILED");
		console.log(data);
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Player&a=next",
		{},
		codes,
		errorCallback
	);
};

controller.Game.prototype.getInteraction = function( interaction )
{
	var self = this;
	return {
	}[interaction];
};
controller.Game.prototype.run = function()
{
	// this._selectWorld();
	// this._selectChar();
	this._autoLogin();
	// while ( this._running )
	// {
	// 	// Lire action
	// 	// Interpréter action
		
	// 	// Mode Carte|Battle|Dialogue
		
	// 	// Afficher
	// 	this._view.render();
		
	// 	// @TODO remove this shit
	// 	this._running = false;
	// }
};

controller.Game.prototype._selectWorld = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("SELECT_WORLD_SUCCESS")] = function( data )
	{
		self._selectChar();
		console.log("SELECT_WORLD_SUCCESS");
		console.log( data );
	};
	codes[ajaxCode("SELECT_WORLD_FAILED")] = function( data )
	{
		console.log("SELECT_WORLD_FAILED");
		console.log( data );
	};
	codes[ajaxCode("SELECT_WORLD_INVALID_PARAMS")] = function( data )
	{
		console.log("SELECT_WORLD_INVALID_PARAMS");
		console.log( data );
	};
	codes[ajaxCode("SELECT_WORLD_EMPTY_PARAMS")] = function( data )
	{
		console.log("SELECT_WORLD_EMPTY_PARAMS");
		console.log( data );
	};
	codes[ajaxCode("NOT_CONNECTED")] = function( data )
	{
		console.log("NOT_CONNECTED");
		console.log( data );
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Game&a=selectWorld",
		{
			id : 1
		},
		codes,
		errorCallback
	);
}

controller.Game.prototype._selectChar = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("SELECT_CHAR_SUCCESS")] = function( data )
	{
		console.log("SELECT_CHAR_SUCCESS");
		console.log( data );
		self._route();
	};
	codes[ajaxCode("SELECT_CHAR_FAILED")] = function( data )
	{
		console.log("SELECT_CHAR_FAILED");
		console.log( data );
	};
	codes[ajaxCode("SELECT_CHAR_INVALID_PARAMS")] = function( data )
	{
		console.log("SELECT_CHAR_INVALID_PARAMS");
		console.log( data );
	};
	codes[ajaxCode("SELECT_CHAR_EMPTY_PARAMS")] = function( data )
	{
		console.log("SELECT_CHAR_EMPTY_PARAMS");
		console.log( data );
	};
	codes[ajaxCode("WORLD_NOT_SELECTED")] = function( data )
	{
		console.log("WORLD_NOT_SELECTED");
		console.log( data );
	};
	codes[ajaxCode("NOT_CONNECTED")] = function( data )
	{
		console.log("NOT_CONNECTED");
		console.log( data );
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Game&a=selectCharacter",
		{
			id : 1
		},
		codes,
		errorCallback
	);
};
controller.Game.prototype._autoCharSelect = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("CHARACTER_SELECTED")] = function( data )
	{
		console.log("CHARACTER_SELECTED");
		console.log(data);
		self._route();
	};
	codes[ajaxCode("CHARACTER_NOT_SELECTED")] = function( data )
	{
		console.log("CHARACTER_NOT_SELECTED");
		console.log(data);
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Game&a=characterSelected",
		{},
		codes,
		errorCallback
	);
};
controller.Game.prototype._autoWorldSelect = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("WORLD_SELECTED")] = function( data )
	{
		console.log("WORLD_SELECTED");
		console.log(data);
		self._autoCharSelect();
	};
	codes[ajaxCode("WORLD_NOT_SELECTED")] = function( data )
	{
		self._selectWorld();
		console.log("WORLD_NOT_SELECTED");
		console.log(data);
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Game&a=worldSelected",
		{},
		codes,
		errorCallback
	);
};
controller.Game.prototype._autoLogin = function()
{
	//WORLD_SELECTED
	//WORLD_NOT_SELECTED
	//CHARACTER_NOT_SELECTED
	this._autoWorldSelect();
};
controller.Game.prototype._cutscene = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("ANIMATE")] = function( data )
	{
		self._view.animate( data.id, Animations.Character[data.animation] );
	};
	codes[ajaxCode("TALK")] = function( data )
	{
		console.log(data);
		self._view.talk( data.id, data.context );
	};
	codes[ajaxCode("IMPACT")] = function( data )
	{
		self._view.impact( data.id, Animations.Setting[data.animation] );
	};
	codes[ajaxCode("CHOOSE")] = function( data )
	{
		self._view.choose( data.context );
	};
	codes[ajaxCode("LAYOUT")] = function( data )
	{
		console.log(data);
		var animation = new Animations.Layout[data.animation]();
		animation.addObserver( self );
		self._view.layout( animation, data.context );
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Player&a=current",
		{},
		codes,
		errorCallback
	);
	//this._view.layout( Animations.Layout[1], {resource:"comet"} );
};
controller.Game.prototype._route = function()
{
	var self = this;
	var codes = [];
	codes[ajaxCode("ROUTE_BATTLE")] = function( data )
	{
		console.log("ROUTE_BATTLE");
		console.log( data );
	};
	codes[ajaxCode("ROUTE_CUTSCENE")] = function( data )
	{
		console.log("ROUTE_CUTSCENE");
		console.log( data );
		self._view = new view.Cutscene();
		self._view.render();
		self._cutscene();
	};
	codes[ajaxCode("ROUTE_MAP")] = function( data )
	{
		console.log("ROUTE_MAP");
		console.log( data );
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Player&a=route",
		{},
		codes,
		errorCallback
	);
};
