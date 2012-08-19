/**
 * @author skana
 */
window.E2 = window.E2 || {};
E2.graphic = E2.graphic || {};
E2.graphic.component = E2.graphic.component || {};

E2.graphic.component.Input = function( cid, p, s, params )
{
	E2.graphic.component.Element.call( this, null, "input_" + cid, p, s,
		params );
};
E2.graphic.component.Input.prototype = new E2.graphic.component.Element();
E2.graphic.component.Input.prototype.constructor =
	E2.graphic.component.Input;
/**
 * @TODO Need rework : réécriture massive du DOM
 */
E2.graphic.component.Input.prototype.render = function()
{
	var inputContainer = $( "<div>" );
	inputContainer.attr( "id", this.getId() );
	if ( !$.isEmptyObject(this._params.label) )
	{
		// Partie libellé
		var labelPart = $( "<div></div>" );
		labelPart.attr( "class", "input_labelPart" );
		labelPart.append( this._params.label );
		inputContainer.append( labelPart );
	}
	// Partie champ de texte
	var inputPart = $( "<div></div>" );
	inputPart.attr( "class", "input_inputPart" );
	var input = $( "<input />" );
	input.attr( "type", "text" );
	inputPart.append( input );
	inputContainer.append( inputPart );
	$( "#" + this._parent ).append( inputContainer );
	E2.graphic.component.Element.prototype.render.call( this );
};
/**
 * Extrais la valeur des champs
 */
E2.graphic.component.Input.extract = function( fields )
{
	var vars = new Array();
	for ( var i = 0, l = fields.length; i < l; ++i )
	{
		vars[fields[i]] =
			$( "#input_" + fields[i] + " > .input_inputPart > input" ).val()
	}
	return vars;
};
