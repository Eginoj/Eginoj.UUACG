


//Hook up the flexslider

$(document).ready(function() {
    $('.flexslider').flexslider({
        directionNav: false,
    });
});






//chris coyier's little dropdown select-->
    $(document).ready(function() {
            
    //build dropdown	
    $("<select />").appendTo(".navigation nav div");
    
    // Create default option "Go to..."
    $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Go to..."
    }).appendTo("nav select");
    
    // Populate dropdown with menu items
    $(".navigation nav li a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo("nav select");
    });
    
    $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });
    
});

