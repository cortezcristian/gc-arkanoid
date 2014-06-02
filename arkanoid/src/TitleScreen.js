import ui.View;
import ui.ImageView;
import ui.TextView as TextView;

exports = Class(ui.ImageView, function (supr) {
	this.init = function (opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			image: "resources/images/title_screen.png"
		});

		supr(this, 'init', [opts]);

		this.build();
	};

	this.build = function() {

		var textview = new TextView({
			superview: this,
			layout: "box",
			text: "-Arkanoid-",
			color: "green"
		});

		var textview = new TextView({
			superview: this,
			layout: "box",
			text: "Start",
			x: 58,
			y: 313,
			color: "white",
            size: 34,
			width: 200,
			height: 100
		});

		var startbutton = new ui.View({
			superview: this,
			x: 58,
			y: 313,
			width: 200,
			height: 100
		});

		startbutton.on('InputSelect', bind(this, function () {
			this.emit('titlescreen:start');
		}));
	};
});
