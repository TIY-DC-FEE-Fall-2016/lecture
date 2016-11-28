(function() {
    'use strict';

    angular.module('lecture')
        .controller('EmailController', EmailController);

    var counter = 1;

    function EmailController() {
        console.log('I am creating a controller!', counter);

        // DATA VARIABLES ON MY SCOPE
        this.name = 'Jordan';
        this.emailSortOrder = 'sender';

        // I can access "counter" in here because of closures
        this.unreadCount = counter * 10;  // or I could get this form an ajax call

        this.emails = [  // really this would have come from a server (and that means an Angular service)
            { sender: 'Navi', subject: 'I love this class', time: new Date() },
            { sender: 'Steph', subject: 'I love answering questions in class', time: new Date() },
            { sender: 'Rodolfo', subject: 'I like your hats', time: new Date() }
        ];

        // CONTROLLER METHODS (ALSO ON MY SCOPE)
        this.incrementCount = function incrementCount() {
            this.unreadCount++;
            this.emails.push({ sender: 'foo', subject: 'bar', time: new Date() });
        };

        this.getShortDate = function getShortDate() {
            var now = new Date();
            return (now.getMonth() + 1) + '/' + now.getDate();
        };

        counter++;
    }

})();
