const container = document.querySelector(".container");
const numBars = 30;
const barSize = 100 / numBars;

randomInt = () => {
    return Math.floor((Math.random()*80) + 10);
}

// GENERATE BUTTON
let bars = [];
generate = () => {
    if (isSorting == false) {
        // Clearing previous array
        let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
        bars = [];
        for (let i = 0; i < numBars; i++) {
            const bar = document.createElement("div");
            const barHeight = randomInt();
            const colorVal = barHeight / 80;
            bar.style.height = `${barHeight}%`;
            bar.style.width = `${barSize}%`;
            bar.style.background = `rgba(0, 128, 255, ${colorVal})`;
           
            container.appendChild(bar);
            bars.push(bar);
        }
    }
}
document.querySelector(".generate").addEventListener("click", generate);

// DISPLAY
display = () => {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    for (let i = 0; i < numBars; i++) {
        container.appendChild(bars[i]);
    }
}



// SORT BUTTONS
let isSorting = false;
const sortButtons = document.querySelectorAll(".sort");
sortButtons.forEach((button) => {
    const name = button.innerHTML;
    button.addEventListener("click", () => {
        if (isSorting == false) {
            sortButtons.forEach((button) => {
                button.classList.remove("active");
            })
            button.classList.add("active");
            isSorting = true;
            switch(name) {
                case 'Bubble':
                    bubbleSort();
                    break;
                case 'Insertion':
                    insertionSort();
                    break;
            }
        }
    });
});

generate();
