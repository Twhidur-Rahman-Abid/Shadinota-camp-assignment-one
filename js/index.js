const mobileBtn = document.querySelector(".nav--mobile-btn");
const mobileNav = document.querySelector(".nav--mobile");
const logo = document.querySelector(".logo");
const pageTitle = document.getElementsByTagName("title")[0].innerText;

let previusImage;
mobileBtn.addEventListener("click", (e) => {
  const imageName = mobileBtn.src.split("/").pop();

  //change icon image

  if (imageName === "hamburger.svg" || imageName === "black-hamburger.svg") {
    previusImage = imageName;

    mobileBtn.src = "../images/x.svg";
  } else {
    mobileBtn.src = `../images/${previusImage}`;
  }

  // Class toggle
  mobileNav.classList.toggle("nav-open");
  if (pageTitle === "Home") {
    console.log("black logo");
    logo.classList.toggle("black-logo");
  }
});
