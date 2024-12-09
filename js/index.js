const mobileBtn = document.querySelector(".nav--mobile-btn");
const mobileNav = document.querySelector(".nav--mobile");
const logo = document.querySelector(".logo");
const pageName = location.pathname.split("/").pop();

let previusImage;
mobileBtn.addEventListener("click", (e) => {
  const imageName = mobileBtn.src.split("/").pop();

  //change icon image
  const navfunc = () => {
    if (imageName === "hamburger.svg" || imageName === "black-hamburger.svg") {
      previusImage = imageName;

      pageName === "index.html"
        ? (mobileBtn.src = "./images/x.svg")
        : (mobileBtn.src = "../images/x.svg");
    } else {
      pageName === "index.html"
        ? (mobileBtn.src = `./images/${previusImage}`)
        : (mobileBtn.src = `../images/${previusImage}`);
    }

    //Class toggle
    mobileNav.classList.toggle("nav-open");
    if (pageName === "index.html") {
      logo.classList.toggle("black-logo");
    }
  };

  navfunc();

  console.log(imageName);
});
