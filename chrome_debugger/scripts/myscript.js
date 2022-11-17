var button_1 = document.getElementById("button1");
var button_2 = document.getElementById("button2");

button_1.addEventListener("click", handle_button1);

function handle_button1() {
  var error_msg1 = document.getElementsByClassName("error_msg1")[0];
  var mariem_img = document.getElementById("meriam");

  if (mariem_img == null) {
    error_msg1.style.display = "block";
  } else {
    var success_msg = document.getElementsByClassName("success_msg")[0];
    success_msg.style.display = "block";
  }
}

button_2.addEventListener("click", handle_button2);

function handle_button2() {
  var error_msg2 = document.getElementsByClassName("error_msg2")[0];
  error_msg2.style.display = "block";
}
