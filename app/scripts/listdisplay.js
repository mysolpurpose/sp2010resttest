/*global define */
define(['jquery', 'handlebars'], function ($, Handlebars) {
    'use strict';

 	var ListDisplay = function(options)
 	{
 		this.doclib = options.doclib;
 		this.htmlEl = options.htmlEl;
 		this.templateID = options.templateID;
 	}

 	ListDisplay.prototype.buildList = function(){
 		var source   = $('#' + this.templateID).html();
		var template = Handlebars.compile(source);
		var html    = template(this.doclib);
		$(this.htmlEl).html(html);
 	}
	
 	return ListDisplay;
});