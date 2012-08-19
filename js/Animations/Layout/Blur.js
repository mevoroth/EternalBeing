window.Animations = window.Animations || {};
Animations.Layout = Animations.Layout || [];

Animations.Layout["BLUR"] = function() {};

Animations.Layout["BLUR"].prototype = new tools.Observable();
Animations.Layout["BLUR"].prototype.constructor =
	Animations.Layout["BLUR"];

Animations.Layout["BLUR"].prototype.setCutscene = function( cutscene )
{
	this._cutscene = cutscene;
};
Animations.Layout["BLUR"].prototype.setResource = function( resource )
{
	this._resource = resource;
};
Animations.Layout["BLUR"].prototype.setContext = function( context )
{
	this._context = context;
};
Animations.Layout["BLUR"].prototype.run = function()
{
	var self = this;
	function end()
	{
		self.setChanged();
		self.notifyObservers();
	}
	$( "#" + this._cutscene.getParent() ).append(
		$( "<div>" )
			.addClass("default")
			.addClass("blurBackground")
			.css("opacity", "0.0")
			.css("width", E2.Graphic.SCREEN_WIDTH)
			.css("height", E2.Graphic.SCREEN_HEIGHT)
	);
	$( ".blurBackground" ).animate({
		opacity : '0.7'
	});
	var buffer = '';
	for (var i in this._context)
	{
		buffer += this._context[i].text + '\n';
	}
	var i = 1;
	$( "#" + this._cutscene.getParent() ).append(
		$("<div>")
			.addClass("default")
			.addClass("blurText")
			.css("width", E2.Graphic.SCREEN_WIDTH)
			.css("height", E2.Graphic.SCREEN_HEIGHT)
	);
	var text = setInterval(
		function()
		{
			$(".blurText").html(
				buffer.substring(0, i).replace(/\n/g, '<br />')
			);
			++i;
			if (i >= buffer.length)
			{
				clearInterval(text);
				end();
			}
		},
		1
	);
};
