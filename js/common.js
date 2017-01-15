$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("#owl-demo").owlCarousel({ 
      items : 3,
      pagination : false,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [979, 3],
      itemsTablet : [768, 1],
 
  	});


    
    $('.accordeion_item').mouseover(function() {       
        $(this).css({'width':'32%'});
        var tab1 = $(this);
        $('.accordeion_item').not(tab1).css({'width':'17%'});
    });

    $('.accordeion_item').mouseout(function() {
    	$('.accordeion_item').css({'width':'20%'});
    });

    $(window).scroll(function(){
    	var scroll = $(window).scrollTop();

    	if (scroll >= 50) {
        	$(".main_nav").addClass("scroll");
    	} 
    	else {
       	 	$(".main_nav").removeClass("scroll");
    	}
    });

    $(".callback").fancybox();
    $(".video_link").fancybox();

    $('.all_programm_tabs_item').css("display","none");
	    $('.all_programm_tabs_item[id="tab1"]').css("display","block");

	    $('.all_programs_menu li').click(function() {
	        $('.all_programs_menu li').removeClass('active_programm');
	        $(this).addClass('active_programm');
	        var tab1 = $(this).attr('link');
	        $('.all_programm_tabs_item').not(tab1).css({'display':'none'});
	        $(tab1).fadeIn(400);
	 });

});
