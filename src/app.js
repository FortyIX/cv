require("./style.styl")


import Particles from "particlesjs"
import Typed from "typed.js"

import $ from "jquery"
import fullpage from "fullpage.js"

window.$ = $

// console.log(Particles)

window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false); //remove listener, no longer needed
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
	console.log(thing)

},false);

