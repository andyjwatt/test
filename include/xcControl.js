$(document).ready(function(){
	
	//while (true) {
	//runSlides()
	initSlides()
	//}
  //});
    //} while (true)
});

function resetSlides() {
	$("#slide2").css({left: 401});
	$("#slide3").css({top: -235});
	//$("#slide2").left(301)
	//$("#slide3").top(-235)
	
	$("#text2").css({top: 80, left: 400});
	$("#text3").css({top: 120, left: 400});

}

function initSlides() {

	resetSlides()
	
	runSlides()
}

function showText1() {
	$("#text3").animate({top: 300, left: 400})
	$("#text1").animate({left: 50, top:60 })
}
function showText2() {
	$("#text1").animate({top: 0, left: 400})
	$("#text2").animate({left: 30, top:100 })
}
function showText3() {
	$("#text2").animate({top: 150, left: 400})
	$("#text3").animate({left: 30, top:80 })
}

function runSlides() {
	var iSpeed=3000
    //$("button").click(function(){
	//initSlides()
	 
	//do {
	setTimeout( function() {
	  //alert("hi")
	  
//		$("#slide3").animate({
//			left:'-250px'
      //opacity:'0.5'
      //height:'150px',
      //width:'150px'
//		});
	  
		$("#slide1").fadeOut("quick", function() {
			$("#slide2").animate({left: "0px" }, function() {
				    // Animation complete.
				    //alert("done")
				showText2()
				setTimeout( function() {
					$("#slide2").animate({left: "-401px" }, function() {
					    // Animation complete.
					    //alert("done")
						//setTimeout( function() {
							$("#slide3").animate({top: "0px" }, function() {
							    // Animation complete.
							    //alert("done")
								showText3()
								setTimeout( function() {
									$("#slide3").animate({top: "235px" }, function() {
									    // Animation complete.
									    //alert("done")
										//setTimeout( function() {
											$("#slide1").fadeIn("quick", function() {
											    // Animation complete.
											    //alert("done")
												showText1()
											    initSlides()
											});
						 				//}, iSpeed);

									});
				 				}, iSpeed);

							});
		 				//}, iSpeed);

					});
 				}, iSpeed);

			});


		});

	  
    
	}, iSpeed);

}