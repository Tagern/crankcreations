//NAVIGATION HIDE
var  mn = $(".navigation");
    mns = "navigation-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

// TOGGLE DISPLAY
function toggle_visibility() {
  $( "#all-values" ).fadeToggle("400", function(){
  });
}


//DOCUMENT ONLOAD FOR SLIDE LEFT ELEMENT
$(document).ready(function() {
    if( $(window).width() > 1000 ) {

      var checker = true;
      $("#moving-cog").click(function () {
          targetLeft = checker ? "-30%" : "0%";
          $(this).animate({left: targetLeft});   
          checker ? checker = false : checker = true;

      }); 

    } 
    else {
    	$("#moving-cog").click(null);

    }
    $("#moving-cog").click(toggle_visibility);
});

//RESIZING FOR SLIDE LEFT ELEMENT
$(window).resize(function() {
    if( $(window).width() > 1000 ) {

      var checker = true;
      $("#moving-cog").click(function () {
          targetLeft = checker ? "-30%" : "0%";
          $(this).animate({left: targetLeft});   
          checker ? checker = false : checker = true;
      });

    } 

    else {
    	$("#moving-cog").unbind('click');
    	document.getElementById("moving-cog").style.marginLeft = "";
    }
    $("#moving-cog").click(toggle_visibility);
});


//testimonial slide will go here



