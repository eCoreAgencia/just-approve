function newsLetterFooter(){
    var jsonSaveDadosUser = {
        "email": $("#cl_email").val(),
        "nome": $("#cl_nome").val()
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
          $("#cl_nome").val("");
          alert("Dados cadastrados com sucesso!");
        },
        error: function (data) {
          console.log(data);
          alert("Houve um erro ao cadastrar . Tente novamente mais tarde");
        }
    });
}