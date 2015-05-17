var section1 = document.getElementById("section1");
var button1 = document.getElementById("button1");
var section2 = document.getElementById("section2");
var button2 = document.getElementById("button2");


var showSection1 = function() {
	section1.style.display = "block";
	section2.style.display = "none";
};

var showSection2 = function() {
	section1.style.display = "none";
	section2.style.display = "block";
};

button1.addEventListener("click", function(e) { 
	showSection2();
});

button2.addEventListener("click", function(e) {
	showsection1()
});

showSection1()