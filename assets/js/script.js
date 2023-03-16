"use strict";
//The start of program exicution.
window.onload = function () {
  startUp();
};
//Start Up
function startUp() {
  const tabList = document.getElementsByClassName("dish");
  colorSetOfTabs(tabList);
}

function colorSetOfTabs() {
  console.log("color tabs");
}

let tabColorIndex = 0;
const tabColors = [
  "#2de11d",
  "#4848e8",
  "#e84d4d",
  "Orange",
  "Violet",
  "#820ee8",
  "#8e7fc7",
  "#ff008b",
  "#4dc6e8",
  "#17abf5",
  "#4c69bd",
  "#e251dc",
  "#bbb70e",
];
//Method
function colorSetOfTabs(htmlCollection) {
  for (const item of htmlCollection) {
    item.style.backgroundColor = tabColors[tabColorIndex];
    if (tabColorIndex === tabColors.length - 1) {
      tabColorIndex = 0;
    } else {
      tabColorIndex++;
    }
  }
} // End colorSetOfTabs(htmlCollection)
