function checkFunction () {

    const regexName = new RegExp('^[а-яА-Я]{30}|[a-zA-Z]{30}$');
    
    if (regexName.test(document.getElementById('name').value) === false) {

        document.getElementById('result').innerHTML = (`Имя нужно вводить только полностью русскими или английскими буквами`);

    }
}

function register() {

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let username = document.getElementById('username').value;

    let password = document.getElementById('password').value;

    let confirm = document.getElementById('confirm').value;

    if (name === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (email === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (username === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (password=== '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (confirm === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}!`);

    }

} 