$("iframe").hide();

/*Login Menu*/
$("#logar").live('click', function () 
{
    $("#div-logar").hide();
    $("#div-logar").fadeIn('slow');
});


/*Carregar Menu para outras páginas*/

$(document).ready(function()
{  
    $("#header").load("html/header.html");  
    $("#footer").load("html/footer.html");
    $("#footerGerencial").load("footer.html");
    $("#lancamentos").load("lancamento.html");
    $("#headerGerencial").load("headerGerencial.html");
}); 


/*Carregar páginas com o clique*/
$(document).ready(function() 
{
    $('.menu-interno').click(function() 
    {
        $("#conteudo").load($(this).attr('href'));
        $("#conteudoInicial").hide();
        return false;
    });    
});

