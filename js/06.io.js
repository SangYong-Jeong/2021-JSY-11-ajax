var observer;
var option = {
	root: null,
	rootMargin: '0px',
}
observer = new IntersectionObserver(onIntersection, option);
observer.obeserve(document.querySelector('.wrapper'));

function onIntersection(el, observer) {
	console.log(el, observer);
}