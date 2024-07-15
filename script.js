const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box");
    container.appendChild(div);
}

let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseover", () => {
        box[i].style.backgroundColor = "blue";
    });
}
