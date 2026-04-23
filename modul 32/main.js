var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('teksti_id');

button.onclick = function(){
    text.innerHTML = input.value;
}

//search()
var text = "the best school in the world is Digital School!";
var result = text.searchL("Digital School");
document.getElementById('result1').innerHTML = result;

var text = "the best school in the world is Digital School!";
var result = text.searchL(/Digital School/);
document.getElementById('result2').innerHTML = result;

//replace()

var text = "the best school in the world is Digital School!";
var result = text.searchL(/Digital School/,"Another School");
document.getElementById('result1').innerHTML = result;

//test()

var text = "abcdef";
var regex = new RegExp('abcj');
document.getElementById("result 4").innerHTML = regex.test(text);

//match() /g
var text = "my school is the best school in the world ";
var regex = /school/g;
document.getElementById('result5').innerHTML = text.match(regex);

var text = "my school is the best school in the world ";
var regex = /i/g;
document.getElementById('result6').innerHTML = text.match(regex);
///////////////////

//[]
var text = "Digital schol is the best school in the world ";
var regex = /[abc]/g;
document.getElementById('result7').innerHTML = text.match(regex);

//4
var text = "Digital School is in top 10 best schools in the world ";
var regex = /[0-9]/g;
document.getElementById('result8').innerHTML = text.match(regex);

// |
var text = "Digital School is in top 10 best schools in the world ";
var regex = /top|best|school/g;
document.getElementById('result9').innerHTML = text.match(regex);

// nesa ka digit \d

var text = "100 percent! ";
var regex = /i/g;
document.getElementById('result10').innerHTML = text.match(regex);

//per me gjet white space\s
var text = "my school the best school in the world ";
var regex = /i/g;
document.getElementById('result11').innerHTML = text.match(regex);

var text = "my school the best school in the world ";
var regex = /i/g;
document.getElementById('result12').innerHTML = text.match(regex);

var text = "my school the best school in the world ";
var regex = /i/g;
document.getElementById('result13').innerHTML = text.match(regex);


var text = "my school the best school in the world ";
var regex = /i/g;
document.getElementById('result14').innerHTML = text.match(regex);

var text = "my school the best school in the world ";
var regex = /i/g;
document.getElementById('result15').innerHTML = text.match(regex);





