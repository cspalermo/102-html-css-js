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

function getItem(){
    var preference = prompt('Would you like to order chocolate or caramel?');
    var item;
    // while true and true // this keeps running / ONE FALSE EJECTS FROM WHILE LOOP
    while(preference !== 'chocolate' && preference !== 'caramel'){
      preference = prompt('Would you like chocolate or caramel? PLEASE ANSWER CORRECTLY');
    }
    if (preference === 'chocolate') {
      item = '<img src="images/chocolate.jpeg">';
    } else if (preference === 'caramel') {
      item = '<img src="images/caramel.jpeg">';
    } 
    return item;
  }

function howMany(){
    var count = prompt('Sounds good, how many pieces would you like?');
    // while true and true it keeps asking for a number
    while (count === '' || isNaN(count)){
      var count = prompt('How Many would you like to order?  ENTER A NUMBER!');
    }
    return count;
  }

  function showOrder(){
    var item = getItem();
    var total = howMany();
    result = '';
  
    // adds a paragraph with an image in it for each number of times
    for (var i = 0; i < total; i++){
      result = result + '<p>' + item + '</p>';
    }
  return document.write(result);
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

