function Darktheme(){ 
	document.body.style.backgroundColor = "black"; // body
	// About
	document.getElementById("heading").style.color = "white";
	document.getElementById("para").style.color = "white";
	// quote
	document.getElementById("main").style.color = "white";
	document.getElementById("by").style.color = "white";
	// image Substitution
	document.getElementById("steve-img").style.visibility = "Hidden";
	document.getElementById("steve-dark").style.visibility = "visible";
	document.getElementById("quote").style.visibility = "hidden";
	
	
}
function Lightheme(){
	document.body.style.backgroundColor = "white"; // body
	// About
	document.getElementById("heading").style.color = "black";
	document.getElementById("para").style.color = "black";
	// quote
	document.getElementById("main").style.color = "black";
	document.getElementById("by").style.color = "black";
	// Image substitution 
	document.getElementById("steve-img").src = "https://live.staticflickr.com/6220/6216457030_2cf0aff09d_z.jpg" ;
	document.getElementById("steve-img").style.visibility = "visible";
	document.getElementById("steve-dark").style.visibility = "hidden";
	document.getElementById("quote").style.visibility = "visible";
		
}
