function encode() {

  var input = document.getElementById("input").value;

  var output = "";

  for (var i = 0; i < input.length; i++) {

    var charCode = input.charCodeAt(i);

    output += "\\u" + ("0000" + charCode.toString(16)).substr(-4);

  }

  document.getElementById("output").value = output;

}

function decode() {

  var input = document.getElementById("input").value;

  var output = "";

  input = input.replace(/\\u[\dA-F]{4}/gi, function (match) {

    return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));

  });

  document.getElementById("output").value = input;

}

