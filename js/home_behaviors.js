$(document).ready(function() {
					
	// VARIABLES
	

	
	// EVENT HANDLERS
	$("#homeLogo").on("tap",function(){
		window.location="home.html?reference=" + "home"	
	});
	
	$("#homeList a").click(function(event) {
		alert($(this).attr('href'))
		event.preventDefault();
	});	

	// FUNCTIONS
	function loadHomeXML(){
		$.ajax({
			type: "GET",
			url: "home.xml",
			dataType: "xml",
			success: parseHomeXml
		});
	};
	
	function parseHomeXml(xml){
		var imageDir = $(xml).find("imagePath").text();				
		
		var fmaHtml;
		
		$(xml).find("fma").each(function(){
			var fmaPhoto = $(this).find("fmaPhoto").text();
			
			fmaHtml = "<img src='" + imageDir + fmaPhoto + "' />"		
											
			$("#fmaPhoto").append(fmaHtml);
		});		
		
		var homeHeading = $(xml).find("home").text();
		$("#mainHeader").html(homeHeading);
				
		var homeHtml;
		var imageDir = $(xml).find("imagePath").text();		
		
		$(xml).find("fma").each(function(){
			var button = $(this).find("button").text();
			var reference = $(this).find("reference").text();
			
			homeHtml = "<li><a href='course.html' data-reference='"+reference+"' data-transition='slidefade'><img src='" + imageDir + button + "' width='100%' height='100%'/></a></li>"		
											
			$("#homeList").append(homeHtml);
		});
		
		addHomeListEventHandlers();
	};
	
	function addHomeListEventHandlers(){
		
		$("#menuList a").on("tap", function(){
			console.log("hit");
			var page = $(this).attr("href");
			var referenceValue = $(this).attr("data-reference");
			
			window.location = page+"?reference="+referenceValue;
		});
	};
	

	// INITIALIZATION				
	loadHomeXML();

});
