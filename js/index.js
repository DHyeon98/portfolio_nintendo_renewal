$(function() {
    $('.nintendo_container').slick({
        slide: 'div',
        slidesToShow: 1,
        speed: 500,
        prevArrow : $('.pre'), 
        nextArrow : $('.next'),
        dots : false,
        dotsClass : "dotS",
        autoplay: false,
        draggable: true
    })
    $('.game_list').slick({
        slide: 'li',
        slidesToShow: 6,
        speed: 500,
        prevArrow : $('.pre1'), 
        nextArrow : $('.next1'),
        dots : false,
        dotsClass : "dotS1",
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true
    })

    // 메뉴바 
    $('.ham').on('click', function() {
        $('nav').css('transform', 'translateX(-100%)');
    })
    $('.close').on('click', function() {
        $('nav').css('transform', 'translateX(0%)');
    })

    // 메뉴버튼 스크롤값에 따라 색 변경
    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 
        let offset = $('.news').offset();
        console.log(offset.top);
        if(scrollValue > offset.top) {
            $('.ham').css('color', 'black');
        }else {
            $('.ham').css('color', '#fff');
        }
    });

    $('.animal').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/animal.mp4');
    }))
    $('.skul').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/skul.mp4');
    }))
    $('.zelda').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/zelda.mp4');
    }))
    $('.civil').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/civil.mp4');
    }))
    $('.cook').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/cook.mp4');
    }))
    $('.two').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/two.mp4');
    }))
    $('.over').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/over.mp4');
    }))
    $('.moving').on('mouseover', (function() {
        $('.game_vid').attr('src', './media/moving.mp4');
    }))
    // 첫 페이지로 이동
    $('.up').click(function(){
        $('html').animate({scrollTop : 0}, 400);
    });
})