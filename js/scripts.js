function begin(input) {

  var sum = []

  for (var index = 1; index <= input; index += 1) {
    sum.push(index);
    if ((index % 3) === 0) {
      sum.pop(index)
      sum.push("ping");
    } else if ((index % 5) === 0) {
      sum.pop(index)
      sum.push("pong");
    } else if ((index % 15) === 0) {
      sum.pop(index)
      sum.push("PING-PONG!");
    }
  }
  return sum
}

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("input#number").val());
    var result = begin(input);

    var listArray = result.map(function(item)) {
        return ("<li>" + item + "</li>")
    })

    if (isNaN(input)) {
      $("#notNum").show();
    }

    $("ul#final").empty();
    $("ul#final").prepend(list);

    });
  });
