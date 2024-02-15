$(document).ready(function(){

	let sec_top = $('main').offset().top;

    let bs_txt = [];
    for(let i=0; i<$('.text_area > p').length; i++) {
        bs_txt[i] = $('.text_area > p').eq(i).offset().top;
    }
    let bs_list = [];
    for(let i=0; i<$('.bs_list_item').length; i++) {
        bs_list[i] = $('.bs_list_item').eq(i).offset().top;
    }
    let se_list = [];
    for(let i=0; i<$('.se_list_item').length; i++) {
        se_list[i] = $('.se_list_item').eq(i).offset().top;
    }


    $(window).scroll(function(){

        let s_top = $(window).scrollTop();

        for(let i=0; i<$('.text_area > p').length; i++) {
            if($('.text_area > p').eq(i).hasClass('sec_active') == false) {
                if(s_top + 500 >= bs_txt[i]) {
                    $('.text_area > p').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.bs_list_item').length; i++) {
            if($('.bs_list_item').eq(i).hasClass('sec_active') == false) {
                if(s_top + 500 >= bs_list[i]) {
                    $('.bs_list_item').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.se_list_item').length; i++) {
            if($('.se_list_item').eq(i).hasClass('sec_active') == false) {
                if(s_top + 500 >= se_list[i]) {
                    $('.se_list_item').eq(i).addClass('sec_active')
                }
            }    
        }


    })
})  
