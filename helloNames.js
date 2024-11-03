function helloName(name){
    alert(`Hello ${name}!`);
}

helloName("GDG on Campus Sogang");

const inputText = document.getElementsById("helloName");
const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", () => {
    helloName(inputText.value);
})
