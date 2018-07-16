// $.getScript('http://io.vtex.com.br/vtex.js/2.2.0/vtex.min.js');

// <script type="text/javascript">
// 	var _st_account = 1027;
// 	(function () {
// 		var ss = document.createElement('script');
// 		ss.type = 'text/javascript';
// 		ss.async = true;
// 		ss.src = '//app.shoptarget.com.br/js/tracking.js';
// 		var sc = document.getElementsByTagName('script')[0];
// 		sc.parentNode.insertBefore(ss, sc);
// 	})();

// </script>

(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }
});

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

var body = $('body'),
	htmlBody = $('html, body'),
	$document = $(document),
	header = $('#header'),
	submenuDesktopWrapper = $('.js-submenu-wrap'),
	userSubmenu = $('.submenu-user'),
	sidePanelMobile = $('.side-panel'),
	mobileSubmenu = $('.submenu-mobile'),
	slide = $('.slide'),
	slideShelf = $('.slideShelf'),
	slideBrands = $('.slideBrands'),
	carousel = $('.shelf-carousel'),
	backToTop = $('.js-back-to-top'),
	shelf = $('.prateleira'),
	paginatedShelf = $('.prateleira[id*=ResultItems]'),
	orderList = $('.order-list'),
	formNews = $('.newsletter'),
	depCatBus = $('.dep-cat-bus'),
	pagProduto = $('.produto'),
	pagInstitucional = $('.institucional'),
	sidebar = $('.sidebar');

