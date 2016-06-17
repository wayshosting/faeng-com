$(window).load(function(){
	var bgMusic = new buzz.sound( "sound/helio", {
		formats: [ "ogg", "mp3" ]
	});
	bgMusic.play()
	.loop()
});