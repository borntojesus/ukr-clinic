$( document ).ready(function() {
    $('.faq .faq__question').on('click', function() {
        $(this).next()
            .slideToggle(500)
            .siblings('.faq__answear')
            .slideUp();
    });
});
