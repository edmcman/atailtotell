// JavaScript Document
// Author Name: Dezinethemes
// Author URI: http://www.dezinethemes.com
// Creation Date: 8 Aug 2018

function autoTabDates() {
	$(".ginput_container_date > input").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).closest('.ginput_container_date').next('.ginput_container_date').find('input').focus();
        }
    });
}

// load DOM
( function ( $ ) {
    'use strict';
    
    $(window).load(function() {
		$('#wpadminbar a.screen-reader-shortcut').removeAttr('tabindex');
		if( $(".ginput_container_date").length > 0 ) {
			autoTabDates();
		}
		$(document).on('gform_page_loaded', function(event, form_id, current_page){
	        if( $(".ginput_container_date").length > 0 ) {
	        	autoTabDates();
	        }
	    });
	});
	
	/// Navigation Menu Slider
	$('#nav-expander, #nav-expander-m').on('click',function(){
		$('body').toggleClass('nav-expanded');
	});
	$('#nav-close, #nav-close-m').on('click',function(){
		$('body').removeClass('nav-expanded');
	});
				
	// Top Arrow
	$(window).scroll(function() {
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
	});
	  
	// Fixed Top bar
	$(window).bind('scroll', function() {
	var navHeight = '5';
		if ($(window).scrollTop() > navHeight) {
			$('.Bzl-header').addClass('sticky');
		}
		else {
			$('.Bzl-header').removeClass('sticky');
		}
	});
	
	// Donation Dropdown Open on Dog Details Page
	$('#dog_sponsor').on("click", function(e) {
		e.preventDefault();
		$('#dog_sponsor_box').slideToggle(300);
	});
	
	// Donation Dropdown Open on Cat Details Page
	$('#cat_sponsor').on("click", function(e) {
		e.preventDefault();
		$('#cat_sponsor_box').slideToggle(300);
	});
	
	// Tooltips
	$('[data-toggle="tooltip"]').addClass('ttip');
	$('.ttip').tooltip();
	
	// Advanced Filter
	$('.buzz-dogs-shortcode a.Bzl-afl').on("click", function(e) {
		e.preventDefault();
		$('#buzz_advanced_search').toggleClass('d-none');
	});
	
	// Advanced Search Filter
	var bz_searchManager = {
		_searchValues : [],
		run: function() {
			var self = this;
			$(document).on('change', '.ads_search', function() {
				var attrName = $(this).attr('data-attribute-name'); // gender
				var attrValue = $(this).val(); // Male
				self._searchValues[attrName] = attrValue;
				self.sortTheDogs();
			});
		},
		sortTheDogs: function() {
			var self = this;		
			$('.type-dog').each(function(){
				var isValid = true;
				for( var i in self._searchValues ) {
					var attributeName = i;
					var attributeValue = self._searchValues[i];
					if( attributeValue.length == 0 ) {
						continue;
					}
					if( $(this).attr('data-' + attributeName ) !== attributeValue ) {
						isValid = false;
					}
				}
				if( isValid == true ) {
					$(this).removeClass('d-none');
				} else {
					$(this).addClass('d-none');
				}
			});
		},
	};
	bz_searchManager.run();
	// clear filters
	$(document).on('click', '#ads_clear_filter', function() {
		$('#buzz_advanced_search select.ads_search').prop('selectedIndex', 0);
		$('.buzz-dogs-shortcode .type-dog').removeClass('d-none');
	});
		
	// Fixed Hd margin
	var windowwidth = $(window).width();
	
	var navHeight = $('.Bzl-header').not(".home #Bzl-Hd-austin, .home #Bzl-Hd-sydney, .home #Bzl-Hd-springdale, #Bzl-Hd-annarbor, #Bzl-Hd-detroit").height();
	if(windowwidth >= 768) {
		setTimeout(function(){$('#Bzl-content').css('margin-top', navHeight);}, 1000);
	}
	var navHeightdetroit = $(' #Bzl-Hd-annarbor.Bzl-header .navCol').height();
	if(windowwidth >= 768) {
		setTimeout(function(){$('#Bzl-content').css('margin-top', navHeightdetroit);}, 1000);
	}
	var navHeightdetroitipad = $(' #Bzl-Hd-annarbor.Bzl-header, #Bzl-Hd-detroit.Bzl-header').height();
	if(windowwidth == 768) {
		setTimeout(function(){$('#Bzl-content').css('margin-top', navHeightdetroitipad);}, 1000);
	}
	var nav_Height = $('#Bzl-Hd-detroit .navCol').height();
	if(windowwidth > 768) {
		setTimeout(function(){$('#Bzl-content .Bzl-breadcrumb').css('padding-top', nav_Height);}, 1000);
	}
	
	// equal heights
	function equalHeights() {
	    $('.row').each(function(){  
	      var highestBox = 0;
	      $('.equal', this).each(function(){
	        if( $(this).height() > highestBox ) {
	          highestBox = $(this).height(); 
	        }
	      });  
	      $('.equal', this).height(highestBox);
	    }); 
	}
	// on load() init
	equalHeights();
	
	// Remove empty p tag
	jQuery('p:empty').remove();
	
	// Dog Gallery Magnifiq Popup
	$('.Bzl-popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery:{
	    enabled:true
	  },
      callbacks: {
        elementParse: function(item) {
		     if(item.el.context.className == 'popupVideo') {
		       item.type = 'iframe';
		     } else {
		       item.type = 'image';
		     }
        }
      },
	  
	});
	
	$('.popupVideo').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    // Owl carousel for gallery and testimonial
	$('#Bzl-sponsors.owl-carousel').owlCarousel({
		loop: true,
		rewind: false,
		margin: 20,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: true,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: true,
		nav: false,
		navText : ["<img class='svg' src='wp-content/themes/buzz-rescues/assets/img/svg/arrow-left-w.svg' onerror='this.src='wp-content/themes/buzz-rescues/assets/img/svg/arrow-left-w.png' alt='Prev' />","<img class='svg' src='wp-content/themes/buzz-rescues/assets/img/svg/arrow-right-w.svg' onerror='this.src='wp-content/themes/buzz-rescues/assets/img/svg/arrow-right-w.png'' alt='Next' />"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			480:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true
			},
			1200:{
				items:4,
				nav:true
			}
		}
	});
	
	// about popup
	$(function() {
		$(document).on("click", '.pop_link > a', function(e) {
			e.preventDefault();
			$('.popup').removeClass('appear');
			$('.popup').fadeOut(200);
			var target = this.hash;
			$(target).fadeIn(200);
			$(target).addClass('appear');
			$(target).addClass('appear');
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 500);
		});
		// closing
		$(document).on("click", 'a.close', function(e) {
			e.preventDefault();
			$(this).closest('.popup').fadeOut(200);
		});
	});
	
	/*** ======= DOG PAGINATION ========= ***/
	var pageSize = 16;
	var showPage = function(page) {
	  $('.Bzl-dog-post').hide();
	  $('.Bzl-dog-post:gt('+((page-1)*pageSize)+'):lt('+(page)*(pageSize-1)+')').show();
	   $('.Bzl-dog-post:eq('+((page-1)*pageSize)+')').show();
	}
	
	var pgs = Math.ceil($('.Bzl-dog-post').length/pageSize);
	var pgnt = '';
	  for(var i=1;i<=pgs;i++){
		pgnt += '<li class="page-item '+(i===1?'active':'')+'"><a href="#" class="page-link '+(i===1?'active':'')+'">'+i+'</a></li>';
	}
	$('#bzl-pagin').html(pgnt);
	$("#bzl-pagin li a").click(function(e) {
		e.preventDefault();
		$("#bzl-pagin li").removeClass("active");
		$("#bzl-pagin li a").removeClass("active");
		$(this).closest('li').addClass("active");
		$(this).addClass("active");
		showPage( parseInt( $(this).text() ) ); 
		
	});
	showPage(1);
	
})(jQuery); // end of jQuery dom