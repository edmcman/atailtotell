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