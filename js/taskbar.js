function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 1000);
}

function hidestartmenu() {
	var container = $(".startdiv");
}
$(document).mouseup(function(e) 
{
    var container = $(".startdiv");
    if (!container.is(e.target)) 
    {
		container.removeClass('slidein');
    }
});