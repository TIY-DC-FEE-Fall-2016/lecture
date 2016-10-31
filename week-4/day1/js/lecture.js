(function() {
    'use strict';

    // x = 42;   // in strict mode, this is NOT ok... causes an ReferenceError
    // var y = 042; // this appears to define an octal, but isn't

    // function sum(x, y, x) {  // no duplicate arg names!!
    //
    // }


    console.log('hello!', jQuery);
    // $ === jQuery

    console.log( $('main') );

    // var ul = document.createElement('ul');
    // ul.classList.add('stuff');
    // var li = document.createElement('li');
    // li.innerText = 'FIRST!';
    // li.classList.add('stuff-to-do');
    // ul.appendChild(li);
    // document.querySelector('main').appendChild(ul);

    $('main')
        .append('<button>Add Item</button>')
        .find('button')
            .css({ color: 'green' })
            .addClass('create-item')
            .on('click', function addItem() {
                $('.stuff').append('<li>wooo!</li>');
            })
            .end()  // change the current selection to whatever was previously selected (in this case, the `main` element)
        .append('<ul class="stuff"><li class="stuff-to-do">FIRST!</li></ul>')
        .find('ul.stuff')
            .on('click', 'li:nth-child(odd)', function removeItem(event) {
                // ONLY call event handler if the TARGET matches
                // the second argument selector above
                // this  // the RAW HTML element: <li>

                var count = $(this).closest('section').find('.remove-count');
                // .siblings('.foobar')  // find all siblings matching the selector

                // this is NOT a raw HTML element
                console.log(count);
                count.text('item removed!');

                $(this).remove();

            })
            .find('li')
                .addClass('special');
                // DON'T put CSS in your JS... if at all possible
                //  .css({
                //     color: 'red',
                //     backgroundColor: 'gray'
                // });

    $('.second')
        .on('click', function makeSpecial() {
            $(this).toggleClass('special');
            $(this)
                .find('h2')
                    .toggle();
                    // show() and hide()
        });


    $('body').on('click', function sayHello() {
        console.log('hello from the body');
    });
    $('button').on('click', function stahp(event) {
        event.stopPropagation();  // don't bubble this event up!
        console.log('clicked on the button');
    });


})();
