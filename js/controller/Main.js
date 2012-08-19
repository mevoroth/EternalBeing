/**
 * @author skana
 */

window.controller = window.controller || {};

controller.Main = function()
{
	controller.Controller.call( this );
	this._view = new view.Blank( this );
};
controller.Main.prototype = new controller.Controller();
controller.Main.prototype.constructor = controller.Main;

controller.Main.prototype.getInteraction = function( interaction )
{
	var self = this;
	return {
		"new"		: function() { self._new(); },
		"create"	: function() { self._create(); },
		"continue"	: function() { self._continue(); },
		"load"		: function() { self._load(); },
		"config"	: function() { self._config(); },
		"mainMenu"	: function() { self._mainMenu(); }
	}[interaction];
};
controller.Main.prototype.run = function()
{
	this._autoLogin();
};
controller.Main.prototype._autoLogin = function()
{
	var codes = [];
	var self = this;
	codes[ajaxCode("NOT_CONNECTED")] = function( data )
	{
		self._mainMenu();
	};
	codes[ajaxCode("CONNECTED")] = function( data )
	{
		self._launchGame();
	};
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	request(
		"?m=Game&a=loaded",
		{},
		codes,
		errorCallback
	);
};
controller.Main.prototype._mainMenu = function()
{
	this._view.clear();
	this._view = new view.Main( this );
	//this._view = new view.Map( this );
	this._view.render();
};
/**
 * Affichage "Nouveau jeu"
 */
controller.Main.prototype._new = function()
{
	this._view.clear();
	this._view = new view.New( this );
	this._view.render();
};
/**
 * Appel serveur "Nouveau jeu"
 */
controller.Main.prototype._create = function()
{
	var vars = E2.graphic.component.Input.extract( ["login", "pass", "conf"] );
	console.log(vars);
	var self = this;
	var codes = [];
	codes[ajaxCode("NEW_SUCCESS")] = function( data )
	{
		console.log("NEW_SUCCESS");
		console.log(data);
		//self._view.clear();
		// @TODO Success case
	};
	codes[ajaxCode("NEW_INVALID_PARAMS")] = function( data )
	{
		console.log("NEW_INVALID_PARAMS");
		console.log(data);
		// @TODO Invalid parameters
	};
	codes[ajaxCode("NEW_EMPTY_PARAMS")] = function( data )
	{
		console.log("NEW_EMPTY_PARAMS");
		console.log(data);
		// @TODO Empty parameters
	};
	
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};
	// @TODO Faire la vérification
	
	request(
		"?m=Game&a=create",
		{
			mail : vars["login"],
			pass : vars["pass"]
		},
		codes,
		errorCallback
	);
};
/**
 * Affichage "Continuer"
 */
controller.Main.prototype._continue = function()
{
	this._view.clear();
	this._view = new view.Continue( this );
	this._view.render();
};
/**
 * Appel serveur "Continuer"
 */
controller.Main.prototype._load = function()
{
	var vars = E2.graphic.component.Input.extract( ["login", "pass"] );
	var self = this;
	var codes = [];
	codes[ajaxCode("LOAD_SUCCESS")] = function( data )
	{
		self._launchGame();
	};
	codes[ajaxCode("LOAD_LOGIN_FAILED")] = function( data )
	{
		console.log("LOAD_LOGIN_FAILED");
		console.log(data);
		// @TODO Login failed
	};
	codes[ajaxCode("LOAD_INVALID_PARAMS")] = function( data )
	{
		console.log("LOAD_INVALID_PARAMS");
		console.log(data);
		// @TODO Invalid parameters
	};
	codes[ajaxCode("LOAD_EMPTY_PARAMS")] = function( data )
	{
		console.log("LOAD_INVALID_PARAMS");
		console.log(data);
		// @TODO Empty parameters
	};
	
	// @TODO Faire la vérification
	
	var errorCallback = function( jqXHR, textStatus, errorThrown )
	{
		console.log(jqXHR);
		console.log(textStatus);
		console.log(errorThrown);
	};

	request(
		"?m=Game&a=load",
		{
			mail : vars["login"],
			pass : vars["pass"]
		},
		codes,
		errorCallback
	);
};

controller.Main.prototype._config = function()
{
	this._view.clear();
	this._view = new view.Config( this );
	this._view.render();
};
/**
 * Lance le jeu
 * @return {void}
 */
controller.Main.prototype._launchGame = function()
{
	this._view.clear();
	delete this._view;
	(new controller.Game()).run();
	// self._view = new view.Realm( new controller.Game() );
	// self._view.render();
};
