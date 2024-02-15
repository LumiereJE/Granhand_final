$(document).ready(function(){

    let sec_top = $('main').offset().top;

    let item_list = [];
    for(let i=0; i<$('.item_box').length; i++) {
        item_list[i] = $('.item_box').eq(i).offset().top;
    }

    $(window).scroll(function(){

  let s_top = $(window).scrollTop(); 

        for(let i=0; i<$('.item_box').length; i++) {
            if($('.item_box').eq(i).hasClass('sec_active') == false) {
                if(s_top + 500 >= item_list[i]) {
                    $('.item_box').eq(i).addClass('sec_active')
                }
            }    
        }

    })

})