$(function() {

	var depCatBus = $('.dep-cat-bus');
	var shelf = $('.prateleira');


	// Verificacao Genero Departamento-Categoria-Busca //
		if($(depCatBus).length > 0){
			var myGen = $('.bread-crumb .last a').text();
			shelf.addClass(myGen);

			var fem = $('.prateleira.Feminino');
			var masc = $('.prateleira.Masculino');
			
			fem.each(function(){
				$(this).find('.secundario').remove();
				$(this).find('.principal span.label-Masculino').remove();
				$(this).find('.secundario span.label-Masculino').remove();
			
				var myRealLink = $(this).find('li a.productShelf').attr('href');
				var myParam = myRealLink+'?lid=f777d960-5de6-496f-825e-c417d3012f69###';
			
				$('li a.productShelf').attr('href', myParam+'/#');
				$('li a.product-url').attr('href', myParam+'/#');
			});

			masc.each(function(){
				$(this).find('.principal').remove();
				$(this).find('.principal span.label-Feminino').remove();
				$(this).find('.secundario span.label-Feminino').remove();

				var myRealLink = $(this).find('li a.productShelf').attr('href');
				var myParam = myRealLink+'?lid=1ff1c8cc-1219-400e-a404-3a693e0cf84d###';

				$('li a.productShelf').attr('href', myParam+'/#');
				$('li a.product-url').attr('href', myParam+'/#');
			});
		}
	// Verificacao Genero Departamento-Categoria-Busca //


	// Verificacao Genero Produto Experiencia de acordo com o genero //
		if($(pagProduto).length > 0){
			// Controller Image Thumbs, Featured and SuperZoom //
				$("#___rc-p-id").each(function(index) {
					var id = $(this).attr("value");
					var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

					$.getJSON(data, function(data) {
						$.each(data, function(key, val) {
							var myVideo = val.MeuVideo;
							var myPosition = val.Posicao;
							var myIdVideo = val.IdDocumento;
							var elements = val.items[0].images;

							$(elements).each(function(data, val){
								// Take Images //
									var myLabel = val.imageLabel;
									var myImageID = val.imageId;
									var myImageName = val.imageText;
									$('<li class="'+myLabel+'"><img src="/arquivos/ids/'+myImageID+'-1000-1500/'+myImageName+'.jpg" /></li>').appendTo('.ProductImage .slider ul');
								// Take Images //

								// Masc Rules //
									$('body.masc-experience').find('.thumbnails li.feminino, .thumbnails li.versofeminino, .thumbnails li.principalfeminino').remove();
								// Masc Rules //

								// Fem Rules //
									$('body.fem-experience').find('.thumbnails li.masculino, .thumbnails li.versomasculino, .thumbnails li.principalmasculino').remove();
								// Fem Rules //
							});

							$('<li class="hover-video"><span></span><video width="80" controls><source src="http://api.vtex.com/justapproveinfra/dataentities/VD/documents/'+myIdVideo+'/video/attachments/'+myVideo+'</video></li>').insertBefore('.thumbnails li:nth-child('+myPosition+')');
							$('<div class="my-video-position inactive"><video width="470" controls><source src="http://api.vtex.com/justapproveinfra/dataentities/VD/documents/'+myIdVideo+'/video/attachments/'+myVideo+'</video></div>').insertBefore('.easyzoom');
						
							$('.hover-video span').on('click', function(e){
								$('.my-video-position').removeClass('inactive');
								var myvideo = $('.my-video-position video');
								$(myvideo).trigger('play');
							});
						});

						$('.ProductImage .slider ul').slick({
							autoplay: false,
							arrows: false,
							dots: true,
							draggable: true,
							touchMove: true,
							slidesToShow: 1,
							slidesToScroll: 1
						});
					});
				});
			// Controller Image Thumbs, Featured and SuperZoom //
		}
	// Verificacao Genero Produto Experiencia de acordo com o genero //


	// Ajuste Meus Pedidos //
		if (orderList.length > 0) {
			orderList.find('link').remove();
			orderList.find('.page-header').unwrap('.container');
		}
	// Ajuste Meus Pedidos //


    // Scripts Modal //
        // Close Modal //
        $('.close-modal, .opacity-modal').click(function(event) {
            $('body').removeClass('modal-active');
            $('body').removeClass('newsletter-active');
            $('body').removeClass('product-popup');
            $('.new-modal-content').remove();
        });

        $(document).keyup(function(ev) {
            if (ev.keyCode == 27)
            $('body').removeClass('modal-active');
            $('body').removeClass('newsletter-active');
            $('body').removeClass('product-popup');
            $('.new-modal-content').remove();
            $('#parcelamentoModal').removeClass('active');
        });
    	// Close Modal //
	// Scripts Modal //

	// Remocao de Li HelperComplement Prateleira //
		if ($('.helperComplement').length) {
			$('.helperComplement').remove();
		}
	// Remocao de Li HelperComplement Prateleira //



  	// Voltar ao Topo //
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 450) {
				$('.js-back-to-top').addClass('active');
			} else {
				$('.js-back-to-top').removeClass('active');
			}
		});

		body.on('click', '.js-back-to-top', function(event) {
		    event.preventDefault();
		    htmlBody.animate({ scrollTop: 0 }, 300);
		});
  	// Voltar ao Topo //

	// Slider //
		if (slide.length > 0) {
			slide.slick({
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: false,
				arrows: true,
				dots: false,
				draggable: true,
				touchMove: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	// Slider //
	
	// slideShelf //
		if($('body.home').length > 0){
		    $('.slideShelf').find('ul').slick({
				dots: true,
				arrows: false,
				draggable: true,
				touchMove: true,
				autoplay: false,
				slidesToShow: 2,
				mobileFirst: true,
				slidesToScroll: 1,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							dots: true
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2
						}
					},
				]
		    });
		}
	// slideShelf //

	// Frete Gratis Aberto e Compra Rapida //
		try {
			$document.ready(function(){
				$('.shipping-value').simulateClick('click');
				$('.ajax-temp').fadeOut(3500);
			});
		} catch(e) {}
	// Frete Gratis Aberto //


	// Compra Rapida //
		$('.produto-cor').each(function(index) {
			var base_url = "/api/catalog_system/pub/products/variations/";
			var li = $(this);
			var id = $(this).attr("id_produto");
			var url = base_url + id;

			$.getJSON(url, function(data, val) {
				for (i = 0; i <= (data.skus.length - 1); i++) {
					var skuElement = data.skus[i].sku;
					var skuName = data.skus[i].skuname;
					var avaiableSku = data.skus[i].available;
					$('<a class='+avaiableSku+' data-link="/checkout/cart/add?sku='+skuElement+'&qty=1&seller=1&redirect=false&sc=1">'+skuName+'</a>').appendTo(li);
				}
			});
		});

		body.on('click', '.btn-fast-buy', function(event) {
			$(this).find('.produto-cor').addClass('active');
		});

		body.on('click', '.produto-cor a', function(event){
			var url = $(this).attr('data-link');
			$('.sta-cart-items ul li.fake-insert').remove();

			$.get(url, function(data, val) {
				vtexjs.checkout.getOrderForm().done(function(orderForm) {
					console.log(orderForm);

					var elements = orderForm.items;
					$(elements).each(function(orderForm, val){
						var tempPrice = val.formattedPrice;
						var tempImage = val.imageUrl;
						var tempName = val.name;

						$('<li class="fake-insert"><div class="sta-cart-pdt-image"></div><div class="sta-cart-pdt-info"><button class="remove-item" data-index="0"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><polygon fill="#000" points="88.711,86.588 52.121,50 88.709,13.412 86.588,11.291 50,47.878 13.41,11.291 11.289,13.412   47.878,50 11.289,86.588 13.41,88.709 50,52.12 86.59,88.709 "></polygon></svg><span>remover</span></button><div class="sta-cart-pdt-qtd"></div></div></li>').appendTo('.sta-cart-items ul');
						$('<img src='+tempImage+'/>').appendTo('li.fake-insert .sta-cart-pdt-image');
						$('<h4>'+tempName+'</h4>').insertBefore('li.fake-insert .sta-cart-pdt-info button');
						$('<p>'+tempPrice+'</p>').insertAfter('li.fake-insert .sta-cart-pdt-qtd');
						var tempPrice = $('.total-cart-em').text();
						$('.sta-cart-total strong').text(tempPrice);

						htmlBody.animate({ scrollTop: 0 }, 300);
						$('.amount-items-em').simulateClick('click');
					});
				});
			});
		});
	// Compra Rapida //


	// Menu SidePanel //
		$('header .js-open-mobile-menu').click(function(){
			$(this).toggleClass('active');
			$('.opacity-menu').toggleClass('active');
			$('header .menu-header').toggleClass('slideActive');
		});

		$('.opacity-menu').on('click', function(e){
			$(this).removeClass('active');
			$('.js-open-mobile-menu').removeClass('active');
			$('header .menu-header').removeClass('slideActive');
		});

		$("header nav.menu .has-sub .js-open-sub").click(function() {
		  $(this).toggleClass('active');
		  $(this).next().toggleClass("slideActive");
		});
	// Menu SidePanel //

	// Open submenu mobile //
		$(".menu-header ul li.has-sub a.first-menu").click(function() {
			$(this).toggleClass("active");
			$(this).next().slideToggle();
		});
	// Open submenu mobile //

	// Estilizar a quantidade em Departamento //
		$('.menu-departamento h4 a, .menu-departamento ul li a').each(function() {
	    	var qtd = '';
	        var nome = '';
	        qtd = $(this).html();
	        if (/\(/.test(qtd)) {
	            qtd = qtd.split('(');
	            nome = qtd[0];
	            qtd = qtd[1];
	            qtd = qtd.split(')');
	            qtd = qtd[0];
	            $(this).html(nome + '<span class="qtd-filter">' + qtd + '</span>');
	        }
	    });
	// Estilizar a quantidade em Departamento //


	// Smart Research //
		if (sidebar.length > 0) {
			try {
				sidebar.find('input[type="checkbox"]').vtexSmartResearch({
					elemLoading: '',
					returnTopText: '',
					elemLoading:'<i class="shelf__loading"></i>',
					filterScrollTop: function(shelfOffset) {
						return 20;
					}
				});
			} catch(e) {}
		}
	// Smart Research //


  	// Scripts Departamento //
		if($(depCatBus).length > 0){

			$(".Cor a").each(function() {
			    var $color = $(this).attr("title");
			    $(this).addClass($color);
			});
			
		}
  	// Scripts Departamento //


    // Remocao Loading Meus Pedidos//
		try {
			$document.ajaxStop(function() {
				orderList.parents('html').removeClass('is-loading');
			});
		} catch(e) {}
    // Remocao Loading Meus Pedidos//
	
});
