$(document).ready(function(){


    let sec_top = $('main').offset().top;


    let ns_st = [];
    for(let i=0; i<$('.ns_st').length; i++) {
        ns_st[i] = $('.ns_st').eq(i).offset().top;
    }  
    let mp_st = [];
    for(let i=0; i<$('.mp_st').length; i++) {
        mp_st[i] = $('.mp_st').eq(i).offset().top;
    }  
    let sc_st = [];
    for(let i=0; i<$('.sc_st').length; i++) {
        sc_st[i] = $('.sc_st').eq(i).offset().top;
    }  
    let sg_st = [];
    for(let i=0; i<$('.sg_st').length; i++) {
        sg_st[i] = $('.sg_st').eq(i).offset().top;
    }  
    let bc_st = [];
    for(let i=0; i<$('.bc_st').length; i++) {
        bc_st[i] = $('.bc_st').eq(i).offset().top;
    }  

    $(window).scroll(function(){

		//헤더
        let s_top = $(window).scrollTop();
    
        console.log(sec_top, s_top)
    
        if(0 < s_top) {
            $('header').addClass('header_active')
        }
        else if(0 >= s_top) {
            $('header').removeClass('header_active')
        }

////////////////////////////////////////////////////

        for(let i=0; i<$('.ns_st').length; i++) {
            if($('.ns_st').eq(i).hasClass('sec_active') == false) {
                if(s_top + 400 >= ns_st[i]) {
                    $('.ns_st').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.mp_st').length; i++) {
            if($('.mp_st').eq(i).hasClass('sec_active') == false) {
                if(s_top + 400 >= mp_st[i]) {
                    $('.mp_st').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.sc_st').length; i++) {
            if($('.sc_st').eq(i).hasClass('sec_active') == false) {
                if(s_top + 400 >= sc_st[i]) {
                    $('.sc_st').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.sg_st').length; i++) {
            if($('.sg_st').eq(i).hasClass('sec_active') == false) {
                if(s_top + 400 >= sg_st[i]) {
                    $('.sg_st').eq(i).addClass('sec_active')
                }
            }    
        }

        for(let i=0; i<$('.bc_st').length; i++) {
            if($('.bc_st').eq(i).hasClass('sec_active') == false) {
                if(s_top + 400 >= bc_st[i]) {
                    $('.bc_st').eq(i).addClass('sec_active')
                }
            }    
        }




    })


    $('.store_menu  > li > a').click(function(){  
   
        event.preventDefault();

        let href = $(this).attr('href'); 
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 50
        }, 300)

    })



})