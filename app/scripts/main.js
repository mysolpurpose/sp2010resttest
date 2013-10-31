require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap', 
        handlebars : '../bower_components/handlebars.js/dist/handlebars'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    $(document).ready(function() {
        console.log(app);
    });
    console.log('Running jQuery %s', $().jquery);
});
