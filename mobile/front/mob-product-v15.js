$(document).ready(function(){

    // Not Adding Sku //
        $('.buy-box .bt-comprar').attr('id', 'sku-not-add');
    // Not Adding Sku //

    // Remanegement Pricing //
        $('.choose-skus .skuList:first-child .preco').insertBefore('.choose-skus');
        $('.valor-dividido br').remove();
    // Remanegement Pricing //

    // Manipulating BuyButton //

        $('.close-bt-opacity').on('click', function(event){
            $('body').removeClass('opacity-active');
            $(this).removeClass('active');
        });

        $('.opacity-all').on('click', function(event){
            $('body').removeClass('opacity-active');
            $('.close-bt-opacity').removeClass('active');
        });

        $('.skuList').on('click', function(event){
            $('body').removeClass('opacity-active');
            $('.close-bt-opacity').removeClass('active');
        });

        $(function(){
            var stickyHeaderTop = $('.top-view').offset().top;
            $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop-85 ) {
                    $('.compra-persistente-bt').addClass('active');  
                } else {
                    $('.compra-persistente-bt').removeClass('active');
                }
            });
        });


        // Find Empty Skus //
            var emptyParent = $('.portal-notify-me-ref').parent();
            var emptyParentOne = $(emptyParent).addClass('inactive');
        // Find Empty Skus //


        // Pick SKU //
            $('.skuList.inactive').click(function(){
                $('.modal-container').remove('.new-modal-content');
                $('<div class="new-modal-content news-element error-add"><h3>Esse produto está temporariamente sem estoque.</h3></div>').appendTo('.modal-container');
                $('body').addClass('modal-active product-popup');
                $('.inactive-modal').addClass('modal-box');
                $('.modal-box').removeClass('inactive-modal');
                $('.buy-box .bt-comprar').attr('id', 'sku-not-add');
            });

            $('.skuList .nomeSku').click(function(){

                $('.skuList').removeClass('sku-picked');
                $(this).addClass('sku-picked');
                
                // Save myLink //
                var myNext = $(this).next();
                var myLink = $(myNext).next().attr('href');
                
                $('.modal-box').addClass('inactive-modal');
                $('.inactive-modal').removeClass('modal-box');

                // Removing ID attr and change Buy Button URL
                $('.buy-box .bt-comprar').removeAttr('id');
                $('.buy-box .bt-comprar').attr('href', myLink);
            });
        // Pick SKU //
    // Manipulating BuyButton //

        // Sku's Not Choice //
        $('#sku-not-add').click(function(){
            $('.modal-container').remove('.new-modal-content');
            $('<div class="new-modal-content news-element error-add"><h3>É preciso escolher uma variação de Tamanho para poder finalizar a compra.</h3></div>').appendTo('.modal-container');
            $('body').addClass('modal-active product-popup');
        });
    // Sku's Not Choice //

    $('.choose-skus .skuList').each(function(){
        var inactive = $(this).find('.inactive');
        var myPrice = $(this).next().find('.preco');
        var cloneAndShow = myPrice.clone();
        cloneAndShow.insertBefore('.choose-skus');
    });

    $('.product-view .preco').first().show();
    $('.choose-skus').insertAfter('.product-box');

    $('.compra-persistente-bt').on('click', function(event){
        var myBtLink = $('.buy-box .bt-comprar');
        if($(myBtLink).attr('id') == "sku-not-add" ) {
            $('.close-bt-opacity').toggleClass('active');
            $('body').toggleClass('opacity-active');
            document.querySelector('#id3').scrollIntoView({ 
                behavior: 'smooth' 
            });
        } else {
            $('.bt-comprar').simulateClick('click');
        }
    });

});