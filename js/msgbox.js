function stringtonode(m)
{
	var n = document.createElement('div');
	n.innerHTML = m;
	return n;
}	

function playopen() {
	var nextSong = document.createElement('audio');
	nextSong.autoplay = 'true';
	nextSong.src = "audios/Win95Error.mp3";
}

function makemsgbox(text, title) {
	var m = document.getElementById("dummymsgbox").innerHTML;
	var b = document.getElementById('msgboxes');
	
	m = m.replace('<!--TITLE-->', title);
	m = m.replace('<!--CONTENT-->', text);
	m = stringtonode(m);
	
	b.append(m);
	playopen();
}

function makeiframe(title, url) {
	var m = document.getElementById("dummyiframe").innerHTML;
	var b = document.getElementById('applications');
	m = m.replace('<!--TITLE-->', title);
	b.appendChild(stringtonode(m));
}

function clickgeneratemsg() {
	var t = document.getElementById("titletxt").value;
	var msg = document.getElementById("msgtxt").value;
	makemsgbox(msg, t);
}

function msggen() {
	var b = document.getElementById("dummymsggen").innerHTML;
	hidestartmenu();
	document.getElementById('applications').appendChild(stringtonode(b));
}

function losecontrol() {
	playopen();
	hidestartmenu();
	makemsgbox("Hello, myself ｏｍ　ａｕｔｉ, and I'm a student/newbie in Web Development/Designer.<br>I'm 19, I live in Mumbai, India, and I like 90s/Y2K aesthetics. :)<br>I'm currently pursuing degree in Information Technology at <em><a href='https://ves.ac.in/vesasc/'>VES College, Chembur</a></em>.<br>I'm an introvert, but I love to travel & chill with my friends & family.<br>Most of the time, I listen to <a href='https://open.spotify.com/playlist/5kXK3onK96pbkImupqx1mG?si=9dfe02143b394648'><em>pop music</em></a>, <a href='https://open.spotify.com/playlist/3JgDv5bLjj9yfg0sWkCXL7?si=d2f6f9c2793240cf'><em>vaporwave music</em></a> to chill, and watch movies and series in Netflix.<br>I also love to play games	, nerdin' 'bout MCU, and hanging out on my socials (IG, Twitter, and Reddit).<br>Check out my *secret* ａｅｓｔｈｅｔｉｃ Instagram account.<br><a href='https://www.instagram.com/aestheticity.jpeg/' target='_blank'><u>☞Click Me!☜</u></a><br>This is my first ever full-blown website that i've made using HTML, CSS & JS. I hope you liked it.<br>You can check out my other works, linked in my portfolio below. <br>thank u<3<br><b><u><a href='myPortfolio.html' title='Work in Progress...'>my portfolio(WIP!)</a></u> | <u><a href='https://www.linkedin.com/in/om-auti-948002236'>LinkedIn</a></u> | <u><a href='mailto:autiom3123@gmail.com' title='..in gmail :P'>talk w me...</a></u></b>", "About Me!");
}

function contact() {
	hidestartmenu();
	makemsgbox('Hi, this is om again!:)<br>You can contact me here: <a href="mailto:autiom3123@gmail.com" ><u>contact@nostalgiavapor.69mail.com</u></a><br> Ads(/Easter Eggs;) below: <br><br> <img src="button ad/nocookie.gif"> <img src="button ad/notepad.gif" height=31px> <img src="button ad/made_with_windows.gif"> <a  href="https://yahoo.com/" title="Yahooo but new!" target="_blank"><img src="button ad/yahoo.gif"></a> <img src="button ad/best_viewed_with_eyes.gif"><br><a href="https://netflix.com/" title="wanna netflix n chill wit me? ;)" target="_blank"><img src="button ad/netflix.gif"></a> <img src="button ad/imhigh.gif"> <a href="myPortfolio.html" title="Under Development"><img src="button ad/working.gif"></a> <a href="https://store.steampowered.com/" title="Hi-fi HD Games" target="_blank"><img src="button ad/steam.gif"></a> <img src="button ad/gbanet.gif"> <img src="button ad/mp3.gif"><br><img src="button ad/mymusic.gif"> <a href="https://totalnews.com/" title="You can ignore this one.."><img src="button ad/news.gif"></a> <img src="button ad/nightdreams.gif"> <img src="button ad/1980s.gif"> <img src="button ad/freeware.gif"><br><img src="button ad/evilIE.gif"> <a href="https://i.imgflip.com/1z1u50.jpg" title="☞Click Now!☜"><img src="button ad/everything.gif"></a> <img src="button ad/nukeIE.gif"> <a href="https://modarchive.org/" title="Awesome!"><img src="button ad/modarchive.gif"></a> <a href="https://winxp.vercel.app/" title="Actual WinXP made with React! Super Dope!!" target="_blank"><img src="button ad/winxp.gif"></a> <img src="button ad/nokia.gif"><br> <a href="https://www.cameronsworld.net/" title="One of the wierd-est & my favourite website. Do check it out!" target="_blank"><img src="button ad/lol.gif"></a> <img src="button ad/Japanese.gif"> <a href="https://98.js.org/" title="Win98 IN A BROWSER?!?!" target="_blank"><img src="button ad/win98.png"></a> <a href="https://c.tenor.com/3PkCEwbl-dwAAAAC/hell-see-you-in-hell.gif" title="lets go"><img src="button ad/tohell.gif"></a> <img src="button ad/htmldream.gif"><br><a href="https://www.youtube.com/watch?v=H4dGpz6cnHo" title="The Backrooms (Found Footage) by Kane Pixels"><img src="button ad/cursed.gif"></a> <img src="button ad/mswinmediaplayer.gif"> <img src="button ad/sucks.gif"><img src="button ad/piracy.gif">', "Contact Me");
}