function seven() {
  const val = (document.getElementById("input").value += "7");
  console.log(val);
}
function eight() {
  const val = (document.getElementById("input").value += "8");
  console.log(val);
}
function nine() {
  const val = (document.getElementById("input").value += "9");
  console.log(val);
}
function six() {
  const val = (document.getElementById("input").value += "6");
  console.log(val);
}
function five() {
  const val = (document.getElementById("input").value += "5");
  console.log(val);
}
function four() {
  const val = (document.getElementById("input").value += "4");
  console.log(val);
}
function three() {
  const val = (document.getElementById("input").value += "3");
  console.log(val);
}
function two() {
  const val = (document.getElementById("input").value += "2");
  console.log(val);
}
function one() {
  const val = (document.getElementById("input").value += "1");
  console.log(val);
}
function zero() {
  const val = (document.getElementById("input").value += "0");
  console.log(val);
}
function dot() {
  const val = document.getElementById("input");
  val.type = "text";
  val.value += ".";
  console.log(val.value);
}
function divide() {
  const val = document.getElementById("input");
  val.type = "text";
  val.value += "/";
  console.log(val.value);
}

function into() {
  const val = document.getElementById("input");
  val.type = "text";
  val.value += "*";
  console.log(val.value);
}
function minus() {
  const val = document.getElementById("input");
  val.type = "text";
  val.value += "-";
  console.log(val.value);
}
function plus() {
  const val = document.getElementById("input");
  val.type = "text";
  val.value += "+";
  console.log(val.value);
}

function del() {
  const del = document.getElementById("input");
  const res = del.value;
  let resArray = res.split("");
  console.log(resArray);
  if (del.value.length > 0) {
    resArray.pop();
    del.value = resArray.join("");
  }
}

function reset() {
  document.getElementById("input").value = "";
}

function calculate() {
  const val = document.getElementById("input");
  const inputValue = eval(val.value);
  if (inputValue !== "") {
    const result = eval(val.value);
    val.value = result;
  } else {
    val.value = "";
  }
}
