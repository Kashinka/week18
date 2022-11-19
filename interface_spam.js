let badWords = [/viagra/ig, /козявка/ig, /какашка/ig];

function checkSpam(message) {

    for (let j = 0; j < badWords.length; j++) {
        
        const badWord = badWords[j];

        message = message.replaceAll(badWord, 'xxx');
    }

    return message;

}

function comment () {

    let storage = $('#user-input').val();

    let arr = JSON.parse(localStorage.comments);

    storage = checkSpam(storage);

    if (!Array.isArray(arr)) {
        arr = [storage];
    } else {
        arr.push(storage);
    }

    localStorage.comments = JSON.stringify(arr);

    $('#user-input').val('');
    
    Showcomments ();

}

document.addEventListener('DOMContentLoaded', function () {

    Showcomments ();

});

function Showcomments () {

    let arr = JSON.parse(localStorage.comments);

    let comments_result = '';

    for (let i = 0; i < arr.length; i++) {

        const item = arr [i];

        comments_result += "<div>" + item + "</div>"

    }

    document.getElementById('result').innerHTML = comments_result;

}
