const progress = document.getElementById("progressLine");
const circles = document.querySelectorAll(".circle");
const next = document.querySelector("#next");
const previous = document.querySelector("#prev");

let progressCount = 1;

next.addEventListener("click", () => {
    progressCount++;
    if (progressCount > circles.length) {
        progressCount = circles.length;
    }
    updateNext();
    progressLine();
    buttonDisable();
    
})

previous.addEventListener("click", () => {
    progressCount--;
    if(progressCount < 1) {
        progressCount = 1;
    }
    updatePrevious();
    progressLine();
    buttonDisable();
})

function updateNext() {
    let x = progressCount - 1;
    circles[x].classList.add("active");
}

function updatePrevious() {
    let x = progressCount;
    circles[x].classList.remove("active");
}

function progressLine() {
    progress.style.width = `${(progressCount - 1)/(circles.length -1) * 100}%`;
}

function buttonDisable() {
    if (progressCount == 1) {
        previous.classList.add("disabled");
    }
    else if (progressCount == circles.length) {
        next.classList.add("disabled");
    }
    else {
        previous.classList.remove("disabled");
        next.classList.remove("disabled");
    }
}