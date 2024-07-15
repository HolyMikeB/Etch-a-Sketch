const container = document.querySelector("#container");

function addListener(box) {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseover", () => {
            box[i].style.backgroundColor = "blue";
        });
    }
}

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

const reset = document.querySelector("button");

reset.addEventListener("click", () => {
    for (let i = 0; i < box.length; i++) {
        container.removeChild(box[i]);
    }
    let newBoard = Number(prompt("Please enter the width of your new board (between 1 and 100)"));
    let newBoardSize = newBoard ** 2;

    for (let i = 0; i < newBoardSize; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "box");
        container.appendChild(div);
    }

    box = document.querySelectorAll(".box")

    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("mouseover", () => {
            box[i].style.backgroundColor = "blue";
        });
    }

    let newWidth = newBoard * 50;

    container.style.width = `${newWidth}px`;
});


