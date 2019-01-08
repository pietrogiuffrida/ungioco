function goto(direction){

  p_l = p_left
  p_t = p_top
  if (direction == "ArrowRight") {
    p_l = p_left + unit
  } else if (direction == "ArrowLeft") {
    p_l = p_left - unit
  } else if (direction == "ArrowDown") {
    p_t = p_top + unit
  } else if (direction == "ArrowUp") {
    p_t = p_top - unit
  }

  isok = canMoveTo(p_l, p_t)
//   console.log("isok", isok)
  if (isok == 1) {
    p_left = p_l
    p_top = p_t

    tail(pedina.style.top, pedina.style.left)

    pedina.style.left = p_left + "px"
    pedina.style.top = p_top + "px"

  }
};


function tail(x, y){
  id = 'brick' + x + 'X' + y
  div = '<div class="brick blue" id="' + id + '"></div>'
  campo.append(div)
  $("#" + id)[0].style.top = x
  $("#" + id)[0].style.left = y
}


function canMoveTo(destX, destY) {

  if (destX < 0 | destX > larghezza-20) {
    return 0
  }

  if (destY < 0 | destY > altezza-20) {
    return 0
  }

  brick = $('#brick' + destX + "X" + destY)

  if (brick.length == 0) {
    return 1
  }

  if (brick.css("background-color") == "rgb(0, 0, 0)") {
    return 0
  }

  return 1

}


function vertical_move() {
  var elem = $("#animate");
  var pos = parseInt(elem.css("top"), 10)
  var id = setInterval(frame, 100);
  function frame() {
    if (pos == 480) {
      pos = pos - unit
      console.log(pos)
      elem.css("top", pos + "px");
    } else {
      pos = pos + unit
      console.log(pos)
      elem.css("top", pos + "px");
    }
  }
}


function makeBrick(bc){
  for (var x = bc["x"]; x <= bc["x"]+bc["width"]-unit; x+=unit) {
      for (var y = bc["y"]; y <= bc["y"]+bc["height"]-unit; y+=unit) {
        id = 'brick' + x + 'X' + y

        if ($("#" + id).length == 1) {
          console.log('esiste', id)
          continue;
        }

        div = '<div class="brick" id=' + id + '></div>'
        campo.append(div)

        $("#" + id)[0].style.left = x + "px";
        $("#" + id)[0].style.top = y + "px";
        console.log(id, x, y)
  }}
}