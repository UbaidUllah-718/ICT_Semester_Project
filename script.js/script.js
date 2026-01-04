/* TRAILER POPUP */
function openTrailer() {
  document.getElementById("trailerPopup").style.display = "flex";
}

function closeTrailer() {
  document.getElementById("trailerPopup").style.display = "none";
}

/* SCROLL FUNCTIONS (WORK FOR ALL ROWS) */
function scrollRowLeft(rowId) {
  document.getElementById(rowId).scrollBy({
    left: -400,
    behavior: "smooth"
  });
}

function scrollRowRight(rowId) {
  document.getElementById(rowId).scrollBy({
    left: 400,
    behavior: "smooth"
  });
}

/* OPEN DETAILS PAGE */
function openDetails(showName) {
  window.location.href = "details.html?show=" + showName;
}
function openDetails(show) {
  window.location.href = "details.html?show=" + show;
}
