var Quiz = Quiz || {};
Quiz.Boot = function() {};

const dir = 'media/balloons/';
var load = function(game, type, name, uri) {
	game.load[type](name, dir + uri);
}

// Quicker to type loading methods
var loadImage;
var loadAudio;

Quiz.Boot.prototype = {
	init: function() {
		this.currQIndex = 0;
		this.score = 0;
	},
	preload: function() {
		// load all images from  folder needed for game
		load(this, 'image', 'logo', 'logo.png');
		load(this, 'image', 'bg', 'ValloonsBG.jpg');
		load(this, 'image', 'red', 'RedBalloon.png');
		load(this, 'image', 'blue', 'BlueBalloon.png');
		load(this, 'image', 'green', 'GreenBalloon.png');
		load(this, 'image', 'pink', 'PinkBalloon.png');
		load(this, 'image', 'dart', 'CartoonDart.png');
		load(this, 'audio', 'pop', 'balloonPop.wav');
		load(this, 'audio', 'ding', 'ding.wav');
		
		this.balloons = ['red', 'blue', 'green', 'pink'];
		this.num_balloons = 4;

		this.registry.set('currQIndex', this.currQIndex);
		this.registry.set('score', this.score);
		this.registry.set('balloons', this.balloons);
		this.registry.set('num_balloons', this.num_balloons);

		var gameid = $('#gameid').text();
		this.registry.set('gameid', gameid);

		var gameData;
		$.ajax({
			type: 'post',
			url: 'get-game-data.php',
			data: { gameid },
			async: false,
			success: function(data) {
				//console.log(data);
				gameData = JSON.parse(data);
				//console.log(gameData);
			},
			error: function(jqXHR, textStatus, error) {
				//console.log(textStatus, error);
				alert('Game has stopped working. Please go back to the dashboard.');
			}
		});
		
		// load questions from json formatting
		this.registry.set('questions', gameData);
	},
	create: function() {
		// add popping & ding sound to registry
		this.popSound = this.sound.add('pop', {loop: false} );
		this.registry.set('popSound', this.popSound);
		this.dingSound = this.sound.add('ding', {loop: false} );
		this.registry.set('dingSound', this.dingSound);

		// start directions scene
		this.scene.start('directions');
	}
}

