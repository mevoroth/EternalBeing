/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic ||{};
E2.graphic.component = E2.graphic.component || {};

/**
 * @params params Contient la scène initiale
 * 	? map
 *	Array characters
 */
E2.graphic.component.Cutscene = function( cid, p, s, params )
{
	E2.graphic.component.Canvas.call( this, "scene_" + cid, p, s,
		params );

	// TODO : Controle des vars
	if ( typeof(params.characters) === "undefined" )
	{
		params.characters = new Array();
	}
	/*params.characters.push(
		new E2.structs.game.Character(
			"proto",
			new E2.structs.Point(0, 0),
			E2.structs.Direction.NORTH,
			"proto",
			null
		)
	);*/

	/**
	 * Array
	 * 	{
	 * 		getId() : récupère l'id du personnage
	 * 		getSprite() : récupère le sprite du personnage
	 * 		getPoint() : récupère la position sur la carte
	 * 	}
	 */
	this._characters = params.characters;
	/**
	 * 	{
	 * 		getCameraPoint() : récupère la position de la caméra par rapport à
	 * 						   la carte
	 * 		getSquare(x, y) : récupère la case
	 * 	}
	 */
	console.assert(false, "REMOVE THAT SHIT");
	this._map = params.map || new E2.structs.game.Map();
};

E2.graphic.component.Cutscene.prototype = new E2.graphic.component.Canvas();
E2.graphic.component.Cutscene.prototype.constructor =
	E2.graphic.component.Cutscene;

E2.graphic.component.Cutscene.prototype.render = function()
{
	$( "#" + this.getParent() ).empty();
	E2.graphic.component.Canvas.prototype.render.call( this );
	var size = this.getSize();
	// var center = new E2.structs.Point(
	// 	(size.getWidth()*0.5) >> 0,
	// 	(size.getHeight()*0.5) >> 0
	// );
	// var blocsize = new E2.structs.Size( 32, 32 );
	// var blocs = new E2.structs.Size(
	// 	~~(size.getWidth()/blocsize.getWidth()),
	// 	~~(size.getHeight()/blocsize.getHeight())
	// );
	// var canvas = this._getCanvas();

	// Tracer la map
	this._drawMap();

	// TODO : Tracer les personnages
	this._drawChars();
	//this.makeTalk( null, "Bonjour ! Ceci est un test !" );
};
E2.graphic.component.Cutscene.prototype._drawMap = function()
{
	this._map.render();
	console.assert(false, "Not implemented");
};
E2.graphic.component.Cutscene.prototype._drawChars = function()
{
	var container = $( "<div>" ).attr( "id", "characters" );
	for (var i = 0, c = this._characters.length; i < c; ++i)
	{
		this._characters[i].setContext({
			container : container
		});
		this._characters[i].render();
	}
	$( "#" + this.getParent() ).append( container );
};
/**
 * @param animation La fonction d'animation
 * @todo Faire les commentaires
 */
E2.graphic.component.Cutscene.prototype.animate = function( id, animation )
{
	console.assert(false, "Trouver le personnage");
	console.assert(false, "character.animate()");
};
E2.graphic.component.Cutscene.prototype.talk = function( id, cue )
{
	var dialog = this._getDialogBox();
	var character = null;
	for (var i = 0, c = this._characters.length; i < c; ++i)
	{
		if ( this._characters[i].getId() === id )
		{
			character = this._characters[i];
			break;
		}
	}
	if ( character === null )
	{
		// TODO : Char non trouvé
	}
	// TODO : PROTOTYPE A RETIRER
	/*character = new E2.structs.game.Character(
		"prototype",
		new E2.structs.Point(0, 0),
		E2.structs.Direction.NORTH,
		null,
		null
	);*/
	dialog.setChar( character );
	dialog.open();
	dialog.print( cue );
	dialog.close();
};
/**
 * @return {E2.graphic.component.DialogBox}
 */
E2.graphic.component.Cutscene.prototype._getDialogBox = function()
{
	// TODO : Faire mémorisation
	var dialbox = new E2.graphic.component.DialogBox(
		"dialog",
		new E2.structs.Point(0,0),
		new E2.structs.Size(E2.Graphic.SCREEN_WIDTH, 250),
		{speed : 100}
	);
	dialbox.setParent( this.getId() );
	dialbox.render();
	return dialbox;
};
/**
 * Changement de décor
 * @param  {???} setting Le décor
 * @param  {Function} impact L'animation
 * @return {void}
 */
E2.graphic.component.Cutscene.prototype.impact = function( setting, impact )
{
	this._map.impact( setting );
};
/**
 * Laisse le joueur effectuer un choix
 * @param  {String}   choice   Le choix
 * @param  {Array}    answers  Les réponses
 * @param  {Function} callback La rétro-action
 * @return {void}
 */
E2.graphic.component.Cutscene.prototype.choose = function( choice, answers,
	callback )
{
	console.assert(false, "Not implemented");
};
/**
 * Animation du layout
 * @param  {E2.graphic.animation.Animation} animation Animation
 * @return {void}
 */
E2.graphic.component.Cutscene.prototype.layout = function( animation )
{
	animation.setCutscene( this );
	animation.run();
};

E2.graphic.component.Cutscene.prototype.loadCharacter = function( character )
{
	this._characters.push( character );
	console.log(this._characters);
};
