require("./style.styl")

import Terminal from "xterm"
require("xterm/dist/xterm.css")

Terminal.loadAddon('fit');

import Particles from "particlesjs"
import Typed from "typed.js"

import $ from "jquery"
import fullpage from "fullpage.js"


var term = new Terminal();
window.t = term


window.$ = $

// console.log(Particles)

window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false); //remove listener, no longer needed
	term.open(document.getElementById("terminal"))
	term.on("key", (char, data) => {
		console.log(data.keyCode)
		if(data.keyCode == 13){
			char = '\r\n'
		}else if(data.keyCode == 8) {
			char = "\b \b"
		}

		term.write(char)
	})

	term.on("lineFeed", (data) => {
		console.log("data: ", data)
	})

	term.fit()
	term.writeln("This is a terminal window.")
	term.write("You can write here:")
	Particles.init({
		selector: '.background',
		connectParticles: true
	});

	var typed = new Typed('.element', {
		strings: ["First sentence.", "Second sentence.", "Is this real??", "I know it is not!"],
		typeSpeed: 30,
		smartBackspace: true,
		loop: true,
		// showCursor: true
	});

	let thing = $('#fullpage').fullpage({
		anchors:['home', 'info', 'education'],
		animateAnchor: false,
		menu: "nav"
	});
	// console.log(thing)

},false);

