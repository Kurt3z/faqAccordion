"use strict";

const openAnswerBtns = document.querySelectorAll(".icon");
console.log(openAnswerBtns);

openAnswerBtns.forEach(btn =>
  btn.addEventListener("click", function (e) {
    const listItemEl = e.target.closest("li");
    const answerEl = listItemEl.querySelector(".answer");
    const btn = e.target;

    console.log(btn.src);

    if (e.target.src.includes("plus")) {
      e.target.src = "./assets/images/icon-minus.svg";
    } else {
      e.target.src = "./assets/images/icon-plus.svg";
    }

    answerEl.classList.toggle("hidden");
    answerEl.style.maxHeight = answerEl.classList.contains("hidden") ? "0" : answerEl.scrollHeight + "px";
  })
);
