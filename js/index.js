$(document).ready( function() {
	

	makemsgbox("Hello, my name is Om, and welcome to the <br>ｎｏｓｔａｌｇｉａ　ｐｌａｚａ.<br> Enjoy your stay here :)<br> (This website works best in PC/Laptop)", "Welcome");
	});
	
	function startup() {
		var nextSong = document.createElement('audio');
		nextSong.autoplay = 'true';
		nextSong.src = "audios/Win95Startup.mp3";
	}
