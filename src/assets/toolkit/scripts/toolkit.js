/**
 * Toolkit JavaScript
 */

 $(document).ready(function() {
    $('select').material_select();
  });


$(".sibling-button").focus(function(){
  $(this).parent().addClass("is-active");
  $(this).siblings(".input-on").addClass("button-on");
});


$('.showhide').on('click', function(){
	if ($('#password').attr('type') == 'password') {
		$(this).siblings("input").attr('type', 'text');
		$(this).addClass("icon-hide-password");
		$(this).removeClass("icon-show-password");
		$(this).children("p").text("Ver");
	} else {
		$(this).siblings("input").attr('type', 'password');
		$(this).removeClass("icon-hide-password");
		$(this).addClass("icon-show-password");
		$(this).children("p").text("Esconder");
	}
	
});