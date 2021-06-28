mybutton.addEventListener("click", changeText);
function changeText() {
    mybutton.textContent = "Button clicked"
};

const colorButton = document.querySelector("mybutton2");
const toggleBackgroundColorOnMyButton2 = () => {
    mybutton2.classList.toggle("red");
};
mybutton2.addEventListener("click", toggleBackgroundColorOnMyButton2);






// const clickButton = document.querySelector("mybutton");
// const colorButton = document.querySelector("mybutton2");
// const toggleBackgroundColor = () => {
//     mybutton2.classList.toggle("red");
// };
// mybutton2.addEventListener("click", toggleBackgroundColor);

// ".toggleBackgroundColor");

/*
mybutton2.addEventListener('click', function () { mybutton2.style.background = 'red' });*/

// toggleBackgroundColorOnMyButton2



