function formContato(){
    var jsonSaveDadosUser = {
        "contatoClientEmail": $("#co_email").val(),
        "contatoClientName": $("#co_firstName").val(),
        "contatoClientTelefone": $("#co_telefone").val(),
        "contatoClientAssunto": $("#co_assunto").val(),
        "nome": $("#co_mensagem").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/justapproveinfra/dataentities/CO/documents/';

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
          $("#co_email").val();
          $("#co_firstName").val();
          $("#co_telefone").val();
          $("#co_assunto").val();
          $("#co_mensagem").val();

          $('.modal-container').remove('.new-modal-content');
          $('<div class="new-modal-content news-element success-news"><h3>Seu e-mail foi enviado com sucesso.</h3><p>Em breve, você receberá a resposta da nossa equipe.</p></div>').appendTo('.modal-container');
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