var n = Math.random() * 100 + 1;
n = Math.round(n);

function alertMsg() {
    var textOne = document.getElementById('text-one').value;
    var textTwo = document.getElementById('text-two').value;

    textOne = textOne.slice(0,1).toUpperCase() + textOne.slice(1, textOne.length).toLowerCase();
    textTwo = textTwo.slice(0,1).toUpperCase() + textTwo.slice(1, textTwo.length).toLowerCase();

    document.getElementById('msg').innerHTML = textOne + ' ' + n + '% 💖' + textTwo;

}