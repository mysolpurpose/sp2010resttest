/*global define */
define(['jquery'], function ($) {
    'use strict';


	var Doclib = function(options){
		this.site = options.site || '';
		this.listname = options.listname || '';
	}

	Doclib.prototype.fetch = function(){
		var doclib = this;
		return $.getJSON(this.site + "/_vti_bin/listdata.svc/" + this.listname).done(function(data){
				doclib.contents = data.d.results;
			}
		);
	};

	return Doclib;

});
