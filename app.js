let title = $('input').eq(0).val();
let rating = $('input').eq(1).val();
$('<ul>').appendTo('body');

$('button').on('click', function () {
    let title = $('input').eq(0).val();
    let rating = $('input').eq(1).val();
    if (0 <= rating && rating <= 10 && title.length >= 2) {

        let liElement = $('<li>').text(`${title} ${rating}`);
        let removeBtn = $('<button>').text('Remove').addClass('removeBtn');
        liElement.append(removeBtn);
        $('ul').append(liElement);
        $('input').eq(0).val('');
        $('input').eq(1).val('');

    } else {
        alert('Rating should be between 0 and 10 and title should have at least 2 characters');
    }
});

$('ul').on('click', '.removeBtn', function () {
    $(this).parent().remove();
});



