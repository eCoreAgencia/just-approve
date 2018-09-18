jQuery.fn.simulateClick=function(){return this.each(function(){if("createEvent"in document){var doc=this.ownerDocument,evt=doc.createEvent("MouseEvents");evt.initMouseEvent("click",!0,!0,doc.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),this.dispatchEvent(evt)}else this.click()})};var body=$("body"),htmlBody=$("html, body"),$document=$(document),header=$("#header"),submenuDesktopWrapper=$(".js-submenu-wrap"),userSubmenu=$(".submenu-user"),sidePanelMobile=$(".side-panel"),mobileSubmenu=$(".submenu-mobile"),slide=$(".slide"),slideProd=$(".slide"),slideShelf=$(".slideShelf"),slideBrands=$(".slideBrands"),carousel=$(".shelf-carousel"),backToTop=$(".js-back-to-top"),shelf=$(".prateleira"),paginatedShelf=$(".prateleira[id*=ResultItems]"),orderList=$(".order-list"),formNews=$(".newsletter"),depCatBus=$(".dep-cat-bus"),pagProduto=$(".produto"),pagInstitucional=$(".institucional"),sidebar=$(".sidebar");$(function(){var depCatBus=$(".dep-cat-bus");$(".prateleira");0==$(".prod-similares li").length&&$(".prod-similares").remove(),$(pagProduto).length>0&&$("#___rc-p-id").each(function(index){var id=$(this).attr("value"),data="/api/catalog_system/pub/products/search/?fq=productId:"+id;$.getJSON(data,function(data){$.each(data,function(key,val){var elements=val.items[0].images;$(elements).each(function(data,val){var myLabel=val.imageLabel,myImageID=val.imageId,myImageName=val.imageText;$('<li class="'+myLabel+'"><img src="/arquivos/ids/'+myImageID+"-467-700/"+myImageName+'.jpg" /></li>').appendTo(".slider"),$("body.masc-experience").find(".thumbnails li.principal, .thumbnails li.feminino, .thumbnails li.femininoprincipal").remove(),$("body.fem-experience").find(".thumbnails li.principal, .thumbnails li.masculino, .thumbnails li.masculinoprincipal").remove()}),$(".easyzoom .slider").slick({dots:!0,arrows:!1,draggable:!0,touchMove:!0,autoplay:!1,slidesToShow:1,mobileFirst:!0,slidesToScroll:1,adaptiveHeight:!0})})})}),orderList.length>0&&(orderList.find("link").remove(),orderList.find(".page-header").unwrap(".container")),$(".close-modal, .opacity-modal").click(function(event){$("body").removeClass("modal-active"),$("body").removeClass("newsletter-active"),$("body").removeClass("product-popup"),$(".new-modal-content").remove()}),$(document).keyup(function(ev){27==ev.keyCode&&$("body").removeClass("modal-active"),$("body").removeClass("newsletter-active"),$("body").removeClass("product-popup"),$(".new-modal-content").remove(),$("#parcelamentoModal").removeClass("active")}),$(".helperComplement").length&&$(".helperComplement").remove(),$(window).scroll(function(){var scroll=$(window).scrollTop();scroll>=450?$(".js-back-to-top").addClass("active"):$(".js-back-to-top").removeClass("active")}),body.on("click",".js-back-to-top",function(event){event.preventDefault(),htmlBody.animate({scrollTop:0},300)}),slide.length>0&&slide.slick({adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1,arrows:!0,dots:!1,draggable:!0,touchMove:!0,slidesToShow:1,slidesToScroll:1}),slideProd.length>0&&$(".slide").find("ul").slick({dots:!0,arrows:!1,draggable:!0,touchMove:!0,autoplay:!1,slidesToShow:2,mobileFirst:!0,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:480,settings:{slidesToShow:2,dots:!0}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:2}}]}),$("body.home").length>0&&$(".slideShelf").find("ul").slick({dots:!0,arrows:!1,draggable:!0,touchMove:!0,autoplay:!1,slidesToShow:2,mobileFirst:!0,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:480,settings:{slidesToShow:2,dots:!0}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:2}}]});try{$document.ready(function(){$(".shipping-value").simulateClick("click"),$(".ajax-temp").fadeOut(3500)})}catch(e){}if($(".produto-cor").each(function(index){var base_url="/api/catalog_system/pub/products/variations/",li=$(this),id=$(this).attr("id_produto"),url=base_url+id;$.getJSON(url,function(data,val){for(i=0;i<=data.skus.length-1;i++){var skuElement=data.skus[i].sku,skuName=data.skus[i].skuname,avaiableSku=data.skus[i].available;$("<a class="+avaiableSku+' data-link="/checkout/cart/add?sku='+skuElement+'&qty=1&seller=1&redirect=false&sc=1">'+skuName+"</a>").appendTo(li)}})}),body.on("click",".btn-fast-buy",function(event){$(this).find(".produto-cor").addClass("active")}),body.on("click",".produto-cor a",function(event){var url=$(this).attr("data-link");$(".sta-cart-items ul li.fake-insert").remove(),$.get(url,function(data,val){vtexjs.checkout.getOrderForm().done(function(orderForm){console.log(orderForm);var elements=orderForm.items;$(elements).each(function(orderForm,val){var tempPrice=val.formattedPrice,tempImage=val.imageUrl,tempName=val.name;$('<li class="fake-insert"><div class="sta-cart-pdt-image"></div><div class="sta-cart-pdt-info"><button class="remove-item" data-index="0"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><polygon fill="#000" points="88.711,86.588 52.121,50 88.709,13.412 86.588,11.291 50,47.878 13.41,11.291 11.289,13.412   47.878,50 11.289,86.588 13.41,88.709 50,52.12 86.59,88.709 "></polygon></svg><span>remover</span></button><div class="sta-cart-pdt-qtd"></div></div></li>').appendTo(".sta-cart-items ul"),$("<img src="+tempImage+"/>").appendTo("li.fake-insert .sta-cart-pdt-image"),$("<h4>"+tempName+"</h4>").insertBefore("li.fake-insert .sta-cart-pdt-info button"),$("<p>"+tempPrice+"</p>").insertAfter("li.fake-insert .sta-cart-pdt-qtd");var tempPrice=$(".total-cart-em").text();$(".sta-cart-total strong").text(tempPrice),htmlBody.animate({scrollTop:0},300),$(".amount-items-em").simulateClick("click")})})})}),$(document).ready(function(event){$(".sidebar fieldset div").hide(),$(".sidebar h5").on("click",function(event){$(this).toggleClass("active"),$(this).next().slideToggle()})}),$("header .js-open-mobile-menu").click(function(){$(this).toggleClass("active"),$(".opacity-menu").toggleClass("active"),$("header .menu-header").toggleClass("slideActive")}),$(".opacity-menu").on("click",function(e){$(this).removeClass("active"),$(".js-open-mobile-menu").removeClass("active"),$("header .menu-header").removeClass("slideActive")}),$("header nav.menu .has-sub .js-open-sub").click(function(){$(this).toggleClass("active"),$(this).next().toggleClass("slideActive")}),$(".menu-header ul li.has-sub a.first-menu").click(function(){$(this).toggleClass("active"),$(this).next().slideToggle()}),$(".menu-departamento h4 a, .menu-departamento ul li a").each(function(){var qtd="",nome="";qtd=$(this).html(),/\(/.test(qtd)&&(qtd=qtd.split("("),nome=qtd[0],qtd=qtd[1],qtd=qtd.split(")"),qtd=qtd[0],$(this).html(nome+'<span class="qtd-filter">'+qtd+"</span>"))}),sidebar.length>0)try{sidebar.find('input[type="checkbox"]').vtexSmartResearch({elemLoading:"",returnTopText:"",elemLoading:'<i class="shelf__loading"></i>',filterScrollTop:function(shelfOffset){return 20}})}catch(e){}$(depCatBus).length>0&&$(".Cor a").each(function(){var $color=$(this).attr("title");$(this).addClass($color)});try{$document.ajaxStop(function(){orderList.parents("html").removeClass("is-loading")})}catch(e){}});