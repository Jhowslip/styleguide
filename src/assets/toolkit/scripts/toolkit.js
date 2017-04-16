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
