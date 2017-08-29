function begin(input) {
  var sum = []

  for (var index = 1; <= input; index +=1) {
    sum.push(index);
    if ((index % 3) === 0) {
      sum.pop(index)
      sum.push("ping");
      else if ((index % 5) === 0) {
      sum.pop(index)
      sum.push("pong");
      else ((index % 15) === 0) {
      sum.pop(index)
      sum.push("PING-PONG!");
    return sum
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
