/**
 * @author skana
 */

window.E2 = window.E2 || {};

E2.Keyboard = function()
{
	this._binds = new Array();
	this._events = new Array();
	$( document ).keyup( this._keyupHandler );
	$( document ).keydown( this._keydownHandler );
	$( document ).keypress( this._keypressHandler );
};
/*
E2.Keyboard.PRESS_BACK_TAB = 8;
E2.Keyboard.PRESS_TAB = 9;
E2.Keyboard.PRESS_ENTER = 13;
E2.Keyboard.PRESS_SH_TAB = 16;
E2.Keyboard.PRESS_ESC = 27;
E2.Keyboard.PRESS_SPACE = 32;

E2.Keyboard.PRESS_END = 35;
E2.Keyboard.PRESS_BEGIN = 36;
E2.Keyboard.PRESS_LEFT = 37;
E2.Keyboard.PRESS_UP = 38;
E2.Keyboard.PRESS_RIGHT = 39;
E2.Keyboard.PRESS_DOWN = 40;
E2.Keyboard.PRESS_DEL = 46;

E2.Keyboard.PRESS_a = 65;
E2.Keyboard.PRESS_b = 66;
E2.Keyboard.PRESS_c = 67;
E2.Keyboard.PRESS_d = 68;
E2.Keyboard.PRESS_e = 69;
E2.Keyboard.PRESS_f = 70;
E2.Keyboard.PRESS_g = 71;
E2.Keyboard.PRESS_h = 72;
E2.Keyboard.PRESS_i = 73;
E2.Keyboard.PRESS_j = 74;
E2.Keyboard.PRESS_k = 75;
E2.Keyboard.PRESS_l = 76;
E2.Keyboard.PRESS_m = 77;
E2.Keyboard.PRESS_n = 78;
E2.Keyboard.PRESS_o = 79;
E2.Keyboard.PRESS_p = 80;
E2.Keyboard.PRESS_q = 81;
E2.Keyboard.PRESS_r = 82;
E2.Keyboard.PRESS_s = 83;
E2.Keyboard.PRESS_t = 84;
E2.Keyboard.PRESS_u = 85;
E2.Keyboard.PRESS_v = 86;
E2.Keyboard.PRESS_w = 87;
E2.Keyboard.PRESS_x = 88;
E2.Keyboard.PRESS_y = 89;
E2.Keyboard.PRESS_z = 90;
*/
/*
E2.Keyboard.PRESS_A = 65;
E2.Keyboard.PRESS_B = 66;
E2.Keyboard.PRESS_C = 67;
E2.Keyboard.PRESS_D = 68;
E2.Keyboard.PRESS_E = 69;
E2.Keyboard.PRESS_F = 70;
E2.Keyboard.PRESS_G = 71;
E2.Keyboard.PRESS_H = 72;
E2.Keyboard.PRESS_I = 73;
E2.Keyboard.PRESS_J = 74;
E2.Keyboard.PRESS_K = 75;
E2.Keyboard.PRESS_L = 76;
E2.Keyboard.PRESS_M = 77;
E2.Keyboard.PRESS_N = 78;
E2.Keyboard.PRESS_O = 79;
E2.Keyboard.PRESS_P = 80;
E2.Keyboard.PRESS_Q = 81;
E2.Keyboard.PRESS_R = 82;
E2.Keyboard.PRESS_S = 83;
E2.Keyboard.PRESS_T = 84;
E2.Keyboard.PRESS_U = 85;
E2.Keyboard.PRESS_V = 86;
E2.Keyboard.PRESS_W = 87;
E2.Keyboard.PRESS_X = 88;
E2.Keyboard.PRESS_Y = 89;
E2.Keyboard.PRESS_Z = 90;
*/
/*
E2.Keyboard.PRESS_PF1 = 112;
E2.Keyboard.PRESS_PF2 = 113;
E2.Keyboard.PRESS_PF3 = 114;
E2.Keyboard.PRESS_PF4 = 115;
E2.Keyboard.PRESS_PF5 = 116;
E2.Keyboard.PRESS_PF6 = 117;
E2.Keyboard.PRESS_PF7 = 118;
E2.Keyboard.PRESS_PF8 = 119;
*/
E2.Keyboard.getInstance = function()
{
	this._instance = this._instance || new E2.Keyboard();
	return this._instance;
};
E2.Keyboard.prototype.bind = function( key, e )
{
	this._binds[key] = e;
};
E2.Keyboard.prototype.addEvent = function( key )
{
	if ( $.inArray(key, this._binds) !== -1 )
	{
		this._events.push( key );
	}
};
E2.Keyboard.prototype._keyupHandler = function( e )
{
	this.addEvent( e.which );
};
E2.Keyboard.prototype._keydownHandler = function( e )
{
	this.addEvent( e.which << 16 );
};
E2.Keyboard.prototype._keypressHandler = function( e )
{
	this.addEvent( e.which << 8 );
};
E2.Keyboard.prototype.reset = function()
{
	
};
