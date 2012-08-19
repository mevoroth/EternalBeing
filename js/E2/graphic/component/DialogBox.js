/**
 * @author skana
 */ 
window.E2 = window.E2 || {};
E2.graphic = E2.graphic ||{};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.DialogBox = function( cid, p, s, params )
{
	E2.graphic.component.Box.call( this, cid, p, s, params );
	// TODO : Check params.speed
};

E2.graphic.component.DialogBox.prototype = new E2.graphic.component.Box();
E2.graphic.component.DialogBox.prototype.constructor =
	E2.graphic.component.DialogBox;

E2.graphic.component.DialogBox.prototype.render = function()
{
	E2.graphic.component.Box.prototype.render.call( this );
	var container = $( "#" + this.getContentArea() );
	container.attr( "class", "dialogbox" );
	container.append(
		this._createArea(
			this._getAvatarArea(),
			"avatar"
		)
	);
	var nameArea = this._createArea(
		this._getNameArea(),
		"name"
	);
	nameArea
		.append($("<div></div>").attr("class", "left"))
		.append(
			$("<div></div>").attr("class", "middle").append(
				$("<div></div>").attr("class", "name_content")
			)
		)
		.append($("<div></div>").attr("class", "right"));
	container.append(
		nameArea
	);
	container.append(
		this._createArea(
			this._getTextArea(),
			"text"
		)
	);
};

/**
 * @return {jQuery}
 */
E2.graphic.component.DialogBox.prototype._createArea = function( id, classname )
{
	var area = $( "<div></div>" );
	area.attr( "id", id );
	area.attr( "class", classname );
	return area;
};

E2.graphic.component.DialogBox.prototype._getAvatarArea = function()
{
	return this.getContentArea() + "_avatar";
};

E2.graphic.component.DialogBox.prototype._getTextArea = function()
{
	return this.getContentArea() + "_text";
};

E2.graphic.component.DialogBox.prototype._getNameArea = function()
{
	return this.getContentArea() + "_name";
};

/**
 * @param {E2.structs.game.Character} c
 */
E2.graphic.component.DialogBox.prototype.setChar = function( c )
{
	this._c = c;
};

E2.graphic.component.DialogBox.prototype.open = function()
{
	// TODO : Script d'opening
};

E2.graphic.component.DialogBox.prototype.close = function()
{
	// TODO : Script d'ending
};

E2.graphic.component.DialogBox.prototype.print = function( cue, t )
{
	console.log("LULZ");

	$( "#" + this._getAvatarArea() ).empty();
	$( "#" + this._getAvatarArea() ).append(
		$("<img>")
			.attr("src", this._c.getAvatar())
			.attr("alt", this._c.getName())
	);
	$( "#" + this._getNameArea() + " .name_content" ).empty();
	$( "#" + this._getNameArea() + " .name_content" )
		.append( this._c.getName() );
	var i = 1;
	var self = this;
	var text = setInterval(
		function()
		{
			$( "#" + self._getTextArea() ).html(
				cue.substring(0, i).replace(/\n/g, '<br />')
			);
			++i;
			if (i >= cue.length)
			{
				clearInterval(text);
			}
		},
		100
	);
	/*var self = this;
	setTimeout(
		function()
		{
			$( "#" + self._getTextArea() ).empty();
			$( "#" + self._getTextArea() ).append( cue );
		},
		this._params.speed*t
	);*/
};
