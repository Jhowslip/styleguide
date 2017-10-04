(function () {

    var examplesData = [
        'sections/typography.html',
        'sections/button.html',
        'sections/link.html',
        'sections/panel.html',
        'sections/icon.html',
        'sections/modal.html',
        'sections/trackstep.html',
        'sections/input.html',
        'sections/radio.html'
    ];

    var $examples = $('[data-examples]');

    $(examplesData).each(function (index, item) {
        $.get(item, function (htmlToInclude) {
            var $section = $('<section class="section"></section>');

            $section.html(htmlToInclude);

            $section.appendTo($examples);
        });
    });
})();