function formTroca(){
    var jsonSaveDadosUser = {
        "trocaClientName": $("#cl_firstName").val(),
        "trocaClientEmail": $("#cl_email").val(),
        "trocaClientOrderNumber": $("#cl_orderNumber").val(),
        "trocaClientOrderDate": $("#cl_orderDateReceive").val(),
        "trocaClientProduct": $("#cl_orderProduct").val(),
        "trocaClientOptions": $("#cl_orderOptions").val(),
        "trocaClientObs": $("#cl_orderObs").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/justapproveinfra/dataentities/TF/documents/';

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
          $("#cl_firstName").val();
          $("#cl_email").val();
          $("#cl_orderNumber").val();
          $("#cl_orderDateReceive").val();
          $("#cl_orderProduct").val();
          $("#cl_orderOptions").val();
          $("#cl_orderObs").val();

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