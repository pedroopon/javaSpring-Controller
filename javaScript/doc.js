/* function chamarapi(){
  $.ajax({
    url: "http://localhost:8081/pessoa",
    type: "GET",
    dataType: "json",
    success: function (resposta) {
        $("#menssagem_webapi").text(JSON.stringify(resposta))
    },
    error: function (request, message, error) {
        alert(message)
    }
}