function newsLetterFooter(){
    var jsonSaveDadosUser = {
        "email": $("#cl_email").val(),
        "nome": $("#cl_firstName").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/justapproveinfra/dataentities/NL/documents/';

    $.ajax({
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          $("div#messageSuccess").removeClass("hide");
          $("#cl_email").val("");
          $("#cl_firstName").val("");

          $('.modal-container').remove('.new-modal-content');
          $('<div class="new-modal-content news-element success-news"><h3>Seu e-mail foi cadastrado com sucesso.</h3><p>Em breve, você receberá nossas novidades e promoções em sua caixa de e-mail.</p></div>').appendTo('.modal-container');
          $('body').addClass('modal-active newsletter-active');
        },
        error: function (data) {
          console.log(data);
          $('.modal-container').remove('.new-modal-content');
          $('<div class="new-modal-content news-element fail-news"><h3>Ocorreu algum erro ao cadastrar seu e-mail.</h3><p>Você pode fechar essa janela e tentar novamente mais tarde? Obrigado.</p></div>').appendTo('.modal-container');
          $('body').addClass('modal-active newsletter-active');
        }
    });
}