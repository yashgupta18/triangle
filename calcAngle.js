const wrap = document.querySelectorAll(".wrapUp");
const area = document.querySelectorAll(".area");
// const inputOption= document.querySelectorAll(".entryBox");
const radios = document.forms[0].elements;
const option1 = document.querySelectorAll(".option1");
const option2 = document.querySelectorAll(".option2");
const option3 = document.querySelectorAll(".option3");
const error = document.querySelector(".error");

radios[0].addEventListener("change", () => {
  showOrHide(wrap, 0, 1, 2);
});
radios[1].addEventListener("change", () => {
  showOrHide(wrap, 1, 0, 2);
});
radios[2].addEventListener("change", () => {
  showOrHide(wrap, 2, 1, 0);
});

function showOrHide(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2) {
  blockDivs[showDivIndex].style.display = "block";
  blockDivs[hideDivIndex1].style.display = "none";
  blockDivs[hideDivIndex2].style.display = "none";
}
document.forms[1].addEventListener("submit", (e) => {
  e.preventDefault();
  const base = Number(option1[0].value);
  const height = Number(option1[1].value);
  area[0].innerHTML = (base * height) / 2;
});
document.forms[2].addEventListener("submit", (e) => {
  e.preventDefault();
  const a = Number(option2[0].value);
  const b = Number(option2[1].value);
  const c = Number(option2[2].value);
  if (a + b > c && b + c > a && c + a > b) {
    const s = (a + b + c) / 2;
    area[1].innerHTML = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  } else {
    error.style.display = "block";
  }
});

document.forms[3].addEventListener("submit", (e) => {
  e.preventDefault();
  const a = Number(option3[0].value);
  const b = Number(option3[1].value);
  const A = Number(option3[2].value);
  area[2].innerHTML = (a * b * Math.sin((A * Math.PI) / 180)) / 2;
});
