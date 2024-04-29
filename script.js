const accordionItems = document.querySelectorAll(".accordionItem");

accordionItems.forEach((items) => {
  const title = items.querySelector(".accordionTitle");
  const content = items.querySelector(".accordionContent");

  title.addEventListener("click", () => {
    for (let i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != items) {
        accordionItems[i].classList.remove("active");
      } else {
        items.classList.toggle("active");
      }
    }
  });
});
