//set main namespace
goog.provide('yame');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Sprite');
goog.require('lime.fill.Frame');
goog.require('lime.animation.KeyframeAnimation');
goog.require('lime.animation.MoveBy');
goog.require('lime.SpriteSheet');
goog.require('lime.parser.JSON');
goog.require('lime.ASSETS.yame.zwoptex')

var num = /[\?&]count=([0-9]+)/.test(location.search) ? Number(RegExp.$1) : 100;
var mode = /[\?&]mode=([a-z]+)/.test(location.search) ? RegExp.$1 : "canvas";
var screenWidth = 320, screenHeight = 480;

var width = 129.4;
var height = 165;

// entrypoint
yame.start = function() {
	var img = "http://jindo.dev.naver.com/collie/img/small/yame_walk.png";

	lime.Director.FPS_INTERVAL = 1000;
	    
	var director = new lime.Director(document.getElementById('canvas'), screenWidth, screenHeight).setDisplayFPS(60),
	    scene = new lime.Scene(),
	    layer = new lime.Layer();
	    
	layer.setRenderer(mode == "canvas" ? lime.Renderer.CANVAS : lime.Renderer.DOM);

	var ss = new lime.SpriteSheet(img, lime.ASSETS.yame.zwoptex, lime.parser.ZWOPTEX);

	var sprites = [];
	
	for (var i = 0; i < num; i++) {
		
		var x = Math.round(Math.random() * (screenWidth - (width + 50)));
		var y = Math.round(Math.random() * (screenHeight - height));
		
		var sprite = new lime.Sprite().setAnchorPoint(0, 0).setPosition(x, y).setSize(width, height).setFill(ss.getFrame('0'));
		layer.appendChild(sprite);
		
		sprites.push(sprite);
		
	}
	
	scene.appendChild(layer);
	
	// set current scene active
	director.replaceScene(scene);
	
	var frame = 0, realFrame = 0;
	
	lime.scheduleManager.schedule(function() {
		
		var shouldChangeFrame = realFrame % 4 == 0;
		
		if (shouldChangeFrame) {
			frame += 1;
			if (frame >= 9) {
				frame = 0;
			}
		}

		realFrame++;

		for (var i = 0, num = sprites.length; i < num; i++) {
			
			var sprite = sprites[i];
			var pos = sprite.getPosition();
			
			pos.x += 1;
			
			if (pos.x > screenWidth - (width + 50)) {
				pos.x = 0;
			}
			
			// sprite animation
			shouldChangeFrame && sprite.setFill(ss.getFrame(String(frame)));

			sprite.setPosition(pos);
			
		}
		
	}, this);

}

//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('yame.start', yame.start);
