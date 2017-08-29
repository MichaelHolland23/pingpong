function begin(input) {
  var pong = []

  for (var index = 1; <= input; index +=1) {
    pong.push(index);
    if (index % 3 = 0) {
      pong.pop(index)
      pong.push("ping");
      else (index % 5 = 0);
      pong.pop(index)
      pong.push("pong");
      else (index % 15 = 0);
      pong.pop(index)
      pong.push("PING-PONG!");
    return pong
    }
  }
}







  $(document).ready(function() {
    $("#pingpong").submit(function(event) {
      event.preventDefault();

      var input = parseInt($("#number").val());
        alert(input);
    });
  });
