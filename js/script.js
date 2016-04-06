$(function() {
    $( "#btn-verificar" ).on( "click", function() {
        var param = $("#entrada").val().toLowerCase();
        if(param == "" || param == null ){
            alert("Digite uma palavra para verifica��o");
        } else {

            if (verificaPalindromo(param) ){
                alert("Esta palavra � um Palindromo!")
            } else{
                alert("Esta palavra n�o � um Palindromo!")
            }
        }
    });
});

function verificaPalindromo(param){
    param = param.toLowerCase();
    param = param.replace(/[^a-zA-Z]/gi, '');
    var palavraInversa = param.split('').reverse().join('');
    return palavraInversa == param;

}