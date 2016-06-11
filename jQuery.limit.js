;
(function($, window, document, undefinde) {
	$.fn.limit = function(length) {
		var objString = this.text();
		var objSize = objString.length;
		if (objSize > length) {
			this.attr("title", objString);
			objString = this.text(objString.substring(0, length) + "...");
		}
	}

})(jQuery, window, document)