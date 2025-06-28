var tabButtons = document.querySelectorAll(".tab-button");
var tabPanels = document.querySelectorAll(".tab-panel");
for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function() {
    var target = this.getAttribute("data-tab");
    for (var j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    for (var k = 0; k < tabPanels.length; k++) {
      tabPanels[k].classList.remove("active");
      if (tabPanels[k].id === target) {
        tabPanels[k].classList.add("active");
      }
    }
  });
}
var headers = document.querySelectorAll(".accordion-header");
for (var m = 0; m < headers.length; m++) {
  headers[m].addEventListener("click", function() {
    var item = this.parentElement;
    var icon = this.querySelector(".icon");

    item.classList.toggle("open");
    icon.textContent = item.classList.contains("open") ? "−" : "+";
  });
}
