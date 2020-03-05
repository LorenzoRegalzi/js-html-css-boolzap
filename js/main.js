$(document).ready(function(){
    $('#invia').click(function(){
        var nomeInput = $('#nome').val();
        $('#nome').val('');
        // $('#nome-utente').html('<span class="rosso">' + nomeInput + '</span>');
        // $('#nome-utente').text('<span class="rosso">' + nomeInput + '</span>');
        // $('#nome-utente').text(nomeInput).attr('class', 'rosso').css('background-color', 'yellow');
        // $('.lista-nomi').append('<div>' + nomeInput + '</div>');
        var messaggio = $('.template .maggio').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
        messaggio.children('.testo-maggio').text(nomeInput); // Modifico il testo messaggio nel messaggio
        messaggio.children('.orario').text('05:05');
        $('.lista-nomi').append(messaggio); // Aggiungo in fondo alla lista nomi il messaggio
        if ($('.lista-nomi').append(messaggio)) {
            var messaggio = $('.templata .giugno').clone(); // Copia del contenuto del messaggio che è dentro al template (display none nel nostro CSS)
            // messaggio.children('.testa-giugno').text(nomeInput); // Modifico il testo messaggio nel messaggio
            messaggio.children('.orario').text('05:05');
            $('.liste-nome').append(messaggio);
        }
    });
});
