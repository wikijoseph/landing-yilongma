"use strict"; // Start of use strict



$('.circular-progress').each(function () {

	var Self = $(this);
	var getID = Self.attr('id');

	const QUARTER_R = Math.PI / 2;
	const otherBall = document.getElementById(getID+'-other-ball');

	const containerWidth = document.getElementById(getID).offsetWidth;
	const strokeWidth = 3;
	const strokeColor = '#7DC22B';
	const lineWidthInPixels = strokeWidth / 100 * containerWidth;
	// Radius is from circle's exact center to the middle of the line
	const radius = (containerWidth - lineWidthInPixels) / 2
	const center = (containerWidth / 2);

	var progressCount = Self.data('progress-count');
	const circle = new ProgressBar.Circle('#'+getID, {
	    color: strokeColor,
	    easing: 'easeInOut',
	    duration: 1200,
	    strokeWidth: strokeWidth,
	    text: {
	      style: null,  // manually style text
	    },
	    step: function(state, bar) {
	      const angleR = bar.value() * 2 * Math.PI - QUARTER_R;
	      const x = radius * Math.cos(angleR) + center;
				const y = radius * Math.sin(angleR) + center;
	      otherBall.style.left = x + 'px';
	      otherBall.style.top = y + 'px';
	    }
	});

	circle.animate(progressCount);  // Number from 0.0 to 1.0	
});
      

