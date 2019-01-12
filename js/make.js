// find elements
var campo = $("#campo")
var pedina = $("#pedina")[0]

var p_left = 0;
var p_top = 0;
var p_l, p_t;
var unit = 20;
var larghezza = parseInt(campo.css('width'), 10);
var altezza = parseInt(campo.css('height'), 10);

var maketail = false
var makebrick = true
var clearbrick = false

console.log("Make!")

$("#kinput").caret(0);
$("#kinput").keydown(function(e) {
  key = e.originalEvent.key;
  if (key == 'm') {
    clearbrick = false
    makebrick = true
  } else if (key == 'c') {
    clearbrick = true
    makebrick = false
  } else {
    goto(key)
//   console.log(tasto, p_left, p_top)
  }
});