var observer;
var option = {
	// root: null, -> brower viewport
	// rootMargin: '0px',
	// threshold: 0,
	// threshold: [0, .25, .5, .75, 1],  -> 내용물의 %
}
observer = new IntersectionObserver(onIntersection, {});
observer.observe(document.querySelector('.wrapper'));

function onIntersection(el, observer) {
	el.forEach(function(v, i) {
		console.log(v);
		if(v.isIntersection) {
			// observer.unobserve(v.target);
			if(v.intersectionRatio < .25) {
				$(v.target).css('background-color', 'red');
			}
			else if(v.intersectionRatio >= .25 && v.intersectionRatio < .5) {
				$(v.target).css('background-color', 'green');
			}
			else if(v.intersectionRatio >= .5 && v.intersectionRatio < .75) {
				$(v.target).css('background-color', 'blue');
			}
			else if(v.intersectionRatio >= .75) {
				$(v.target).css('background-color', 'purple');
			}
		}	
		else {
			$(v.target).css('background-color', 'beige');
		}
	})
	// console.log(el, observer);
}

