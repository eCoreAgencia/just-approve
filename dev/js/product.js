$(document).ready(function(){
    // Remanegement Pricing //
        $('.choose-skus .skuList:first-child .preco').insertBefore('.choose-skus');
        $('.valor-dividido br').remove();
    // Remanegement Pricing //
});

// Specifications Catch //
$("#___rc-p-id").each(function(index) {
    var id = $(this).attr("value");
    var data = "/api/catalog_system/pub/products/search/?fq=productId:"+id+"";

    $.getJSON(data, function(data) {
        $.each(data, function(key, val) {

            // Catch Composition Val //
                var composicao = val.Elementos[0];
                $('.specification .main-content').text(composicao);
            // Catch Composition Val //


            // Catch Cintura Val //
                var valCinturaPP = val.CinturaPP[0];
                var valCinturaP = val.CinturaP[0];
                var valCinturaM = val.CinturaM[0];
                var valCinturaG = val.CinturaG[0];
                var valCinturaGG = val.CinturaGG[0];

                $('<tr idVal="'+valCinturaPP+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr idVal="'+valCinturaP+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr idVal="'+valCinturaM+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr idVal="'+valCinturaG+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');
                $('<tr idVal="'+valCinturaGG+'"></tr>').insertAfter('.tabela .cintura tr.my-thead');

            // Catch Cintura Val //


            // Catch Comprimento Val //
                var valComprimentoPP = val.ComprimentoPP[0];
                var valComprimentoP = val.ComprimentoP[0];
                var valComprimentoM = val.ComprimentoM[0];
                var valComprimentoG = val.ComprimentoG[0];
                var valComprimentoGG = val.ComprimentoGG[0];

                $('<tr idVal="'+valComprimentoPP+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr idVal="'+valComprimentoP+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr idVal="'+valComprimentoM+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr idVal="'+valComprimentoG+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
                $('<tr idVal="'+valComprimentoGG+'"></tr>').insertAfter('.tabela .comprimento tr.my-thead');
            // Catch Comprimento Val //


            // Catch Comprimento Val //
                var valQuadrilPP = val.QuadrilPP[0];
                var valQuadrilP = val.QuadrilP[0];
                var valQuadrilM = val.QuadrilM[0];
                var valQuadrilG = val.QuadrilG[0];
                var valQuadrilGG = val.QuadrilGG[0];

                $('<tr idVal="'+valQuadrilPP+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr idVal="'+valQuadrilP+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr idVal="'+valQuadrilM+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr idVal="'+valQuadrilG+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
                $('<tr idVal="'+valQuadrilGG+'"></tr>').insertAfter('.tabela .quadril tr.my-thead');
            // Catch Comprimento Val //

            $('.tabela tr').each(function(){
                var myTxt = $(this).attr('idVal');
                $(this).text(myTxt);
            });
        });
    });
});
// Specifications Catch //