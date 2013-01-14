// This file was automatically generated from spinner.zwoptex.soy.
// Please don't edit this file by hand.

goog.provide('lime.ASSETS.yame.zwoptex');
goog.require('soy');

lime.ASSETS.yame.zwoptex.data = function(opt_data) {
	
	var x = -129.4;
	var w = 129.4, h = 165;
	
	var ret = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">',
		'<plist version="1.0">',
			'<dict>',
				'<key>texture</key>',
				'<dict>',
					'<key>width</key>',
					'<integer>1165</integer>',
					'<key>height</key>',
					'<integer>165</integer>',
				'</dict>',
				'<key>frames</key>',
				'<dict>'
	];
	
	for (var i = 0; i < 9; i++) {
	
		ret.push([
			'<key>' + i + '</key>',
			'<dict>',
				'<key>x</key>',
				'<integer>' + (x = x + w) + '</integer>',
				'<key>y</key>',
				'<integer>0</integer>',
				'<key>width</key>',
				'<integer>' + w + '</integer>',
				'<key>height</key>',
				'<integer>' + h + '</integer>',
				'<key>offsetX</key>',
				'<real>0</real>',
				'<key>offsetY</key>',
				'<real>0</real>',
				'<key>originalWidth</key>',
				'<integer>' + w + '</integer>',
				'<key>originalHeight</key>',
				'<integer>' + h + '</integer>',
			'</dict>'
		].join(''));
		
	}
	
	ret.push([
				'</dict>',
			'</dict>',
		'</plist>'
	].join(''));
	
	return ret.join('');
	
};
