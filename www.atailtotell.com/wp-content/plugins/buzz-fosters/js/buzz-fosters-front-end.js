(function($){
	$(document).ready(function(){

		var ffCheckInterval = setInterval(function(){

			var $nestedEntries = $('.gpnf-nested-entries').parents('.gfield');

			if( $nestedEntries.size() == 0 ) {
				return;
			}

			$nestedEntries.each(function(){

				if( $(this).find('tbody tr').size() > 1  ) {
					$(this).find('.gpnf-nested-entries').css('display', 'block');
				} else {
					$(this).find('.gpnf-nested-entries').css('display', 'none');
				}

			});

		}, 300);
		
		
	});
	
})(jQuery);


jQuery(window).load(function() {
	
	// change button label to PREVIOUS
	if( jQuery('#Bzl-afv-forms').length > 0 ) {
		
		jQuery(document).on('gform_page_loaded', function(event, form_id, current_page){
	        jQuery('.gform_page_footer .gform_previous_button').val('Previous');
			console.log('triggered!');
	    });
		
		
	}
	
});