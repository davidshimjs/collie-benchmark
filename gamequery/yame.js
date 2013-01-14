var game_height = 480, game_width = 320;
var num = /[\?&]count=([0-9]+)/.test(location.search) ? Number(RegExp.$1) : 100;

var yame_src = "http://jindo.dev.naver.com/collie/img/small/yame_walk.png";
var yame_width = 129.4, yame_height = 165;

$(function(){
	var limit = 200;
	var realFrame = 0;

	$('#playground').playground({
		height : game_height,
		width : game_width
	});
	
	var anim = new $.gameQuery.Animation({
		imageURL : yame_src,
		type : $.gameQuery.ANIMATION_HORIZONTAL,
		numberOfFrame : 9,
		delta : yame_width,
		distance : 100,
		rate : 50
	});
	
	for (var i = 0; i < num; i++) {
	
		var x = Math.round(Math.random() * (game_width - (yame_width + 50)));
		var y = Math.round(Math.random() * (game_height - yame_height));
	
		$.playground().addSprite('yame' + i, {
			animation : anim,
			posx : x,
			posy : y,
			width : yame_width,
			height : yame_height
		});

	}
	
	$.playground().registerCallback(function() {
		realFrame++;
		
		for (var i = 0; i < num; i++) {
			var yame = $('#yame' + i);
			var x = yame.x() + 1;
			if (x > game_width - (yame_width + 50)) {
				x = 0;
			}
		
			yame.x(x);
		}
	
		if (realFrame > limit) {
			var nFPS = realFrame / (((+new Date()) - startTime) / 1000);
			$.playground().pauseGame();
			
			var elDiv = document.createElement("div");
			elDiv.style.position = "absolute";
			elDiv.style.top = 0;
			elDiv.style.left = 0;
			elDiv.style.backgroundColor = "#ffffff";
			elDiv.style.width = "320px";
			elDiv.style.height = "480px";
			elDiv.style.zIndex = 9999;
			elDiv.innerHTML = nFPS;
			document.body.appendChild(elDiv);
		}
	}, 1000 / 60);

	var startTime = (+new Date());	
	$.playground().startGame();
});

