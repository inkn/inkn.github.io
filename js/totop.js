$(window).scroll(function() {
    $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
	$(window).scrollTop() > 219 ? $("#toc").addClass("toc-fixed") : $("#toc").removeClass("toc-fixed");
	
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#homelogo").click(function() {
    $("html, body").animate({
        scrollTop: $(window).height()
    }, 1000, null);
    return false;
});



