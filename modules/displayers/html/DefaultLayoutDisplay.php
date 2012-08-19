<?php

require_once _DISPLAYERS_PATH_ . '/HtmlDisplay.php';

/** 
 * @author skana
 */
class DefaultLayoutDisplay extends HtmlDisplay
{
	/**
	 * @var Smarty Smarty
	 */
	private $_engine;
	
	function __construct()
	{
		parent::__construct();
		$this->set( 'file', 'index.tpl' );
		$this->set( 'disp', array(
			'less'	=> array(
				'dialogbox.less',
				'common.less',
				'Animations/Layout/Load.less',
				'Animations/Layout/Blur.less',
				'Animations/Layout/BlurDarken.less',
				//'Animations/Layout/Clear.less',
				'Animations/default.less'
			),
			'css'	=> array(
				//''
			),
			'js'	=> array(
				'libs/jquery.js',
				'libs/less.js',
				'tools/ImageLoader.js',
				'tools/Observer.js',
				'tools/Observable.js',
				'Animations/Layout/Load.js',
				'Animations/Layout/Blur.js',
				'Animations/Layout/BlurDarken.js',
				'Animations/Layout/Clear.js',
				'Animations/Layout/LoadCharacter.js',
				'E2/ajax/code.js',
				'E2/ajax/request.js',
				'E2/structs/game/Renderable.js',
				'E2/structs/game/Setting.js',
				'E2/structs/game/Map.js',
				'E2/structs/game/Character.js',
				'E2/structs/Direction.js',
				'E2/structs/Point.js',
				'E2/structs/Size.js',
				'E2/events/Event.js',
				'E2/events/SubmitEvent.js',
				'E2/Events.js',
				'E2/graphic/component/Element.js',
				'E2/graphic/component/MenuElement.js',
				'E2/graphic/component/Menu.js',
				'E2/graphic/component/Input.js',
				'E2/graphic/component/Form.js',
				'E2/graphic/component/MainScreen.js',
				'E2/graphic/component/Canvas.js',
				'E2/graphic/component/Box.js',
				'E2/graphic/component/DialogBox.js',
				'E2/graphic/component/Cutscene.js',
				'E2/graphic/animation/Animation.js',
				'E2/graphic/animation/Move.js',
				'E2/Graphic.js',
				'E2/Keyboard.js',
				'view/View.js',
				'view/Blank.js',
				'view/Main.js',
				'view/New.js',
				'view/Continue.js',
				'view/Map.js',
				'view/Cutscene.js',
				'controller/Controller.js',
				'controller/Main.js',
				'controller/Game.js',
				'main.js'
			)
		) );
	}
}

?>
