(function($){function set_slider_height(){if(navigator.userAgent.indexOf("Firefox")!=-1){return}
var max_item_height=0;$('.fxo-features-carousel .wppsac-post-carousel .wppsac-carousel-slides').each(function(){var item_height=$(this).outerHeight();if(item_height>max_item_height){max_item_height=item_height}});$('.fxo-features-carousel .wppsac-post-carousel .wppsac-carousel-slides').css('height',max_item_height+'px')}
$(document).ready(function(){var scroll_pos=0;var scrolling=1;var top_header_height=$('.fxo-top-header-widget-area').height();if(top_header_height){scrolling=top_header_height}
scroll_pos=$(this).scrollTop();if(scroll_pos>scrolling){scroll_top_menu()}
$(document).scroll(function(){scroll_pos=$(this).scrollTop();if(scroll_pos>scrolling){scroll_top_menu()}else{unscroll_top_menu()}});function add_sticky_logo(){$("#masthead .ast-site-identity .custom-logo-link").append('<img src="'+sticky_logo+'" class="sticky-custom-logo" width="120" height="120" />')}
function scroll_top_menu(){var is_elementor_editor_active=$('body').hasClass('elementor-editor-active');if(!is_elementor_editor_active){$("body").addClass("ast-primary-sticky-header-active");$(".main-header-bar").addClass("ast-sticky-active");$(".main-header-bar").addClass("ast-sticky-shrunk");$(".main-header-bar").addClass("ast-header-sticked")}}
function unscroll_top_menu(){var is_elementor_editor_active=$('body').hasClass('elementor-editor-active');if(!is_elementor_editor_active){$("body").removeClass("ast-primary-sticky-header-active");$(".main-header-bar").removeClass("ast-sticky-active");$(".main-header-bar").removeClass("ast-sticky-shrunk");$(".main-header-bar").removeClass("ast-header-sticked")}}
var hclzyload_scroll_pos=0;var hclzyload_scrolling=0;hclzyload_check_and_load();$(document).scroll(function(){hclzyload_check_and_load()});function hclzyload_check_and_load(){hclzyload_scroll_pos=$(document).scrollTop();$('.hclzyload.notloaded').each(function(){hclzyload_scrolling=$(this).offset().top-$(window).height()-500;if(hclzyload_scroll_pos>hclzyload_scrolling){$(this).attr('src',$(this).attr('data-src')).removeClass('notloaded').delay(1000).fadeIn(1000)}})}
$('.youtube-embed').each(function(){var embed_code=$(this).attr("data-id");var iframe_width=$(this).attr("data-width");var iframe_height=$(this).attr("data-height");var iframe_html='';if(embed_code!=null){if(iframe_width==null&&iframe_height==null){var container_width=$(this).width();iframe_width=container_width;iframe_height=container_width*0.5625}
var iframe_width_html='';if(iframe_width!=null){iframe_width_html=' width="'+iframe_width+'" '}
var iframe_height_html='';if(iframe_height!=null){iframe_height_html=' height="'+iframe_height+'" '}
iframe_html='<iframe class="hclzyload notloaded" '+iframe_width_html+iframe_height_html+' data-src="https://www.youtube.com/embed/'+embed_code+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';$(this).html(iframe_html)}})});$(window).on('load',function(){set_slider_height()});$(window).resize(function(){set_slider_height()})})(jQuery)