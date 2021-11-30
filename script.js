let display1 = document.querySelector("h2");
let display2 = document.querySelector("h3");
const numpad = document.querySelector(".numpad");
const display = document.querySelector(".display");
const history = document.querySelector(".history");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let oneSub = document.querySelector(".one-sub");
let twoSub = document.querySelector(".two-sub");
let threeSub = document.querySelector(".three-sub");
let fourSub = document.querySelector(".four-sub");
let fiveSub = document.querySelector(".five-sub");

const buttons = Array.from(document.querySelectorAll("li"));
let mem1 = [];
let mem2 = [];
let answer1 = [];
let answer2 = [];
let answer3 = [];
let his = [];

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "A/C":
        display1.textContent = "";
        display2.textContent = "";
        mem1 = [];
        mem2 = [];
        break;
      case "del":
        display1.textContent = display1.textContent.slice(0, -1);
        break;
      case "7":
      case "8":
      case "9":
      case "4":
      case "5":
      case "6":
      case "1":
      case "2":
      case "3":
      case "0":
      case ".":
        display1.textContent += e.target.textContent;
        break;
      case "+":
        mem1.push(display1.textContent);
        display2.textContent = display1.textContent + " +";
        display1.textContent = "";
        break;
      case "-":
        mem1.push(display1.textContent);
        display2.textContent = display1.textContent + " -";
        display1.textContent = "";
        break;
      case "x":
        mem1.push(display1.textContent);
        display2.textContent = display1.textContent + " x";
        display1.textContent = "";
        break;
      case "/":
        mem1.push(display1.textContent);
        display2.textContent = display1.textContent + " /";
        display1.textContent = "";
        break;
      case "=":
        mem2.push(display1.textContent);
        answer1 = mem1.map(Number);
        answer2 = mem2.map(Number);
        if (display2.textContent.includes("+")) {
          his.push(display2.textContent + " " + display1.textContent);
          answer3.push(
            answer1[answer1.length - 1] + answer2[answer2.length - 1]
          );
          display1.textContent = answer3[answer3.length - 1];
        } else if (display2.textContent.includes("-")) {
          his.push(display2.textContent + " " + display1.textContent);
          answer3.push(
            answer1[answer1.length - 1] - answer2[answer2.length - 1]
          );
          display1.textContent = answer3[answer3.length - 1];
        } else if (display2.textContent.includes("x")) {
          his.push(display2.textContent + " " + display1.textContent);
          answer3.push(
            answer1[answer1.length - 1] * answer2[answer2.length - 1]
          );
          display1.textContent = answer3[answer3.length - 1];
        } else if (display2.textContent.includes("/")) {
          his.push(display2.textContent + " " + display1.textContent);
          answer3.push(
            answer1[answer1.length - 1] / answer2[answer2.length - 1]
          );
          display1.textContent = answer3[answer3.length - 1].toFixed(3);
        }
        display2.textContent = "";
        break;
      default:
    }
  });
});

function swap() {
  numpad.classList.toggle("off");
  display.classList.toggle("off");
  history.classList.toggle("off");
}

// function log() {
//   one.textContent =
//     his[his.length - 1] + " " + "= " + answer3[answer3.length - 1];
//   two.textContent =
//     his[his.length - 2] + " " + "= " + answer3[answer3.length - 2];
//   three.textContent =
//     his[his.length - 3] + " " + "= " + answer3[answer3.length - 3];
//   four.textContent =
//     his[his.length - 4] + " " + "= " + answer3[answer3.length - 4];
//   five.textContent =
//     his[his.length - 5] + " " + "= " + answer3[answer3.length - 5];
// }

function log() {
  if (answer3.length <= 0) {
    one.textContent = "No history";
    two.textContent = "-";
    three.textContent = "-";
    four.textContent = "-";
    five.textContent = "-";
  } else if (answer3.length <= 1) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
  } else if (answer3.length <= 2) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
    two.textContent = his[his.length - 2];
    twoSub.textContent = "= " + answer3[answer3.length - 2];
  } else if (answer3.length <= 3) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
    two.textContent = his[his.length - 2];
    twoSub.textContent = "= " + answer3[answer3.length - 2];
    three.textContent = his[his.length - 3];
    threeSub.textContent = "= " + answer3[answer3.length - 3];
  } else if (answer3.length <= 4) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
    two.textContent = his[his.length - 2];
    twoSub.textContent = "= " + answer3[answer3.length - 2];
    three.textContent = his[his.length - 3];
    threeSub.textContent = "= " + answer3[answer3.length - 3];
    four.textContent = his[his.length - 4];
    fourSub.textContent = "= " + answer3[answer3.length - 4];
  } else if (answer3.length <= 5) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
    two.textContent = his[his.length - 2];
    twoSub.textContent = "= " + answer3[answer3.length - 2];
    three.textContent = his[his.length - 3];
    threeSub.textContent = "= " + answer3[answer3.length - 3];
    four.textContent = his[his.length - 4];
    fourSub.textContent = "= " + answer3[answer3.length - 4];
    five.textContent = his[his.length - 5];
    fiveSub.textContent = "= " + answer3[answer3.length - 5];
  } else if (answer3.length > 5) {
    one.textContent = his[his.length - 1];
    oneSub.textContent = "= " + answer3[answer3.length - 1];
    two.textContent = his[his.length - 2];
    twoSub.textContent = "= " + answer3[answer3.length - 2];
    three.textContent = his[his.length - 3];
    threeSub.textContent = "= " + answer3[answer3.length - 3];
    four.textContent = his[his.length - 4];
    fourSub.textContent = "= " + answer3[answer3.length - 4];
    five.textContent = his[his.length - 5];
    fiveSub.textContent = "= " + answer3[answer3.length - 5];
  }
}
