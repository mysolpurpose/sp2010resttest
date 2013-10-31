/*global define */
define(['jquery', 'doclib', 'listdisplay'], function ($, Doclib, ListDisplay) {
    'use strict';

    var doclib = new Doclib({
    	site : 'dev',
    	listname : "SitePages"
    });

    var listdisp = new ListDisplay({
    	doclib : doclib,
        htmlEl : $('#sitepages')[0],
        templateID : 'entry-template'
    })
    doclib.fetch().done(function() {
        listdisp.buildList();
    });

    return 'hi';
});

