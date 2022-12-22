// faq__question click fucntion
// is-active hide() with animation & remove class is active
// this element closet parent with class faq__item show() and add class is-active


$( document ).ready(function() {
    // $(".faq__item").click(function(){
    //
    //     let faqItem = $(this).closest('.faq').find('.faq__item');
    //     let faqItemCurrent = $(this);
    //
    //     faqItem.removeClass('is-active');
    //     faqItemCurrent.toggleClass('is-active');
    //
    // });


    $('.faq .faq__item').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
            // Select all other answers
            .siblings('li.a')
            .slideUp();
    });
});

// console.log('faqItemCurrent 4', faqItemCurrent);
// console.log('faqItem 4', faqItem);
// console.log('13')
// let faqItemCurrentQuestion = $(this).find('.faq__question');
// let faqAnswear = $(this).closest('.faq').find('.faq__item.is-active .faq__answear');
// faqAnswear.hide(500);
// faqItemCurrentQuestion.show(500);