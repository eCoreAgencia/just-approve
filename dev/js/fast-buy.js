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

	$('.produto-cor a').click(function(event){
		var url = $(this).attr('data-link');
		$('.sta-cart-items ul li.fake-insert').remove();

		$.get(url, function(data, val) {
			vtexjs.checkout.getOrderForm().done(function(orderForm) {
				console.log(orderForm);

				var elements = orderForm.items;
				console.log(elements);

				$(elements).each(function(orderForm, val){
					var fakePrice = val.formattedPrice;
					var fakeImage = val.imageUrl;
					var fakeName = val.name;

					$('<li class="fake-insert"><div class="sta-cart-pdt-image"></div><div class="sta-cart-pdt-info"><button class="remove-item" data-index="0"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><polygon fill="#000" points="88.711,86.588 52.121,50 88.709,13.412 86.588,11.291 50,47.878 13.41,11.291 11.289,13.412   47.878,50 11.289,86.588 13.41,88.709 50,52.12 86.59,88.709 "></polygon></svg><span>remover</span></button><div class="sta-cart-pdt-qtd"></div></div></li>').appendTo('.sta-cart-items ul');
					$('<img src='+fakeImage+'/>').appendTo('li.fake-insert .sta-cart-pdt-image');
					$('<h4>'+fakeName+'</h4>').insertBefore('li.fake-insert .sta-cart-pdt-info button');
					$('<p>'+fakePrice+'</p>').insertAfter('li.fake-insert .sta-cart-pdt-qtd');

					htmlBody.animate({ scrollTop: 0 }, 300);
					$('.amount-items-em').simulateClick('click');
				});
			});
		});
	});

	body.on('click', '.btn-fast-buy', function(event) {
		$(this).find('.produto-cor').addClass('active');
	});
// Compra Rapida //