//_____________________ XML _______________________________________ //

$(document).ready(function() {
	
	// VARIABLES
	var referenceValue;
	var searchString = document.location.search;
	
	

	//======= SCROLL TOP ON REFRESH =======
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
    // $('#mainScrollArea').animate({scrollTop:0}, 1);
});



//========================= NAV EASING ================
	$('#navigation a').click(function(event){
		event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top-100
		}, 1500,'easeInOutExpo');
	});		



	
	// EVENT HANDLERS

	
	// FUNCTIONS	
	function getData() {
		referenceValue = getQueryParam("reference", searchString);
		loadModalXML(referenceValue)
	};
				
	function getQueryParam(parameter, qs) {
		qs = "&" + qs;
		var p = escape(unescape(parameter));
		var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
	   
		var match = regex.exec(qs);
		var value = "";
		if (match != null) {
			value = match[1];
		};
		return value;
	};

	function loadModalXML(referenceValue){
		$.ajax({
			type: "GET",
			url: referenceValue+".xml",
			dataType: "xml",
			success: parseModalXML
		});
	};
	
	function parseModalXML(xml){
		var imageDir = $(xml).find("imagePath").text();				
		

				
	};


	// INITIALIZATION	
	getData();

	
});