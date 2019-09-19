
let date = new Date().toLocaleDateString(); // today's date


//Converts the current time to a hex code
function timeToHex() {
    let time = new Date().toLocaleTimeString();
    let number = time.replace(/:+/g, '').replace(/ /, '').replace(/PM/, '').replace(/AM/, '');

    let hex;

    if (number.length === 5) {
      let newTime = "0" + number;
      hex = "#" + newTime;
      console.log(hex);
      return hex;
    }

    else {
      hex = "#" + number;
      console.log(hex);
      return hex;
    }
  }
timeToHex();

// changes the text color to white/black depending background color

function changeTextColor () {
    let hex = timeToHex();
    let arr = hex.split('').slice(1,hex.length);

    if (arr[0].match(/[0-9]/)) {
        $('body').css('color', 'white');
    }
    else {
        $('body').css('color', '#404040');
    }
};
changeTextColor();

//takes the hex color above and uses it as a background color

$(document).ready(function() {
    $('.banner').css('background-color', timeToHex());
})

//reloads the page to refresh the color

$(document).ready(function() {
    $('.btn-primary').click(function() {
        timeToHex();
        location.reload();
    });

    $('#test').html("Hello, World!").slideDown(300);
    $('#title').html(`The current date is ${date}`);


});