function ajaxCode( key )
{
	return {
		"NOT_CONNECTED" : 4294967295,
		"WORLD_NOT_SELECTED" : 4294967294,
		"CHARACTER_NOT_SELECTED" : 4294967293,
		"CONNECTED" : 4294967292,
		"WORLD_SELECTED" : 4294967291,
		"CHARACTER_SELECTED" : 4294967290,
		"NEW_SUCCESS" : 0,
		"NEW_INVALID_PARAMS" : 1,
		"NEW_EMPTY_PARAMS" : 2,
		"LOAD_SUCCESS" : 3,
		"LOAD_LOGIN_FAILED" : 4,
		"LOAD_INVALID_PARAMS" : 5,
		"LOAD_EMPTY_PARAMS" : 6,
		"SELECT_WORLD_SUCCESS" : 7,
		"SELECT_WORLD_EMPTY_PARAMS" : 8,
		"SELECT_WORLD_INVALID_PARAMS" : 9,
		"SELECT_WORLD_FAILED" : 10,
		"SELECT_CHAR_SUCCESS" : 11,
		"SELECT_CHAR_EMPTY_PARAMS" : 12,
		"SELECT_CHAR_INVALID_PARAMS" : 13,
		"SELECT_CHAR_FAILED" : 14,
		"FULLMAP_SUCCESS" : 0,
		"NEXT_SUCCESS" : 0,
		"CURRENT_SUCCESS" : 1,
		"ROUTE_BATTLE" : 0,
		"ROUTE_CUTSCENE" : 1,
		"ROUTE_MAP" : 2,
		"ANIMATE" : 10,
		"TALK" : 11,
		"IMPACT" : 12,
		"CHOOSE" : 13,
		"LAYOUT" : 14,
		"SCRIPT_NEXT_SUCCESS" : 100,
		"SCRIPT_NEXT_FAILED" : 101
	}[key];
}