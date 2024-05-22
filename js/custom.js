"use strict";

const myInput = document.getElementById("my-input");
const key = document.getElementById("key");
const code = document.getElementById("code");
const keypress = document.getElementById("keypress");
const keydown = document.getElementById("keydown");
const keyup = document.getElementById("keyup");

function pressEvent() {
  keypress.classList.add("check");

  setTimeout(function() {
    keypress.classList.remove("check");
  }, 300);
};

function downEvent(e) {
  const el = document.querySelector(`#${e.code}`);
  el.classList.add("on");

  key.innerHTML = `key: ${e.key}`;
  code.innerHTML = `key: ${e.code}`;

  keydown.classList.add("check");

  setTimeout(function() {
    keydown.classList.remove("check");
  }, 300);
};

function upEvent(e) {
  e.preventDefault();

  const el = document.querySelector(`#${e.code}`);
  
  keyup.classList.add("check");

  setTimeout(function() {
    el.classList.remove("on");
    keyup.classList.remove("check");
  }, 300);

};

myInput.addEventListener("keypress", pressEvent);
myInput.addEventListener("keydown", downEvent);
myInput.addEventListener("keyup", upEvent);