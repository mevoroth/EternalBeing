window.tools = window.tools || {};
tools.ImageLoader = function()
{
	this._images = new Array();
};

tools.ImageLoader.prototype.load = function( image, params, success, err )
{
	if ( typeof(this._images[image]) === "undefined" )
	{
		var img = new Image();
		var self = this;
		img.src = {
			"grass" : "content/textures/grass.png",
			"proto" : "content/characters/proto2.png",
			"comet" : "content/comet.gif",
			"sen_soya_sprite" : "content/characters/sen_soya_sprite.gif",
			"sen_soya" : "content/characters/sen_soya.png",
		}[image];
		img.onload = function()
		{
			success(this, params);
			if ( typeof(self._images[image]) === "undefined" )
			{
				self._images[image] = img;
			}
		};
	}
	else
	{
		success(this._images[image], params);
	}
};

window.ImageLoader = new tools.ImageLoader();
