
const render = (data) => {
    console.log('Data: ', data);

    $('#quote').html(data.quote);
    $('.blockquote-footer').html(data.author);
    // alert('Successfully made!');
};


const fetchRandomQuote = () => {
    $.ajax({
        url: 'https://random-quote-creole.herokuapp.com/random',
        method: 'GET'
    })
        .done((data) => render(data))
        .fail(() => {
            alert('Ooops, something happened!');
        });
};

fetchRandomQuote();

$('#new-quote').on('click', () => {
    fetchRandomQuote();
});