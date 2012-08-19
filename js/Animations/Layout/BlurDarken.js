window.Animations = window.Animations || {};
Animations.Layout = Animations.Layout || [];

Animations.Layout["BLUR_DARKEN"] = function() {};

Animations.Layout["BLUR_DARKEN"].prototype = new tools.Observable();
Animations.Layout["BLUR_DARKEN"].prototype.constructor =
	Animations.Layout["BLUR_DARKEN"];

Animations.Layout["BLUR_DARKEN"].prototype.setCutscene = function( cutscene )
{
	this._cutscene = cutscene;
};
Animations.Layout["BLUR_DARKEN"].prototype.setResource = function( resource )
{
	this._resource = resource;
};
Animations.Layout["BLUR_DARKEN"].prototype.setContext = function( context )
{
	this._context = context;
};
Animations.Layout["BLUR_DARKEN"].prototype.run = function()
{
	$( "#" + this._cutscene.getParent() ).append(
		$( "<div>" )
			.addClass("default")
			.addClass("blurDarkenBackground")
			.css("opacity", "0.0")
			.css("width", E2.Graphic.SCREEN_WIDTH)
			.css("height", E2.Graphic.SCREEN_HEIGHT)
	);
	$( ".blurDarkenBackground" ).animate({
		"opacity" : "1.0"
	});
	var self = this;
	setTimeout(function() {
		self.setChanged();
		self.notifyObservers();
	}, 1000);
};
