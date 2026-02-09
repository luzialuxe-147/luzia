// Language Toggle
let currentLang = "en";
const toggle = document.getElementById("langToggle");
toggle.onclick = () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  toggle.textContent = currentLang === "en" ? "AR" : "EN";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
};
const categoryCards = document.querySelectorAll(".category-card");
const galleryItems = document.querySelectorAll(".gallery .item");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {

    const filter = card.dataset.filter;

    galleryItems.forEach(item => {
      if(item.classList.contains(filter)){
        item.style.display = "block";
      }else{
        item.style.display = "none";
      }
    });

  });
});

// Portfolio Filter
document.querySelectorAll(".filters button").forEach(btn=>{
  btn.onclick=()=>{
    const f = btn.dataset.filter;
    document.querySelectorAll(".item").forEach(i=>{
      i.style.display = (f==="all"||i.classList.contains(f))?"block":"none";
    });
  }
});

// WhatsApp Form
document.getElementById("customForm").onsubmit = e=>{
  e.preventDefault();
  const data = [...e.target.elements].map(i=>i.value).join(" | ");
  window.open(`https://wa.me/963XXXXXXXX?text=${encodeURIComponent(data)}`);
};
