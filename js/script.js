
var getCurrentLayout = function() {
	if (document.documentElement.clientWidth > 800) {
		return 'flag';
	} else {
		return 'long'
	}
};
// This might seem redundant, but we need to run checks
// for when we change the layout.
var currentLayout = getCurrentLayout();

// Run the first or second method, depending on which
// layout we're on.
var flagLayoutMethod = function(flagMethod, args) {
	return function() {
		if (getCurrentLayout() == 'flag') {
			flagMethod.apply(undefined, args);
		}
	};
};


// Show all of our content.
var showForLong = function() {
	$('.js-tab-contents').show();
};

function getPath() {
	return location.pathname.substring(1);
}

// We landed!
$(function() {
	// Initialize our silly photo scroller thing
	photoScroller($('#scroller'), [
		'./images/professor.jpg',
		'./images/teaching.jpg',
		'./images/wideeyed.jpg'
	], 15000);

	$(window).on('resize', function(e) {
		var newLayout = getCurrentLayout();
		if (newLayout !== currentLayout) {
			currentLayout = newLayout;
			var path = getPath();
			if (currentLayout == 'flag') {
				showTab(path || 'projects');
			} else {
				showForLong();
			}
		}
	});
});
