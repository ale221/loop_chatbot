(function($){$(document).ready(function(){$('[class*="triggerwrap_"]').each(function(){var classes=$(this).attr("class");var modal_id=hc_get_modal_id(classes,'triggerwrap_');$(this).find("a").addClass("trigger_"+modal_id)});$('[class*="trigger_"]').click(function(){var classes=$(this).attr("class");var modal_id=hc_get_modal_id(classes,'trigger_');hc_show_popup(modal_id)});$('[class*="close_"]').click(function(){var classes=$(this).attr("class");var modal_id=hc_get_modal_id(classes,'close_');hc_hide_popup(modal_id)});$(window).click(function(e){var modal_id=hc_get_modal_id(e.target.id,'modal_');if(modal_id!=''){hc_hide_popup(modal_id,!1)}});function hc_get_modal_id(classes,prefix){var afterbang='';if(classes.indexOf(' ')==-1){afterbang=classes.substring(prefix.length)}else{var index=classes.indexOf(prefix);afterbang=classes.substring(index+prefix.length,classes.indexOf(' ',index))}
return afterbang}
function hc_show_popup(modal_id,reset_menu=!0){var modal_name='modal_'+modal_id;$('.hc-hidden-popup-widget-area').css("display","block");$('#'+modal_name).css("display","block");if(reset_menu==!0){hc_reset_menu_display()}}
function hc_hide_popup(modal_id,reset_menu=!0){var modal_name='modal_'+modal_id;$('.hc-hidden-popup-widget-area').css("display","none");$('#'+modal_name).css("display","none");if(reset_menu==!0){hc_reset_menu_display()}}
function hc_reset_menu_display(){}})})(jQuery)