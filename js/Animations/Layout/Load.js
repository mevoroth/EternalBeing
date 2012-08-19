window.Animations = window.Animations || {};
Animations.Layout = Animations.Layout || [];

Animations.Layout[0]= function( cutscene, resource, context )
{
	ImageLoader.load(
		resource,
		{
			cutscene : cutscene
		},
		function( img, params )
		{
			$( "#" + cutscene.getParent() ).append(
				$( "<div>" )
					.addClass("default")
					.append(img)
			);
		},
		function(err)
		{
			console.log(err);
		}
	);
};
