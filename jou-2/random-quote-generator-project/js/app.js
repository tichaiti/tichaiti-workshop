let activeQuote = '';


// Displaying random quotes
const render = (data) => {
    const quote = data.quote;

    activeQuote = quote
    $('#quote').html(quote);
    $('.blockquote-footer').html(data.author);
};


// Fetching random quote
const fetchRandomQuote = () => {

   
    $.ajax({
        url: 'https://random-quote-creole.herokuapp.com/random',
        method: 'GET'
    })
        .done((data) => render(data))
        .fail(() => alert('Ooops, something happened!'));
};

fetchRandomQuote();

// Getting new quote
$('#new-quote').on('click', () => fetchRandomQuote());

$('.socialButton').on('click', function() {
    console.log('Testing');
    const self = $(this);
    const socialMedia = self.html().toLowerCase();

    if (socialMedia.toLowerCase().includes('facebook')) {
        const webUrl = 'https://www.facebook.com/sharer/sharer.php?';
        const u = 'github.com';
        open(`${webUrl}u=${u}&quote=${activeQuote}`, 'pop', 'width=600, height=400, scrollbars=no');
        return false;
    }

    const url = `https://twitter.com/intent/tweet?text=${activeQuote}&hashtags=haitiCodingWorkshop`;
    open(url, 'pop', 'width=600, height=400, scrollbars=no');
});



// Showing the loading spinner
$(document)
    .ajaxSend(() => $('.loader').addClass('loading'))
    .ajaxStop(() => $('.loader').removeClass('loading'));