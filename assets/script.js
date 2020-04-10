function clock () {
    var today = new Date();
    var h     = (today.getHours() > 12) ? today.getHours() % 12 : today.getHours();
    var m     = ("00" + today.getMinutes()).slice(-2);
    var s     = ("00" + today.getSeconds()).slice(-2);
    var ap    = (today.getHours() > 12) ? 'PM' : 'AM';
	var date  = today.toLocaleString('en-us',{weekday:'long', month:'long', year:'numeric', day:'numeric'});
    document.querySelector('#clock').innerHTML = h + ":" + m;
    document.querySelector('#second').innerHTML = " &nbsp;: " + s;
    document.querySelector('#ampm').innerHTML = ' ' + ap;
    document.querySelector('#date').innerHTML = date;
    var t = setTimeout(clock, 1000);
};

document.addEventListener('DOMContentLoaded' , function(){
	clock()
	
	document.getElementById('close').onclick = function(){
		window.close();
	}

	document.getElementById('bookmark').onclick = function(){
		chrome.tabs.create({url: 'chrome://bookmarks/'});
	}
});