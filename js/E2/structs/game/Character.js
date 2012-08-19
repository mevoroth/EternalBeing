/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.structs = E2.structs || {};
E2.structs.game = E2.structs.game || {};

/**
 * @param id Id
 * @param p Point
 * @param d Orientation
 * @param sprite Sprite
 */
E2.structs.game.Character = function( id, p, d, sprite, avatar, name )
{
	this._id = id;
	this._p = p;
	this._d = d;
	this._sprite = sprite;
	this._avatar = avatar;
	this._name = name;
	this._ctx = {};
};
E2.structs.game.Character.prototype.getSprite = function()
{
	
	return this._sprite;
};
E2.structs.game.Character.prototype.getId = function()
{
	return this._id;
};
E2.structs.game.Character.prototype.getPoint = function()
{
	return this._p;
};
E2.structs.game.Character.prototype.setPoint = function( p )
{
	this._p = p;
};
E2.structs.game.Character.prototype.getAvatar = function()
{
	return "content/characters/" + this._avatar + ".png";
};
E2.structs.game.Character.prototype.changeDirection = function( d )
{
	this._d = d;
};
E2.structs.game.Character.prototype.getName = function()
{
	return this._name;
};
/**
 * @see E2.structs.game.Renderable.prototype.setContext
 */
E2.structs.game.Character.prototype.setContext = function( ctx )
{
	this._ctx = ctx;
};
/**
 * @see E2.structs.game.Renderable.prototype.render
 */
E2.structs.game.Character.prototype.render = function()
{
	console.log(this);
	ImageLoader.load(
		this.getSprite(),
		{
			id : this.getId(),
			container : this._ctx.container,
			p : this.getPoint()
		},
		function(img, params)
		{
			params.container.append(
				$( "<div>" )
					.attr( "id", "character_" + params.id )
					.addClass( "default" )
					.addClass( "character" )
					.css("top", params.p.getY() + "px")
					.css("left", params.p.getX() + "px")
					.append( img )
			);
		},
		function(err)
		{
			console.log(err);
		}
	);
}
