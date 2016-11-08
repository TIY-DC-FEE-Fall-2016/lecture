(function() {
    'use strict';

    window.ns = window.ns || {};

    window.addEventListener('hashchange', function(eventObj) {

        console.log('hash changed', window.location);

        var listOfElems = document.querySelectorAll('main');
        for (var i=0; i<listOfElems.length; i++) {
            listOfElems[i].style.display = 'none';
        }
        // in jQuery: $('main').hide();

        var theNavElement = document.querySelector('[href="' + window.location.hash + '"]');
        theNavElement.parentNode.classList.add('active');
        // in jQuery: $('nav li').removeClass('active');
        //            $('[href="' + window.location.hash + '"]').addClass('active');

        var theElement = document.querySelector(window.location.hash);
        theElement.style.display = 'block';

        if (window.location.hash === '#list-stuff') {
            window.ns.initializeListView(); // probably defined in the view
        }

    });

})();
