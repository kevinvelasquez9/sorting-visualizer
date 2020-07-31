async function bubbleSort() {
    for (let i = 0; i < numBars; i++) {
        for (let j = 0; j < numBars-i-1; j++) {
            const color1 = bars[j].style.background;
            const color2 = bars[j+1].style.background;
            bars[j].style.background = "rgba(190, 144, 212,1)";
            bars[j+1].style.background = "rgba(155, 89, 182, 1)";
            await new Promise(r => setTimeout(r, 50));
            const height1 = parseInt(bars[j].style.height.slice(0,-1));
            const height2 = parseInt(bars[j+1].style.height.slice(0,-1));
            if (height1 > height2) {
                bars[j].style.background = "rgba(155, 89, 182, 1)";
                bars[j+1].style.background = "rgba(190, 144, 212,1)";
                await new Promise(r => setTimeout(r, 50));
                display();
                const temp = bars[j];
                bars[j] = bars[j+1];
                bars[j+1] = temp;
                bars[j].style.background = color2;
                bars[j+1].style.background = color1;
            }
            else {
                bars[j].style.background = color1;
                bars[j+1].style.background = color2;
            }
            display();
        }
    }
    sortButtons.forEach((button) => {
        button.classList.remove("active");
    });
    isSorting = false;
}