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
$(document).ajaxStop(function(){
	$('.thumbnails li.first-thumb a').simulateClick('click');
});

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

	if($('.prod-similares li').length == 0){
		$('.prod-similares').remove();
	}

	$('#bt-tabela').on('click', function(event){
		document.querySelector('#id3').scrollIntoView({ 
			behavior: 'smooth' 
		});
	});
	var myBg = $('.promoBox #img--box img').attr('src');
	$('.promoBox').css("background-image", "url("+myBg+")");

	// Verificacao Genero Departamento-Categoria-Busca //
		// if($(depCatBus).length > 0){
		// 	var myGen = $('.bread-crumb .last a').text();
		// 	shelf.addClass(myGen);

		// 	var fem = $('.prateleira.Feminino');
		// 	var masc = $('.prateleira.Masculino');
			
		// 	fem.each(function(){
		// 		$(this).find('.secundario').remove();
		// 		$(this).find('.principal span.label-Masculino').remove();
		// 		$(this).find('.secundario span.label-Masculino').remove();
			
		// 		var myRealLink = $(this).find('li a.productShelf').attr('href');
		// 		var myParam = myRealLink+'?lid=f777d960-5de6-496f-825e-c417d3012f69###';
			
		// 		$('li a.productShelf').attr('href', myParam+'/#');
		// 		$('li a.product-url').attr('href', myParam+'/#');
		// 	});

		// 	masc.each(function(){
		// 		$(this).find('.principal').remove();
		// 		$(this).find('.principal span.label-Feminino').remove();
		// 		$(this).find('.secundario span.label-Feminino').remove();

		// 		var myRealLink = $(this).find('li a.productShelf').attr('href');
		// 		var myParam = myRealLink+'?lid=1ff1c8cc-1219-400e-a404-3a693e0cf84d###';

		// 		$('li a.productShelf').attr('href', myParam+'/#');
		// 		$('li a.product-url').attr('href', myParam+'/#');
		// 	});
		// }
	// Verificacao Genero Departamento-Categoria-Busca //


	// Verificacao Genero Produto Experiencia de acordo com o genero //
		if($(pagProduto).length > 0){

			// Controller Image Thumbs, Featured and SuperZoom //
				$("#___rc-p-id").each(function(index) {
					var id = $(this).attr("value");
					var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

					$.getJSON(data, function(data) {
						$.each(data, function(key, val) {
							var elements = val.items[0].images;
							$(elements).each(function(data, val){
								// Take Image Thumbs //
									var myLabel = val.imageLabel;
									var myImageID = val.imageId;
									var myImageName = val.imageText;
									$('<li class="'+myLabel+'"><a href="/arquivos/ids/'+myImageID+'-1000-1500/'+myImageName+'.jpg" data-standard="/arquivos/ids/'+myImageID+'-467-700/'+myImageName+'.jpg"><img src="/arquivos/ids/'+myImageID+'-80-80/'+myImageName+'.jpg" /></a></li>').appendTo('ul.thumbnails');
								// Take Image Thumbs //

								// Masc Rules //
									$('body.masc-experience').find('.thumbnails li.feminino, .thumbnails li.versofeminino, .thumbnails li.femininoprincipal').remove();
								// Masc Rules //

								// Fem Rules //
									$('body.fem-experience').find('.thumbnails li.masculino, .thumbnails li.versomasculino, .thumbnails li.masculinoprincipal').remove();
								// Fem Rules //

								if($('.thumbnails li').length > 8){
									$('.thumbnails').addClass('more-itens');
									$('<span class="prev-thumb"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 451.846 451.847"><path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path></svg></span>').insertBefore('.thumbnails');
									$('<span class="next-thumb"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 451.846 451.847"><path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path></svg></span>').insertAfter('.thumbnails');
								}

								$('.prev-thumb').on('click', function(event){
									var myLast = $('.thumbnails li:last-child');
									var myFirst = $('.thumbnails li:first-child');
									myFirst.insertAfter(myLast);
								});

								$('.next-thumb').on('click', function(event){
									var myLast = $('.thumbnails li:last-child');
									var myFirst = $('.thumbnails li:first-child');
									myLast.insertBefore(myFirst);
								});

								var myFirst = $('.thumbnails li').first();
								myFirst.addClass('first-thumb');

								var firstThumbStand = $('.thumbnails li.first-thumb a').attr('data-standard');
								var firstThumbLink = $('.thumbnails li.first-thumb a').attr('href');
								var firstThumbEx = $('<a href="'+firstThumbLink+'"><img src="'+firstThumbStand+'"/></a>');
								firstThumbEx.appendTo('.easyzoom');
								$('.easyzoom a:first-of-type').nextAll().remove();

								// Instantiate EasyZoom instances
								var $easyzoom = $('.easyzoom').easyZoom();

								// Setup thumbnails example
								var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
								$('.thumbnails').on('click', 'a', function(e) {
									var $this = $(this);
									e.preventDefault();
									$('.my-video-position').addClass('inactive');
									// Use EasyZoom's `swap` method
									api1.swap($this.data('standard'), $this.attr('href'));
								});
								
								$('.thumbnails li.first-thumb a').simulateClick('click');
							});

							if(val.MeuVideo) {
								var myVideo = val.MeuVideo;
								var myPosition = val.Posicao;
								var myIdVideo = val.IdDocumento;
		
								$('<li class="hover-video"><span></span><video width="80"><source src="https://justapproveinfra.vtexcommercestable.com.br/api/dataentities/VD/documents/'+myIdVideo+'/video/attachments/'+myVideo+'"></video></li>').insertBefore('.thumbnails li:nth-child('+myPosition+')');
								$('<div class="my-video-position inactive"><video width="470"><source src="https://justapproveinfra.vtexcommercestable.com.br/api/dataentities/VD/documents/'+myIdVideo+'/video/attachments/'+myVideo+'"></video></div>').insertBefore('.easyzoom');
							
								$('.hover-video span').on('mouseover', function(e){
									$('.my-video-position').removeClass('inactive');
									var myvideo = $('.my-video-position video');
									$(myvideo).trigger('play');
								});
							}
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


	// Menu Persistente Begin //
	window.onscroll = function() {myFunction()};
	var myHeader = document.getElementById("myHeader");
	var sticky = myHeader.offsetTop;
	function myFunction() {
		if (window.pageYOffset >= 33) {
			body.addClass('continuous');
			myHeader.classList.add("sticky");
		} else {
			myHeader.classList.remove("sticky");
			body.removeClass('continuous');
		}
	}
    // Menu Persistente END //

	// Remocao de Li HelperComplement Prateleira //
		if ($('.helperComplement').length) {
			$('.helperComplement').remove();
		}
	// Remocao de Li HelperComplement Prateleira //


	// Busca Mob //
		$(".js-open-mobile-search").click(function() {
			$(".searchbox").toggleClass("active");
			$(".searchbox").slideToggle();
		});
	// Busca Mob //

	// submenu fundo //
	// 	$(".menu-header").mouseenter(function() {
	// 		$(".tipbar").addClass("fundo-submenu");
	// 	});

	// 	$(".menu-header").mouseleave(function() {
	// 		$(".tipbar").removeClass("fundo-submenu");
	// 	});
	// // submenu fundo //


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
				arrows: false,
				dots: true,
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
				dots: false,
				arrows: true,
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
							slidesToShow: 3
						}
					},
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 4
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
			var me = $(this);
			if($('.produto-cor a:nth-child(2)').length == false){
				var url = me.find('.produto-cor a').attr('data-link');
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
			} else {
				$(this).find('.produto-cor').addClass('active');
			}
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
			$('header .menu-header').toggleClass('slideActive');
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

				$('body.dep-cat-bus .prateleira li').each(function(){
					var me = $(this);
					var myImg = $(this).find('.label-Feminino img');
					
					if($(myImg).length == false){
						me.remove();
					}
				});

			});
		} catch(e) {}
    // Remocao Loading Meus Pedidos//
	
});
