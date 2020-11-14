$(function() {

    $('.btn-search').click(
        function(e){
            e.preventDefault();
            $('.search').show()
        }
    )

    $('.btn-close').click(
        function(e){
            e.preventDefault();
            $('.search').hide()
        }
    )

    $('.hamburger').click(
        function(e){
            e.preventDefault()
            $(this).toggleClass('active')
            $('.header__menu, .header__top__menu').slideToggle()
            if($(this).hasClass('active')){
                $(this).find('img').attr('src', 'images/hamb-close.svg')
            } else{
                $(this).find('img').attr('src', 'images/hamb.svg')
            }
        }
    )

})