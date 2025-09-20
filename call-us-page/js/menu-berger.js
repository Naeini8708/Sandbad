let menu = document.querySelector(".menu"); //سلکت منوی همبرگری
menu.addEventListener("click", function () {
  const submenu = document.querySelector(".submenu"); // سکلت زیرمنو
  if (submenu.style.display === "block") {
    submenu.style.display = "none"; // بسته شدن زیرمنو
  } else {
    submenu.style.display = "block"; // بازشدن زیر منو
  }
});