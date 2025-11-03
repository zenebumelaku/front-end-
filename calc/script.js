let buf = "0";
let total = 0;
let preop = null;
const screen = document.querySelector(".screen");

function buttomclick(value) {
  if (isNaN(parseInt(value))) {
    symbol(value);
  } else {
    number(value);
  }
  render();
}
function number(value) {
  if (buf == "0") {
    buf = value;
  } else {
    buf += value;
  }
}
function math(value) {
  if (buf == "0") {
    return;
  }
  const intbuf = parseInt(buf);
  if (total === 0) {
    total = intbuf;
  } else {
    oper(intbuf);
  }
  preop = value;
  buf = "0";
}
function oper(intbuf) {
  if (preop === "+") {
    total += intbuf;
  } else if (preop === "-") {
    total -= intbuf;
  } else if (preop === "×") {
    total *= intbuf;
  } else {
    total /= intbuf;
  }
}
function symbol(value) {
  switch (value) {
    case "C":
      buf = "0";
      total = 0;
      break;
    case "=":
      if (!preop) {
        return;
      }
      oper(parseInt(buf));
      preop = null;
      buf = total.toString();
      total = 0;
      break;
    case "←":
      if (buf.length === 1) {
        buf = "0";
      } else {
        buf = buf.substring(0, buf.length - 1);
      }
      break;
    case "-":
    case "+":
    case "×":
    case "÷":
      math(value);
      break;
  }
}
function render() {
  screen.innerText = buf;
}
function init() {
  document
    .querySelector(".buttoms")
    .addEventListener("click", function (event) {
      buttomclick(event.target.innerText);
    });
}
init();
