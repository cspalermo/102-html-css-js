function askName(){
    var username = prompt('Hello, what is your name?');

    return document.write('<h3>' + 'Benvenuto!, ' + username + '</h3>')
}

function askPreference(){
    var preference = prompt('Do you prefer chocolate or caramel?');
    var message;
    if (preference === 'chocolate') {
    message = 'Yummy, I agree!';
    } else if (preference === 'caramel') {
    message = 'Yummy, a bit sticky for my dentures';
    } else {
    message = 'Great, another good option';
    }
   return document.write('<h3>' + message + '</h3>');
}

function askGreeting(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
    greeting = 'Good evening!';
    } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
    greeting = 'Good morning!';
    } else {
    greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}

