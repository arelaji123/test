let isDOBOpen = false;
let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const seetingContent = document.getElementById("sContent");
const initialTextEl = document.getElementById("initialTextEl");
const afterDOBButton = document.getElementById("afterDOBButton");
const dobBTN = document.getElementById("dobBTN");
const DOBItem = document.getElementById("DOBItem");
const yearEl = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const second = document.getElementById("second");
const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    seetingContent.classList.add("hide");
  } else {
    seetingContent.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
  // console.log(isDOBOpen);
};
const updateAge = () => {
  const currentDate = new Date();
  // console.log(currentDate);
  const dateDiff = currentDate - dateOfBirth;
  // console.log(dateDiff);
  const yearEl = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearEl.innerHtml = year;
};
const setofDOB = () => {
  dateOfBirth = DOBItem.value;

  // console.log("ur date of birth", dateOfBirth);
  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterDOBButton.classList.remove("hide");
    updateAge();
  } else {
    afterDOBButton.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }
};
setofDOB();
const setDObHandler = () => {};

settingCog.addEventListener("click", toggleDateOfBirthSelector);
dobBTN.addEventListener("click", setofDOB);
