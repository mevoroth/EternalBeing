/**
 * @author skana
 */

/**
 * Effectuer une requête
 * @param  {[type]} url   [description]
 * @param  {[type]} data  [description]
 * @param  {[type]} codes [description]
 * @param  {[type]} errcb [description]
 * @return {[type]}       [description]
 */
function request( url, data, codes, errcb )
{
	console.assert(false, "DOC !!!");
	var successSubmit = function( data, textStatus, jqXHR )
	{
		codes[data.code]( data );
	};
	$.ajax(
		url,
		{
			data : data,
			dataType : "json",
			success : successSubmit,
			error : errcb,
			type : "POST"
		}
	);
}
