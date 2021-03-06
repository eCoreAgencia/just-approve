$(document).ready(function(){

    jQuery.fn.simulateClick = function() {
        return this.each(function() {
            if ('createEvent' in document) {
                var doc = this.ownerDocument,
                evt = doc.createEvent('MouseEvents');
                evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                this.dispatchEvent(evt);
            } else {
                this.click();
            }
        });
    }
    
    $('.choose-skus .skuList').each(function(){
        var inactive = $(this).find('.inactive');
        var myPrice = $(this).next().find('.preco');
        var cloneAndShow = myPrice.clone();
        cloneAndShow.insertBefore('.choose-skus');
    });

    $('.buy-box .preco').first().show();

    // Anchor Smooth Medidas //
        // $(window).scrollTop($('#bt-tabela').offset().top);
    // Anchor Smooth Medidas //   


    // Not Adding Sku //
        $('.buy-box .bt-comprar').attr('id', 'sku-not-add');
    // Not Adding Sku //

    // Remanegement Pricing //
        $('.choose-skus .skuList:first-child .preco').insertBefore('.choose-skus');
        $('.valor-dividido br').remove();
    // Remanegement Pricing //

    // Manipulating BuyButton //
        // Sku's Not Choice //
            $('#sku-not-add').click(function(){
                $('.modal-container').remove('.new-modal-content');
                $('<div class="new-modal-content news-element error-add"><h3>É preciso escolher uma variação de Tamanho para poder finalizar a compra.</h3></div>').appendTo('.modal-container');
                $('body').addClass('modal-active product-popup');
            });
        // Sku's Not Choice //


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

            $('.skuList').each(function(){
                $(this).click(function(){
                    var nameSku = $('.nomeSku');
                    $('.skuList').removeClass('sku-picked');
                    $(this).addClass('sku-picked');
                    var where = $(this).find('.buy-button');
                    
                    // Save myLink //
                    var myLink = where.attr('href');
                    
                    $('.modal-box').addClass('inactive-modal');
                    $('.inactive-modal').removeClass('modal-box');

                    // Removing ID attr and change Buy Button URL
                    $('.buy-box .bt-comprar').removeAttr('id');
                    $('.buy-box .bt-comprar').attr('href', myLink);
                });
            });
        // Pick SKU //
    // Manipulating BuyButton //
});

$(document).ajaxStop(function(){
    // Only One SKU //
        var me = $('.choose-skus .skuList:nth-child(2)');
        if($(me).length == false){
            $('.choose-skus').hide();
            $('.bt-comprar').on('click', function(event){
                $('.skuList').simulateClick('click');
            });
        }
    // Only One SKU //
});