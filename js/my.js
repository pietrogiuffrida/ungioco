// find elements
var campo = $("#campo")
var pedina = $("#pedina")[0]

var p_left = 0;
var p_top = 0;
var p_l, p_t;
var unit = 20;
var larghezza = 750;
var altezza = 500;


console.log("Eccomi")

bcs.forEach(function(bc){
  console.log(bc)
  makeBrick(bc)
})


$("#kinput").caret(0);
$("#kinput").keydown(function(e) {
  tasto = e.originalEvent.key;
  goto(tasto)
//   console.log(tasto, p_left, p_top)
});


// vertical_move()