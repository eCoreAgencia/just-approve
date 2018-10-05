// Specifications Catch //
$("#___rc-p-id").each(function(index) {
    var id = $(this).attr("value");
    var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

    $.getJSON(data, function(data) {
        $.each(data, function(key, val) {
            

            // Catch Cintura Val //
                var valCinturaPP = val.CinturaPP[0];
                var valCinturaP = val.CinturaP[0];
                var valCinturaM = val.CinturaM[0];
                var valCinturaG = val.CinturaG[0];
                var valCinturaGG = val.CinturaGG[0];

                $('<tr class="'+valCinturaGG+'" idVal="'+valCinturaGG+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr class="'+valCinturaG+'" idVal="'+valCinturaG+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr class="'+valCinturaM+'" idVal="'+valCinturaM+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr class="'+valCinturaP+'" idVal="'+valCinturaP+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr class="'+valCinturaPP+'" idVal="'+valCinturaPP+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
            // Catch Cintura Val //


            // Catch Comprimento Val //
                var valComprimentoPP = val.ComprimentoPP[0];
                var valComprimentoP = val.ComprimentoP[0];
                var valComprimentoM = val.ComprimentoM[0];
                var valComprimentoG = val.ComprimentoG[0];
                var valComprimentoGG = val.ComprimentoGG[0];

                $('<tr class="'+valComprimentoGG+'" idVal="'+valComprimentoGG+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr class="'+valComprimentoG+'" idVal="'+valComprimentoG+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr class="'+valComprimentoM+'" idVal="'+valComprimentoM+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr class="'+valComprimentoP+'" idVal="'+valComprimentoP+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr class="'+valComprimentoPP+'" idVal="'+valComprimentoPP+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
            // Catch Comprimento Val //


            // Catch Comprimento Val //
                var valQuadrilPP = val.QuadrilPP[0];
                var valQuadrilP = val.QuadrilP[0];
                var valQuadrilM = val.QuadrilM[0];
                var valQuadrilG = val.QuadrilG[0];
                var valQuadrilGG = val.QuadrilGG[0];

                $('<tr class="'+valQuadrilGG+'" idVal="'+valQuadrilGG+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr class="'+valQuadrilG+'" idVal="'+valQuadrilG+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr class="'+valQuadrilM+'" idVal="'+valQuadrilM+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr class="'+valQuadrilP+'" idVal="'+valQuadrilP+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr class="'+valQuadrilPP+'" idVal="'+valQuadrilPP+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
            // Catch Comprimento Val //


            // Catch Busto Val //
                var valBustoPP = val.BustoPP[0];
                var valBustoP = val.BustoP[0];
                var valBustoM = val.BustoM[0];
                var valBustoG = val.BustoG[0];
                var valBustoGG = val.BustoGG[0];

                $('<tr class="'+valBustoGG+'" idVal="'+valBustoGG+'"></tr>').insertAfter('.tabela .busto tr.my-thead');
                $('<tr class="'+valBustoG+'" idVal="'+valBustoG+'"></tr>').insertAfter('.tabela .busto tr.my-thead');
                $('<tr class="'+valBustoM+'" idVal="'+valBustoM+'"></tr>').insertAfter('.tabela .busto tr.my-thead');
                $('<tr class="'+valBustoP+'" idVal="'+valBustoP+'"></tr>').insertAfter('.tabela .busto tr.my-thead');
                $('<tr class="'+valBustoPP+'" idVal="'+valBustoPP+'"></tr>').insertAfter('.tabela .busto tr.my-thead');
            // Catch Busto Val //


            // Catch Torax Val //
                var valToraxPP = val.ToraxPP[0];
                var valToraxP = val.ToraxP[0];
                var valToraxM = val.ToraxM[0];
                var valToraxG = val.ToraxG[0];
                var valToraxGG = val.ToraxGG[0];

                $('<tr class="'+valToraxGG+'" idVal="'+valToraxGG+'"></tr>').insertAfter('.tabela .torax tr.my-thead');
                $('<tr class="'+valToraxG+'" idVal="'+valToraxG+'"></tr>').insertAfter('.tabela .torax tr.my-thead');
                $('<tr class="'+valToraxM+'" idVal="'+valToraxM+'"></tr>').insertAfter('.tabela .torax tr.my-thead');
                $('<tr class="'+valToraxP+'" idVal="'+valToraxP+'"></tr>').insertAfter('.tabela .torax tr.my-thead');
                $('<tr class="'+valToraxPP+'" idVal="'+valToraxPP+'"></tr>').insertAfter('.tabela .torax tr.my-thead');
            // Catch Torax Val //


            // Catch Comprimento Manga Val //
                var valComprimentomangasPP = val.ComprimentomangasPP[0];
                var valComprimentomangasP = val.ComprimentomangasP[0];
                var valComprimentomangasM = val.ComprimentomangasM[0];
                var valComprimentomangasG = val.ComprimentomangasG[0];
                var valComprimentomangasGG = val.ComprimentomangasGG[0];

                $('<tr class="'+valComprimentomangasGG+'" idVal="'+valComprimentomangasGG+'"></tr>').insertAfter('.tabela .comprimento-manga tr.my-thead');
                $('<tr class="'+valComprimentomangasG+'" idVal="'+valComprimentomangasG+'"></tr>').insertAfter('.tabela .comprimento-manga tr.my-thead');
                $('<tr class="'+valComprimentomangasM+'" idVal="'+valComprimentomangasM+'"></tr>').insertAfter('.tabela .comprimento-manga tr.my-thead');
                $('<tr class="'+valComprimentomangasP+'" idVal="'+valComprimentomangasP+'"></tr>').insertAfter('.tabela .comprimento-manga tr.my-thead');
                $('<tr class="'+valComprimentomangasPP+'" idVal="'+valComprimentomangasPP+'"></tr>').insertAfter('.tabela .comprimento-manga tr.my-thead');
            // Catch Comprimento Manga Val //


            // Catch Altura Manga Val //
                var valAlturaPP = val.AlturaPP[0];
                var valAlturaP = val.AlturaP[0];
                var valAlturaM = val.AlturaM[0];
                var valAlturaG = val.AlturaG[0];
                var valAlturaGG = val.AlturaGG[0];

                $('<tr class="'+valAlturaGG+'" idVal="'+valAlturaGG+'"></tr>').insertAfter('.tabela .altura tr.my-thead');
                $('<tr class="'+valAlturaG+'" idVal="'+valAlturaG+'"></tr>').insertAfter('.tabela .altura tr.my-thead');
                $('<tr class="'+valAlturaM+'" idVal="'+valAlturaM+'"></tr>').insertAfter('.tabela .altura tr.my-thead');
                $('<tr class="'+valAlturaP+'" idVal="'+valAlturaP+'"></tr>').insertAfter('.tabela .altura tr.my-thead');
                $('<tr class="'+valAlturaPP+'" idVal="'+valAlturaPP+'"></tr>').insertAfter('.tabela .altura tr.my-thead');
            // Catch Altura Manga Val //


            // Catch Largura Val //
                var valLarguraPP = val.LarguraPP[0];
                var valLarguraP = val.LarguraP[0];
                var valLarguraM = val.LarguraM[0];
                var valLarguraG = val.LarguraG[0];
                var valLarguraGG = val.LarguraGG[0];

                $('<tr class="'+valLarguraGG+'" idVal="'+valLarguraGG+'"></tr>').insertAfter('.tabela .largura tr.my-thead');
                $('<tr class="'+valLarguraG+'" idVal="'+valLarguraG+'"></tr>').insertAfter('.tabela .largura tr.my-thead');
                $('<tr class="'+valLarguraM+'" idVal="'+valLarguraM+'"></tr>').insertAfter('.tabela .largura tr.my-thead');
                $('<tr class="'+valLarguraP+'" idVal="'+valLarguraP+'"></tr>').insertAfter('.tabela .largura tr.my-thead');
                $('<tr class="'+valLarguraPP+'" idVal="'+valLarguraPP+'"></tr>').insertAfter('.tabela .largura tr.my-thead');
            // Catch Largura Val //


            // Catch Profundidade Val //
                var valProfundidadePP = val.ProfundidadePP[0];
                var valProfundidadeP = val.ProfundidadeP[0];
                var valProfundidadeM = val.ProfundidadeM[0];
                var valProfundidadeG = val.ProfundidadeG[0];
                var valProfundidadeGG = val.ProfundidadeGG[0];

                $('<tr class="'+valProfundidadeGG+'" idVal="'+valProfundidadeGG+'"></tr>').insertAfter('.tabela .profundidade tr.my-thead');
                $('<tr class="'+valProfundidadeG+'" idVal="'+valProfundidadeG+'"></tr>').insertAfter('.tabela .profundidade tr.my-thead');
                $('<tr class="'+valProfundidadeM+'" idVal="'+valProfundidadeM+'"></tr>').insertAfter('.tabela .profundidade tr.my-thead');
                $('<tr class="'+valProfundidadeP+'" idVal="'+valProfundidadeP+'"></tr>').insertAfter('.tabela .profundidade tr.my-thead');
                $('<tr class="'+valProfundidadePP+'" idVal="'+valProfundidadePP+'"></tr>').insertAfter('.tabela .profundidade tr.my-thead');
            // Catch Profundidade Val //
            

            $('.tabela tr').each(function(){
                var myTxt = $(this).attr('idVal');
                $(this).text(myTxt);
            });

            $('.tabela tr.--').each(function(){
                var myFather = $(this).remove();
            });

            $('.tabela table').each(function(){
                var myTrLengh = $(this).find('tr');
                if($(myTrLengh).length == 1){
                    $(this).remove();
                }
            });

            var tabelaSVG = val.SVGTabela[0];
            $('.pic-tabela').html('<div>'+tabelaSVG+'</div>');

        });
    });
});
// Specifications Catch //