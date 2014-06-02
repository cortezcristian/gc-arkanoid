
//sdk imports
import device;
import ui.StackView as StackView;
//user imports
import src.TitleScreen as TitleScreen;
//import src.GameScreen as GameScreen;

import ui.TextView as TextView;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var titlescreen = new TitleScreen();
		//		gamescreen = new GameScreen();

		this.view.style.backgroundColor = '#999999';

		//Add a new StackView to the root of the scene graph
		var rootView = new StackView({
			superview: this,
			x: device.width / 2 - 160,
			y: device.height / 2 - 240,
			width: 320,
			height: 480,
			clip: true,
			backgroundColor: '#37B34A'
		});

		rootView.push(titlescreen);
        console.log("Root view");
        /*
		var textview = new TextView({
			superview: this.view,
			layout: "box",
			text: "Arkanoid",
			color: "white"
		});
        */

		titlescreen.on('titlescreen:start', function () {
            console.log("play");
			//rootView.push(gamescreen);
			//gamescreen.emit('app:start');
		});
	};
	
	this.launchUI = function () {};
});
