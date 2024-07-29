let acc = document.getElementsByClassName("accordeon-btn");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", accordeon);
};

function accordeon() {
    this.classList.toggle("active");    
    let page = this.nextElementSibling;
    if (page.style.display === "block") {
      page.style.display = "none";
    } else {
      page.style.display = "block";
    };
};

