$(document).ready(function(){

    let sec_top = $('main').offset().top;
    
    let jour = $('.journal_sec').offset().top;
    let cur = $('.curation_sec').offset().top;
    let fra = $('.fragrance_sec').offset().top;

    let st_ns= $('.st_ns_box').offset().top;
    let st_mp = $('.st_mp_box').offset().top;
    let st_sc = $('.st_sc_box').offset().top;
    let st_sg = $('.st_sg_box').offset().top;
    let st_bc = $('.st_bc_box').offset().top;

    let text = $('.text_sec').offset().top;

    $(window).scroll(function(){

        let s_top = $(window).scrollTop();
		
			console.log(sec_top, s_top)

        if(s_top + 400 >= jour) {
            $('.journal_sec').addClass('sec_active')
        }
        if(s_top + 400 >= cur) {
            $('.curation_sec').addClass('sec_active')
        }
        if(s_top + 400 >= fra) {
            $('.fragrance_sec').addClass('sec_active')
        }


        if(s_top + 500 >= st_ns) {
            $('.st_ns_box').addClass('sec_active')
        }
        if(s_top + 500 >= st_mp) {
            $('.st_mp_box').addClass('sec_active')
        }
        if(s_top + 500 >= st_sc) {
            $('.st_sc_box').addClass('sec_active')
        }
        if(s_top + 500 >= st_sg) {
            $('.st_sg_box').addClass('sec_active')
        }
        if(s_top + 500 >= st_bc) {
            $('.st_bc_box').addClass('sec_active')
        }


        if(s_top + 500 >= text) {
            $('.text_sec').addClass('sec_active')
        }

    })

})