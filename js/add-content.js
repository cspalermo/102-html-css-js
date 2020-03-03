var username = prompt('Hello, what is your name?');

document.write('<h3>' + 'Benvenuto!, ' + username + '</h3>')


var preference = prompt('Do you prefer chocolate or caramel?');
var message;
if (preference === 'chocolate') {
    message = 'Yummy, I agree!';
} else if (preference === 'caramel') {
    message = 'Yummy, a bit sticky for my dentures';
} else {
    message = 'Great, another good option';
};
document.write('<h3>' + message + '</h3>');

